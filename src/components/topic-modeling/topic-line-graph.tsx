import {
  Button,
  Checkbox,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";

import { AnnotationLabel } from "react-annotation";

import { CustomLayerProps, Line, ResponsiveLine } from "@nivo/line";
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
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";
import {
  generateLinkedInShareLink,
  getApiCallParamsFromUrlParams,
} from "./helpers/utils";

import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  ageFilterOptions,
  genderFilterOptions,
  stateFilterOptions,
} from "./helpers/filters";
import { topicFilterOptions, jobFilterOptions } from "./helpers/filters";
import { useState } from "react";
import { CartesianMarkerProps } from "@nivo/core";
import { actorFilterOptions } from "./helpers/filters";
import { containerSizes } from "@bit/limebit.limebit-ui.default-container";
import { Box } from "@chakra-ui/react";

interface TopicReducerAction {
  action: "pending" | "idle" | "resolved" | "rejected";
  data: TopicData[];
  markers: CartesianMarkerProps[];
  colors: string[];
}

interface TopicLineGraphState {
  status: "idle" | "pending" | "resolved" | "rejected";
  data: TopicData[];
  markers: CartesianMarkerProps[];
  colors: string[];
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
    const actor = actorFilterOptions.find((actor) => actor.key == filter.actor);

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
      actor?.label || "Gesamter Bundestag",
      gender?.label,
      age?.label,
      electionPlace?.label,
      job?.label,
    ].filter(Boolean);

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
        colors: action.colors,
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
    colors: [],
  });

  useEffect(() => {
    const filters = queryString.parse(window.location.search);
    if (filters?.filters && typeof filters.filters == "string") {
      //  todo: maybe unknown type
      const filterObject: Array<FilterParams> = JSON.parse(filters.filters);

      if (filterObject && filterObject?.length) {
        dispatchData({ action: "pending", data: [], markers: [], colors: [] });
        const dataFetchePromises = [];

        const uniqueGraphColors: string[] = [];
        for (let i = filterObject.length - 1; i >= 0; i--) {
          if (filterObject[i]) {
            const apiCallParams = getApiCallParamsFromUrlParams(
              filterObject[i]
            );
            if (apiCallParams) {
              uniqueGraphColors.push(filterObject[i].color);
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
                const id = getResultLabel(
                  filterObject,
                  dataResultArray.length - 1 - index
                );
                const smoothedData = smoothTopicResultData(data.data);
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
                colors: uniqueGraphColors,
              });
            });
          })
          .catch((error) => console.log(error));
      }
    }
  }, [router.query]);

  const legendItemHeight = 40;

  // show annotations/markers only on desktop
  const [showAnnotations, setToggleAnnotations] = useState(true);
  const [showMarkers, setToggleMarkers] = useState(true);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const hasAnnotations = state.data.find((item) =>
    item.data.find((innerItem) => Boolean(innerItem?.annotation))
  );
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
          Wählen Sie unten das erste Thema für Ihre Analyse
        </DefaultText>
      )}
      <Flex
        filter={state.status == "pending" ? "blur(4px)" : undefined}
        id={graphWrapperId}
        position="relative"
        height={{
          base: `${320 + state.data.length * legendItemHeight}px`,
          sm: `${320 + state.data.length * legendItemHeight}px`,
          md: `${320 + state.data.length * legendItemHeight}px`,
          lg: `${450 + state.data.length * legendItemHeight}px`,
          xl: `${600 + state.data.length * legendItemHeight}px`,
        }}
        width={{
          base: "95vw",
          xl: "70vw",
        }}
        maxWidth={{ lg: "1218px", xl: "calc(70vw - 32px)" }}
      >
        <ResponsiveLine
          margin={{
            top: legendItemHeight,
            right: 10,
            bottom: 50 + state.data.length * legendItemHeight,
            left: 40,
          }}
          data={state.data || []}
          animate={true}
          enableSlices={"x"}
          yFormat=" >-.3f"
          enablePoints={true}
          layers={[
            "grid",
            "markers",
            "axes",
            "areas",
            "lines",
            "mesh",
            "legends",
            isMobile ? "legends" : "slices",
            showAnnotations ? CustomAnnotation : "legends",
          ]}
          curve="monotoneX"
          colors={state.colors}
          yScale={{
            type: "linear",
            stacked: false,
          }}
          xScale={{
            type: "linear",
            min: 1949,
            max: 2021,
            stacked: false,
            // tickSize: 5,
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
          marginX="2"
          // bottom={`${
          //   state.data.length ? state.data.length * legendItemHeight - 15 : -15
          // }px`}
          top={0}
          right={0}
          display={{ base: "none", md: "initial" }}
        >
          {hasAnnotations && (
            <Checkbox
              colorScheme="gray"
              defaultIsChecked={showAnnotations}
              onChange={() => setToggleAnnotations(!showAnnotations)}
            >
              Hinweise Anzeigen
            </Checkbox>
          )}
          {state.markers.length > 0 && (
            <Checkbox
              colorScheme="gray"
              defaultIsChecked={showMarkers}
              onChange={() => setToggleMarkers(!showMarkers)}
            >
              Ereignisse Anzeigen
            </Checkbox>
          )}
        </HStack>
        {state.data.length > 0 && (
          <Box
            position="absolute"
            zIndex="1000"
            bottom={{
              base: "unset",
              md: `${
                state.data.length
                  ? state.data.length * legendItemHeight - 50
                  : -50
              }px`,
            }}
            right={{ base: "unset", md: 0 }}
            left={{ base: 0, md: "unset" }}
            top={{ base: "-10px", md: "unset" }}
            textAlign="center"
            display={{ base: "inline-flex", md: "initial" }}
            alignItems={{ base: "center", md: "initial" }}
          >
            <DefaultText
              as="label"
              fontSize={{ base: "14px" }}
              marginBottom={0}
            >
              Diese Analyse teilen
            </DefaultText>
            <Box>
              <IconButton
                onClick={handleTwitterButtonClick}
                justifyContent={"center"}
                fontSize={{ base: "2xl", md: "2xl", lg: "3xl", xl: "4xl" }}
                variant="ghost"
                aria-label="GitHub"
                icon={<FaTwitter color="#1DA1F2" />}
                marginX="2"
                disabled={state.status == "resolved" ? false : true}
              />
              <IconButton
                onClick={handleLinkedInButtonClick}
                justifyContent={"center"}
                fontSize={{ base: "2xl", md: "2xl", lg: "3xl", xl: "4xl" }}
                variant="ghost"
                aria-label="GitHub"
                icon={<FaLinkedin color="#2867B2" />}
                marginX="2"
                disabled={state.status == "resolved" ? false : true}
              />
              <IconButton
                onClick={handleFacebookButtonClick}
                justifyContent={"center"}
                fontSize={{ base: "2xl", md: "2xl", lg: "3xl", xl: "4xl" }}
                variant="ghost"
                aria-label="GitHub"
                icon={<FaFacebookSquare color="#4267B2" />}
                marginX="2"
                disabled={state.status == "resolved" ? false : true}
              />
            </Box>
          </Box>
        )}
      </Flex>
      <Flex
        marginTop={{
          base: "4",
          md: "4",
          lg: "6",
          xl: "8",
        }}
        width="100%"
        justifyContent="flex-end"
      ></Flex>
    </Flex>
  );
};
