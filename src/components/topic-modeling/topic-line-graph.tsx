import { Button, Flex, FlexProps, IconButton } from "@chakra-ui/react";

import { AnnotationLabel } from "react-annotation";

import { CustomLayerProps, Line } from "@nivo/line";
import { useEffect, useReducer } from "react";
import { GroupFilter, TopicData, TopicDataEntry } from "./helpers/types";
import {
  generateTwitterShareLink,
  generateFacebookShareLink,
  getCleanedBaseFilterValues,
  smoothTopicResultData,
} from "./helpers/utils";
import { useRouter } from "next/router";
import queryString from "query-string";
import LoadingSpinner from "@bit/limebit.chakra-ui-recipes.loading-spinner";
import DefaultText from "@bit/limebit.limebit-ui.default-text";
import { generateLinkedInShareLink } from "./helpers/utils";

import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  ageFilterOptions,
  genderFilterOptions,
  stateFilterOptions,
} from "./helpers/filters";
import {
  partyFilterOptions,
  topicFilterOptions,
  jobFilterOptions,
} from "./helpers/filters";
import { useState } from "react";

interface TopicReducerAction {
  action: "pending" | "idle" | "resolved" | "rejected";
  entity: TopicData[];
}

interface TopicLineGraphState {
  status: "idle" | "pending" | "resolved" | "rejected";
  data: TopicData[];
}

const CustomThing = ({
  series,
  xScale,
  yScale,
  innerHeight,
}: CustomLayerProps) => {
  const Annotations = series.map((serie) => {
    return serie.data.map((serieDataEntry) => {
      if (serieDataEntry.data?.annotation) {
        return (
          <AnnotationLabel
            key={`${serieDataEntry.position.x} - ${serieDataEntry.position.y}`}
            x={serieDataEntry.position.x}
            y={serieDataEntry.position.y}
            dx={600}
            dy={-10}
            color={"#9610ff"}
            className="show-bg"
            editMode={true}
            note={{
              title: "Annotations :)",
              label: "Longer text to show text wrapping",
              align: "middle",
              orientation: "topBottom",
              bgPadding: 20,
              padding: 15,
              titleColor: "#59039c",
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
  filterObject: Array<GroupFilter>,
  index: number
): string => {
  const filter = filterObject?.[index];

  if (filter) {
    const abbreviation = partyFilterOptions.find(
      (faction) => faction.key == filter.party
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

    return `${index + 1}: ${topic?.label}, ${
      abbreviation?.label || "Alle Parteien"
    }, ${gender?.label || "Alle Geschlechter"}, ${
      age?.label || "Alle Altersgruppen"
    }, ${electionPlace?.label || "Alle Bundesländer"}, ${
      job?.label || "Alle Berufsgruppen"
    }`;
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
      return {
        ...previousState,
        status: "resolved",
        data: action.entity,
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
  });

  useEffect(() => {
    const filters = queryString.parse(window.location.search);
    if (filters?.filters && typeof filters.filters == "string") {
      //  todo: maybe unknown type
      const filterObject: Array<GroupFilter> = JSON.parse(filters.filters);

      if (filterObject && filterObject?.length) {
        dispatchData({ action: "pending", entity: [] });
        const dataFetchePromises = [];

        for (let i = 0; i <= 5; i++) {
          if (filterObject[i]) {
            const filter = getCleanedBaseFilterValues(filterObject[i]);
            if (filter) {
              // dataFetchePromises.push(mockFetchData(`topic ${i}`));
              dataFetchePromises.push(
                fetch(
                  `https://api.opendiscourse.de:5400/topicmodelling?${queryString.stringify(
                    filter
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
            const getBodyPromises: Promise<{ data: TopicDataEntry[] }>[] = [];
            resultArray.map((result) => getBodyPromises.push(result.json()));
            Promise.all(getBodyPromises).then((dataResultArray) => {
              const topicResult: TopicData[] = [];
              dataResultArray.map((data, index) => {
                const id = getResultLabel(filterObject, index);
                const smoothedData = smoothTopicResultData(data.data);
                topicResult.push({
                  id: id,
                  data: smoothedData,
                });
              });
              dispatchData({ action: "resolved", entity: topicResult });
            });
          })
          .catch((error) => console.log(error));
      }
    }
  }, [router.query]);

  const addedHeight = state.data.length ? state.data.length * 50 : 0;

  const [toggleAnnotations, setToggleAnnotations] = useState(true);
  return (
    <Flex
      {...flexProps}
      position="relative"
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
      >
        <Line
          width={1200}
          height={400 + addedHeight}
          margin={{ top: 20, right: 20, bottom: 50 + addedHeight, left: 80 }}
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
            "points",
            "slices",
            "mesh",
            "legends",
            toggleAnnotations ? CustomThing : "legends",
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
              itemHeight: 40,
              translateY: 25 + addedHeight,
            },
          ]}
          markers={[
            {
              axis: "x",
              value: 1991,
              lineStyle: { stroke: "gray", strokeWidth: 2 },
              legend: "Pariser Klimaabkommen",
            },
          ]}
        />
      </Flex>
      <Button onClick={() => setToggleAnnotations(!toggleAnnotations)}>
        Toggle Annotation
      </Button>
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
