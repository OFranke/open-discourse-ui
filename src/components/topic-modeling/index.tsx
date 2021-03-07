import { useReducer } from "react";
import { DefaultButton } from "@bit/limebit.limebit-ui.default-button";
import { TopicFilters } from "./topic-filters";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { IconButton, Flex, Stack, Box, BoxProps } from "@chakra-ui/react";
import DefaultText from "@bit/limebit.limebit-ui.default-text";
import { Card } from "@bit/limebit.limebit-ui.card";
import queryString from "query-string";
import { useRouter } from "next/router";
import { getCleanedFilterValuesFromUrlParams } from "./helpers/utils";
import { GroupFilter } from "./helpers/types";

interface TopicModellingState {
  filters: Array<GroupFilter>;
}
interface FilterReducerAction {
  action: "ADD" | "REMOVE" | "UPDATE";
  entity: GroupFilter;
}

const availableFilterColors = ["pink", "purple", "orange", "blue", "green"];

const generateFilterId = () => {
  return Math.random().toString(36).substr(2, 5);
};

const filterReducer = (
  previousState: TopicModellingState,
  action: FilterReducerAction
): TopicModellingState => {
  switch (action.action) {
    case "ADD": {
      return {
        ...previousState,
        filters: [
          ...previousState.filters,
          {
            ...action.entity,
            color: availableFilterColors[previousState.filters.length],
          },
        ],
      };
    }
    case "REMOVE": {
      const updatedFilters = previousState.filters
        .filter(
          (currentFilter) => currentFilter.filterId !== action?.entity?.filterId
        )
        .filter(Boolean);
      const updatedFiltersWithColors = updatedFilters.map(
        (currentFilter, index) => {
          return { ...currentFilter, color: availableFilterColors[index] };
        }
      );

      return { ...previousState, filters: updatedFiltersWithColors };
    }
    case "UPDATE": {
      const updatedFilters = previousState.filters.map((currentFilter) => {
        if (currentFilter.filterId == action.entity?.filterId) {
          return action.entity;
        }
        return currentFilter;
      });
      return {
        ...previousState,
        filters: updatedFilters,
      };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.action}`);
    }
  }
};

export const TopicModelling: React.FC<BoxProps> = ({ ...boxProps }) => {
  const router = useRouter();
  const validatedFilters = getCleanedFilterValuesFromUrlParams(router.query);

  const [state, dispatch] = useReducer(filterReducer, {
    filters: validatedFilters.length
      ? validatedFilters
      : [
          {
            filterId: generateFilterId(),
            color: availableFilterColors[0],
            topics: null,
            age: null,
            gender: null,
            job: null,
            party: null,
            state: null,
          },
        ],
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(
      `themensuche/?${queryString.stringify({
        filters: JSON.stringify(state.filters),
      })}`
    );
  };

  return (
    <Box {...boxProps}>
      <form onSubmit={handleSubmit}>
        {state.filters.map((filter) => {
          return (
            <Card marginY={5} key={filter.filterId}>
              <Flex alignItems="center">
                <TopicFilters
                  filterState={filter}
                  updateFilterState={(updatedFilter) =>
                    dispatch({
                      action: "UPDATE",
                      entity: updatedFilter,
                    })
                  }
                />
                <IconButton
                  marginLeft={{ base: 2, lg: 4 }}
                  variant="outline"
                  colorScheme={filter.color}
                  aria-label="Filter entfernen"
                  fontSize="20px"
                  disabled={state.filters.length <= 1 ? true : false}
                  icon={<CloseIcon />}
                  onClick={() =>
                    dispatch({
                      action: "REMOVE",
                      entity: filter,
                    })
                  }
                />
              </Flex>
            </Card>
          );
        })}
        <Stack direction={{ base: "column", md: "row" }}>
          <DefaultButton
            rightIcon={undefined}
            colorScheme={"pink"}
            type="submit"
          >
            Topics suchen
          </DefaultButton>
          <DefaultButton
            colorScheme={availableFilterColors[state.filters.length]}
            variant="outline"
            rightIcon={<AddIcon />}
            disabled={state.filters.length >= 5 ? true : false}
            onClick={() =>
              dispatch({
                action: "ADD",
                entity: {
                  color: "",
                  filterId: generateFilterId(),
                  party: null,
                  age: null,
                  state: null,
                  gender: null,
                  job: null,
                  topics: null,
                },
              })
            }
          >
            Filter hinzufügen
          </DefaultButton>
        </Stack>
      </form>
    </Box>
  );
};
