import { Flex, FlexProps } from "@chakra-ui/react";

import { Line } from "@nivo/line";
import { useEffect, useReducer } from "react";
import { TopicData } from "./index";
import { mockFetchData } from "./utils";
import { useRouter } from "next/router";
import queryString from "query-string";
import LoadingSpinner from "@bit/limebit.chakra-ui-recipes.loading-spinner";
import DefaultText from "@bit/limebit.limebit-ui.default-text";

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
  const [state, dispatchData] = useReducer(dataReducer, {
    status: "idle",
    data: [],
  });

  const router = useRouter();

  useEffect(() => {
    const filters = queryString.parse(window.location.search);
    if (filters?.filters && typeof filters.filters == "string") {
      const filterObject = JSON.parse(filters.filters);
      console.log("\x1b[33m%s\x1b[0m", "%c >> filterObject", filterObject);
      dispatchData({ action: "pending", entity: [] });
      Promise.all([mockFetchData("umwelt"), mockFetchData("Öl")]).then(
        (result) => {
          console.log("fetched data for umwelt", result);
          dispatchData({ action: "resolved", entity: result });
        }
      );
    }
  }, [router.query]);
  return (
    <Flex
      {...flexProps}
      position="relative"
      alignItems="center"
      justifyContent="center"
    >
      {state.status == "pending" && (
        <LoadingSpinner position="absolute" zIndex={1} />
      )}
      {state.status == "idle" && !state.data.length && (
        <DefaultText position="absolute" zIndex={1}>
          Wählen Sie Filter aus und starten Sie die Topic Suche
        </DefaultText>
      )}
      <Flex filter={state.status == "pending" ? "blur(4px)" : undefined}>
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
    </Flex>
  );
};
