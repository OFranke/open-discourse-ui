import { useEffect, useReducer } from "react";
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
import { ParsedUrlQuery } from "querystring";

interface TopicModellingState {
  filters: Array<FilterParams>;
}
interface FilterReducerAction {
  action: "ADD" | "REMOVE" | "UPDATE" | "PARSE_FROM_URL";
  entity: FilterParams;
  urlQuery?: ParsedUrlQuery;
}

const generateFilterId = () => {
  return Math.random().toString(36).substr(2, 5);
};

const defaultColors = ["#FBB6CE", "#ED64A6", "#97266D", "#90CDF4", "#3182CE"];

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
            color: "transparent",
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
        const selectedDefaultColor = defaultColors.find(
          (color) => !uniqueUsedColors.has(color)
        );
        selectedDefaultColor && uniqueUsedColors.add(selectedDefaultColor);

        return {
          ...currentFilter,
          color: selectedDefaultColor || "transparent",
        };
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
          const selectedDefaultColor = defaultColors.find(
            (color) => !uniqueUsedColors.has(color)
          );
          selectedDefaultColor && uniqueUsedColors.add(selectedDefaultColor);
          return {
            ...action.entity,
            color: selectedDefaultColor || "transparent",
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
        const selectedDefaultColor = defaultColors.find(
          (color) => !uniqueUsedColors.has(color)
        );
        selectedDefaultColor && uniqueUsedColors.add(selectedDefaultColor);
        return {
          ...currentFilter,
          color: selectedDefaultColor || "transparent",
        };
      });
      return {
        ...previousState,
        filters: updatedFilters,
      };
    }
    case "PARSE_FROM_URL": {
      const validatedFilters = getCleanedFilterValuesFromUrlParams(
        action.urlQuery
      );

      return {
        filters: validatedFilters.length ? validatedFilters : [action.entity],
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
            color: "transparent",
            topics: null,
            age: null,
            gender: null,
            job: null,
            actor: null,
            state: null,
          },
        ],
  });
  useEffect(() => {
    dispatch({
      action: "PARSE_FROM_URL",
      entity: {
        filterId: generateFilterId(),
        color: "transparent",
        topics: null,
        age: null,
        gender: null,
        job: null,
        actor: null,
        state: null,
      },
      urlQuery: router.query,
    });
  }, [router.query]);

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
            Analysieren
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
                  color: "transparent",
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
            Linie hinzufügen
          </DefaultButton>
        </Stack>
      </form>
    </Box>
  );
};
