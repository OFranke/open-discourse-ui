import {
  Button,
  Checkbox,
  Flex,
  FlexProps,
  HStack,
  IconButton,
} from "@chakra-ui/react";

import { AnnotationLabel } from "react-annotation";

import { CustomLayerProps, Line } from "@nivo/line";
import { useEffect, useReducer } from "react";
import {
  Annotation,
  FilterParams,
  TopicData,
  TopicDataEntry,
} from "./helpers/types";
import {
  generateTwitterShareLink,
  generateFacebookShareLink,
  smoothTopicResultData,
} from "./helpers/utils";
import { useRouter } from "next/router";
import queryString from "query-string";
import LoadingSpinner from "@bit/limebit.chakra-ui-recipes.loading-spinner";
import DefaultText from "@bit/limebit.limebit-ui.default-text";
import {
  generateLinkedInShareLink,
  getApiCallParamsFromUrlParams,
} from "./helpers/utils";

import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  ageFilterOptions,
  genderFilterOptions,
  politicianFilterOptions,
  stateFilterOptions,
} from "./helpers/filters";
import {
  partyFilterOptions,
  topicFilterOptions,
  jobFilterOptions,
} from "./helpers/filters";
import { useState } from "react";
import { CartesianMarkerProps } from "@nivo/core";

interface TopicReducerAction {
  action: "pending" | "idle" | "resolved" | "rejected";
  data: TopicData[];
  markers: CartesianMarkerProps[];
}

interface TopicLineGraphState {
  status: "idle" | "pending" | "resolved" | "rejected";
  data: TopicData[];
  markers: CartesianMarkerProps[];
}

const CustomAnnotation = ({
  series,
  xScale,
  yScale,
  innerHeight,
}: CustomLayerProps) => {
  const Annotations = series.map((serie) => {
    return serie.data.map((serieDataEntry) => {
      if (serieDataEntry.data?.annotation) {
        const annotation: Annotation = serieDataEntry.data.annotation;
        console.log(
          "\x1b[33m%s\x1b[0m",
          "%c >> serieDataEntry.position.x",
          serieDataEntry.position.x
        );
        console.log(
          "\x1b[33m%s\x1b[0m",
          "%c >> serieDataEntry.position.y",
          serieDataEntry.position.y
        );
        return (
          <AnnotationLabel
            key={`${serieDataEntry.position.x} - ${serieDataEntry.position.y}`}
            x={serieDataEntry.position.x}
            y={serieDataEntry.position.y}
            nx={serieDataEntry.position.x}
            ny={serieDataEntry.position.y - 200}
            note={{
              title: annotation.title,
              label: annotation.description,
            }}
          />
        );
      }
      return null;
    });
  });

  return <>{Annotations}</>;
};

