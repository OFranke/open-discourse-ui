import { useReducer } from "react";
import { DefaultButton } from "@bit/limebit.limebit-ui.default-button";
import { TopicFilters } from "./topic-filters";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { IconButton, Flex, Stack, Box, BoxProps } from "@chakra-ui/react";
import { Card } from "@bit/limebit.limebit-ui.card";
import queryString from "query-string";
import { useRouter } from "next/router";
import { getCleanedFilterValuesFromUrlParams } from "./helpers/utils";
import { FilterParams } from "./helpers/types";
import { actorFilterOptions, politicianFilterOptions } from "./helpers/filters";

interface TopicModellingState {
  filters: Array<FilterParams>;
}
interface FilterReducerAction {
  action: "ADD" | "REMOVE" | "UPDATE";
  entity: FilterParams;
}

const usedColors: Set<string> = new Set();
const defaultFilterColor = "black";

const generateFilterId = () => {
  return Math.random().toString(36).substr(2, 5);
};

const calculateNextColor = ({
  currentColor,
  actorId,
}: {
  currentColor: string;
  actorId: string;
}) => {
  // let nextColor =
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
            color: defaultFilterColor,
          },
        ],
      };
    }
    case "REMOVE": {
      const remainingFilters = previousState.filters
        .filter(
          (currentFilter) => currentFilter.filterId !== action?.entity?.filterId
        )
        .filter(Boolean);

      const uniqueUsedColors: Set<string> = new Set();
      const updatedFilters = remainingFilters.map((currentFilter) => {
        if (currentFilter.actor) {
          const actor = actorFilterOptions.find(
            (actor) => actor.key == currentFilter.actor
          );
          const color = actor?.partyColors.find(
            (color) => !uniqueUsedColors.has(color)
          );
          if (color) {
            uniqueUsedColors.add(color);
            return { ...currentFilter, color };
          }
        }
        return currentFilter;
      });

      return {
        ...previousState,
        filters: updatedFilters,
      };
    }
    case "UPDATE": {
      const uniqueUsedColors: Set<string> = new Set();
      const updatedFilters = previousState.filters.map((currentFilter) => {
        if (currentFilter.filterId == action.entity?.filterId) {
          const currentFilterIsPolitician = politicianFilterOptions.find(
            (actor) => actor.key == action.entity.actor
          );

          if (action.entity?.actor) {
            const actor = actorFilterOptions.find(
              (actor) => actor.key == action.entity.actor
            );
            const color = actor?.partyColors.find(
              (color) => !uniqueUsedColors.has(color)
            );

            if (color) {
              uniqueUsedColors.add(color);
              return {
                ...action.entity,
                color,
                ...(currentFilterIsPolitician && {
                  gender: null,
                  age: null,
                  state: null,
                  job: null,
                }),
              };
            }
          }
          return {
            ...action.entity,
            ...(currentFilterIsPolitician && {
              gender: null,
              age: null,
              state: null,
              job: null,
            }),
          };
        } else {
          if (currentFilter.actor) {
            const actor = actorFilterOptions.find(
              (actor) => actor.key == currentFilter.actor
            );
            const color = actor?.partyColors.find(
              (color) => !uniqueUsedColors.has(color)
            );
            if (color) {
              uniqueUsedColors.add(color);
              return { ...currentFilter, color };
            }
          }
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
            color: defaultFilterColor,
            topics: null,
            age: null,
            gender: null,
            job: null,
            actor: null,
            state: null,
          },
        ],
  });

  if (validatedFilters.length > 0) {
    validatedFilters.map((filter) => usedColors.add(filter.color));
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(
      `themensuche/?${queryString.stringify({
        filters: JSON.stringify(state.filters),
      })}`
    );
  };
  console.log("\x1b[33m%s\x1b[0m", "%c >> state", state);

  return (
    <Box {...boxProps}>
      <form onSubmit={handleSubmit}>
        {state.filters.map((filter) => {
          const removeFilterHandler = () =>
            dispatch({
              action: "REMOVE",
              entity: filter,
            });
          return (
            <TopicFilters
              key={filter.filterId}
              removeFilter={
                state.filters.length > 1 ? removeFilterHandler : undefined
              }
              filterState={filter}
              updateFilterState={(updatedFilter) =>
                dispatch({
                  action: "UPDATE",
                  entity: updatedFilter,
                })
              }
            />
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
            colorScheme={"pink"}
            variant="outline"
            rightIcon={<AddIcon />}
            disabled={state.filters.length >= 5 ? true : false}
            onClick={() =>
              dispatch({
                action: "ADD",
                entity: {
                  color: defaultFilterColor,
                  filterId: generateFilterId(),
                  actor: null,
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
