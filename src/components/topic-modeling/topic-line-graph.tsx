import { Flex, FlexProps, IconButton } from "@chakra-ui/react";

import { Line } from "@nivo/line";
import { useEffect, useReducer } from "react";
import { GroupFilter, PersonFilter, TopicData, TopicDataEntry } from "./index";
import {
  generateTwitterShareLink,
  generateFacebookShareLink,
  getCleanedFilterValues,
} from "./utils";
import { useRouter } from "next/router";
import queryString from "query-string";
import LoadingSpinner from "@bit/limebit.chakra-ui-recipes.loading-spinner";
import DefaultText from "@bit/limebit.limebit-ui.default-text";
import { generateLinkedInShareLink } from "./utils";

import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { topicFilterOptions } from "./filters";

interface TopicReducerAction {
  action: "pending" | "idle" | "resolved" | "rejected";
  entity: TopicData[];
}

interface TopicLineGraphState {
  status: "idle" | "pending" | "resolved" | "rejected";
  data: TopicData[];
}

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

  console.log("\x1b[33m%s\x1b[0m", "%c >> router.query", router.query);
  useEffect(() => {
    const filters = queryString.parse(window.location.search);
    if (filters?.filters && typeof filters.filters == "string") {
      //  todo: maybe unknown type
      const filterObject: Array<GroupFilter | PersonFilter> = JSON.parse(
        filters.filters
      );

      console.log("\x1b[33m%s\x1b[0m", "%c >> filterObject", filterObject);
      if (filterObject && filterObject?.length) {
        dispatchData({ action: "pending", entity: [] });
        const dataFetchePromises = [];

        for (let i = 0; i <= 5; i++) {
          if (filterObject[i]) {
            console.log(
              "\x1b[33m%s\x1b[0m",
              "%c >> filterObject[i]",
              filterObject[i]
            );
            const filter = getCleanedFilterValues(filterObject[i]);
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
              console.log(dataResultArray);
              dataResultArray.map((data, index) => {
                const topic = topicFilterOptions.find(
                  (topic) => topic.key == filterObject[index].topic
                );
                topicResult.push({
                  id: topic?.label || "Unbekanntes Thema",
                  data: data.data,
                });
              });
              dispatchData({ action: "resolved", entity: topicResult });
            });
          })
          .catch((error) => console.log(error));
      }
    }
  }, [router.query]);

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
          width={1100}
          height={400}
          margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
          data={state.data || []}
          animate={true}
          enableSlices={"x"}
          curve="monotoneX"
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
          //   markers={[
          //     {
          //       axis: "x",
          //       value: 1991,
          //       lineStyle: { stroke: "#b0413e", strokeWidth: 2 },
          //       legend: "Pariser Klimaabkommen",
          //     },
          //   ]}
        />
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
