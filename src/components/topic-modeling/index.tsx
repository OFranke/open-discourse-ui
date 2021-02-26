import { useLayoutEffect, useReducer, useEffect } from "react";
import { DefaultButton } from "@bit/limebit.limebit-ui.default-button";
import { TopicFilters } from "./topic-filters";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { IconButton, Flex, Stack, Box, BoxProps } from "@chakra-ui/react";
import DefaultText from "@bit/limebit.limebit-ui.default-text";
import { Card } from "@bit/limebit.limebit-ui.card";
import queryString from "query-string";
import { useRouter } from "next/router";
import { topicFilterOptions } from "./filters";
import { Serie } from "@nivo/line";
import { getCleanedFilterValuesFromUrlParams } from "./utils";

export interface TopicFilter {
  filterId: string;
  color: string;
  factionIdQuery: string | null;
}

interface Filter {
  filterId: string;
  color: string;
}
export interface BasePersonFilter {
  topic: string | null;
  politicianIdQuery: string | null;
}
export interface PersonFilter extends Filter, BasePersonFilter {
  type: "person";
  politicianIdQuery: string | null;
}

export interface BaseGroupFilter {
  topic: string | null;
  abbreviation: string | null;
  gender: string | null;
  ageCat: string | null;
  electionPlace: string | null;
  job: string | null;
}
export interface GroupFilter extends Filter, BaseGroupFilter {
  type: "group";
}

interface TopicModellingState {
  filters: Array<PersonFilter | GroupFilter>;
}

interface FilterReducerAction {
  action: "ADD" | "REMOVE" | "UPDATE";
  type: "group" | "person";
  entity: PersonFilter | GroupFilter;
}
export interface TopicData extends Serie {
  data: TopicDataEntry[];
}
export interface TopicDataEntry {
  x: number;
  y: number;
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
      if (action.type == "person") {
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
      if (action.type == "group") {
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
      throw new Error(`Unsupported action type: ${action.action}`);
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
  const [state, dispatch] = useReducer(filterReducer, {
    filters: [
      // {
      //   type: "person",
      //   filterId: generateFilterId(),
      //   color: availableFilterColors[0],
      //   topic: null,
      //   politicianIdQuery: null,
      // },
    ],
  });
  const router = useRouter();

  useEffect(() => {
    console.log("\x1b[33m%s\x1b[0m", "%c >> router.query", router.query);
    const validatedFilters = getCleanedFilterValuesFromUrlParams(router.query);
    console.log(
      "\x1b[33m%s\x1b[0m",
      "%c >> validatedFilters",
      validatedFilters
    );
    if (validatedFilters && validatedFilters.length) {
      validatedFilters.forEach((filter) => {
        dispatch({ action: "ADD", type: filter.type, entity: filter });
      });
    } else {
      dispatch({
        action: "ADD",
        type: "person",
        entity: {
          type: "person",
          filterId: generateFilterId(),
          color: availableFilterColors[0],
          topic: null,
          politicianIdQuery: null,
        },
      });
    }
    // if (router.query?.filters && typeof router.query.filters == "string") {
    //   const filters = JSON.parse(router.query.filters);
    //   console.log("\x1b[33m%s\x1b[0m", "%c >> filters", filters);
    //   if (filters && filters.length > 0) {
    //     filters.forEach((filter: GroupFilter | PersonFilter) => {
    //       dispatch({ action: "ADD", type: filter.type, entity: filter });
    //     });
    //   }
    // }
  }, []);

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
              {filter.type === "person" ? (
                <DefaultText
                  fontSize={{
                    base: "sm",
                    sm: "xl",
                    md: "xl",
                    lg: "xl",
                    xl: "xl",
                  }}
                  marginBottom={0}
                >
                  Personenfilter
                </DefaultText>
              ) : (
                <DefaultText
                  marginBottom={0}
                  fontSize={{
                    base: "sm",
                    sm: "xl",
                    md: "xl",
                    lg: "xl",
                    xl: "xl",
                  }}
                >
                  Gruppenfilter
                </DefaultText>
              )}
              <Flex alignItems="center">
                <TopicFilters
                  filterState={filter}
                  updateFilterState={(updatedFilter) =>
                    dispatch({
                      action: "UPDATE",
                      entity: updatedFilter,
                      type: updatedFilter.type,
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
                      type: filter.type,
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
                type: "person",
                entity: {
                  type: "person",
                  color: "",
                  filterId: generateFilterId(),
                  politicianIdQuery: null,
                  topic: null,
                },
              })
            }
            style={{ marginLeft: "auto" }}
          >
            Personenfilter hinzufügen
          </DefaultButton>
          <DefaultButton
            colorScheme={availableFilterColors[state.filters.length]}
            variant="outline"
            rightIcon={<AddIcon />}
            disabled={state.filters.length >= 5 ? true : false}
            onClick={() =>
              dispatch({
                action: "ADD",
                type: "group",
                entity: {
                  type: "group",
                  color: "",
                  filterId: generateFilterId(),
                  abbreviation: null,
                  ageCat: null,
                  electionPlace: null,
                  gender: null,
                  job: null,
                  topic: null,
                },
              })
            }
          >
            Gruppenfilter hinzufügen
          </DefaultButton>
        </Stack>
      </form>
    </Box>
  );
};