const getResultLabel = (
  filterObject: Array<FilterParams>,
  index: number
): string => {
  const filter = filterObject?.[index];

  if (filter) {
    const actor = [...partyFilterOptions, ...politicianFilterOptions].find(
      (actor) => actor.key == filter.actor
    );

    const topic = topicFilterOptions.find(
      (topic) => topic.key == filter.topics
    );

    const gender = genderFilterOptions.find(
      (gender) => gender.key == filter.gender
    );
    const age = ageFilterOptions.find((age) => age.key == filter.age);
    const electionPlace = stateFilterOptions.find(
      (electionPlace) => electionPlace.key == filter.state
    );
    const job = jobFilterOptions.find((job) => job.key == filter.job);

    const labels = [
      topic?.label,
      actor?.label,
      gender?.label,
      age?.label,
      electionPlace?.label,
      job?.label,
    ].filter(Boolean);

    console.log("\x1b[33m%s\x1b[0m", "%c >> labels", labels);

    return `${index + 1}: ${labels.join(", ")}`;
  }
  return `${index} Unbekanntes Thema`;
};
const dataReducer = (
  previousState: TopicLineGraphState,
  action: TopicReducerAction
): TopicLineGraphState => {
  switch (action.action) {
    case "idle": {
      return {
        ...previousState,
      };
    }
    case "pending": {
      return {
        ...previousState,
        status: "pending",
      };
    }
    case "resolved": {
      const uniqueMarkerHelper: string[] = [];
      const uniqueMarkers = action.markers.filter((marker) => {
        if (!marker.legend) {
          return false;
        }

        if (!uniqueMarkerHelper.includes(marker.legend)) {
          uniqueMarkerHelper.push(marker.legend);
          return true;
        }
        return false;
      });
      uniqueMarkers.forEach(
        (marker) =>
          (marker.lineStyle = {
            // stroke: "red",
          })
      );
      return {
        ...previousState,
        status: "resolved",
        data: action.data,
        markers: uniqueMarkers,
      };
    }
    case "rejected": {
      return {
        ...previousState,
      };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.action}`);
    }
  }
};

export const TopicLineGraph: React.FC<FlexProps> = ({ ...flexProps }) => {
  const router = useRouter();
  const graphWrapperId = "topic-modelling-line-graph";
  const handleTwitterButtonClick = async () => {
    const shareLink = await generateTwitterShareLink({
      urlPath: router.pathname,
      selector: `#${graphWrapperId}`,
      queryObject: router.query,
    });
    window.open(shareLink, "_blank");
  };

  const handleFacebookButtonClick = async () => {
    const shareLink = await generateFacebookShareLink({
      urlPath: router.pathname,
      selector: `#${graphWrapperId}`,
      queryObject: router.query,
    });
    window.open(shareLink, "_blank");
  };
  const handleLinkedInButtonClick = async () => {
    const shareLink = await generateLinkedInShareLink({
      urlPath: router.pathname,
      selector: `#${graphWrapperId}`,
      queryObject: router.query,
    });
    window.open(shareLink, "_blank");
  };

  const [state, dispatchData] = useReducer(dataReducer, {
    status: "idle",
    data: [],
    markers: [],
  });

  useEffect(() => {
    const filters = queryString.parse(window.location.search);
    if (filters?.filters && typeof filters.filters == "string") {
      //  todo: maybe unknown type
      const filterObject: Array<FilterParams> = JSON.parse(filters.filters);

      if (filterObject && filterObject?.length) {
        dispatchData({ action: "pending", data: [], markers: [] });
        const dataFetchePromises = [];

        for (let i = 0; i <= 5; i++) {
          if (filterObject[i]) {
            const apiCallParams = getApiCallParamsFromUrlParams(
              filterObject[i]
            );

            if (apiCallParams) {
              // dataFetchePromises.push(mockFetchData(`topic ${i}`));
              dataFetchePromises.push(
                fetch(
                  `https://api.opendiscourse.de:5400/topicmodelling?${queryString.stringify(
                    apiCallParams
                  )}`,
                  {
                    method: "GET",
                    headers: { "content-type": "application/json" },
                  }
                )
              );
            }
          }
        }
        Promise.all(dataFetchePromises)
          .then((resultArray) => {
            const getBodyPromises: Promise<{
              data: TopicDataEntry[];
              markers: CartesianMarkerProps[];
            }>[] = [];
            resultArray.map((result) => getBodyPromises.push(result.json()));
            Promise.all(getBodyPromises).then((dataResultArray) => {
              const topicResult: TopicData[] = [];
              const markers: CartesianMarkerProps[] = [];

              dataResultArray.map((data, index) => {
                const id = getResultLabel(filterObject, index);
                const smoothedData = smoothTopicResultData(data.data);
                console.log("\x1b[33m%s\x1b[0m", "%c >> markers", data.markers);
                topicResult.push({
                  id: id,
                  data: smoothedData,
                });
                markers.push(...data.markers);
              });
              dispatchData({
                action: "resolved",
                data: topicResult,
                markers: markers,
              });
            });
          })
          .catch((error) => console.log(error));
      }
    }
  }, [router.query]);

  const legendItemHeight = 40;
  const addedHeight = state.data.length
    ? state.data.length * legendItemHeight
    : 0;

  const [showAnnotations, setToggleAnnotations] = useState(true);
  const [showMarkers, setToggleMarkers] = useState(true);

  console.log("\x1b[33m%s\x1b[0m", "%c >> addedHeight", addedHeight);
  return (
    <Flex
      {...flexProps}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      {state.status == "pending" && (
        <LoadingSpinner position="absolute" zIndex={1} />
      )}
      {state.status == "idle" && !state.data.length && (
        <DefaultText position="absolute" zIndex={1}>
          Wählen Sie Filter aus und starten Sie die Topic Suche
        </DefaultText>
      )}
      <Flex
        filter={state.status == "pending" ? "blur(4px)" : undefined}
        id={graphWrapperId}
        position="relative"
      >
        <Line
          width={1200}
          height={400 + state.data.length * legendItemHeight}
          margin={{
            top: 15,
            right: 20,
            bottom: 50 + state.data.length * legendItemHeight,
            left: 80,
          }}
          data={state.data || []}
          animate={true}
          enableSlices={"x"}
          yFormat=" >-.2f"
          enablePoints={true}
          layers={[
            "grid",
            "markers",
            "axes",
            "areas",
            "crosshair",
            "lines",
            "slices",
            "mesh",
            "legends",
            showAnnotations ? CustomAnnotation : "legends",
          ]}
          curve="cardinal"
          colors={["#B83280", "#6B46C1", "#C05621", "#3182ce", "#38A169"]}
          yScale={{
            type: "linear",
            stacked: false,
          }}
          xScale={{
            type: "symlog",
            min: 1950,
            max: 2020,
          }}
          axisLeft={{
            format: (value) => `${Number(value)}`,
          }}
          legends={[
            {
              anchor: "bottom-left",
              direction: "column",
              itemWidth: 600,
              itemHeight: legendItemHeight,
              translateY: 30 + state.data.length * legendItemHeight,
            },
          ]}
          markers={showMarkers ? state.markers : undefined}
        />
        <HStack
          spacing={5}
          position="absolute"
          zIndex="1000"
          bottom={`${
            state.data.length ? state.data.length * legendItemHeight - 15 : -15
          }px`}
          right={0}
        >
          <Checkbox
            colorScheme="gray"
            defaultIsChecked={showAnnotations}
            onChange={() => setToggleAnnotations(!showAnnotations)}
          >
            Hinweise Anzeigen
          </Checkbox>
          <Checkbox
            colorScheme="gray"
            defaultIsChecked={showMarkers}
            onChange={() => setToggleMarkers(!showMarkers)}
          >
            Ereignisse Anzeigen
          </Checkbox>
        </HStack>
      </Flex>
      <Flex
        marginTop={{
          base: "4",
          md: "4",
          lg: "6",
          xl: "8",
        }}
      >
        <IconButton
          onClick={handleTwitterButtonClick}
          justifyContent={{ base: "left", lg: "center" }}
          fontSize={{ base: "md", md: "2xl", lg: "3xl", xl: "4xl" }}
          variant="ghost"
          aria-label="GitHub"
          icon={<FaTwitter />}
          marginX="2"
          disabled={state.status == "resolved" ? false : true}
        />
        <IconButton
          onClick={handleFacebookButtonClick}
          justifyContent={{ base: "left", lg: "center" }}
          fontSize={{ base: "md", md: "2xl", lg: "3xl", xl: "4xl" }}
          variant="ghost"
          aria-label="GitHub"
          icon={<FaFacebookSquare />}
          marginX="2"
          disabled={state.status == "resolved" ? false : true}
        />
        <IconButton
          onClick={handleLinkedInButtonClick}
          justifyContent={{ base: "left", lg: "center" }}
          fontSize={{ base: "md", md: "2xl", lg: "3xl", xl: "4xl" }}
          variant="ghost"
          aria-label="GitHub"
          icon={<FaLinkedin />}
          marginX="2"
          disabled={state.status == "resolved" ? false : true}
        />
      </Flex>
    </Flex>
  );
};
