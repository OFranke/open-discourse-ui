import { useReducer, useState } from "react";
import { DefaultButton } from "@bit/limebit.limebit-ui.default-button";
import { TopicFilters } from "./topic-filters";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { IconButton, Box, Stack, Flex } from "@chakra-ui/react";
import DefaultText from "@bit/limebit.limebit-ui.default-text";
import { Card } from "@bit/limebit.limebit-ui.card";

export interface TopicFilter {
  filterId: string;
  color: string;
  factionIdQuery: string | null;
}

interface Filter {
  filterId: string;
  color: string;
  topic: string | null;
}
export interface PersonFilter extends Filter {
  type: "person";
  topic: string | null;
  politicianIdQuery: string | null;
}

export interface GroupFilter extends Filter {
  type: "group";
  factionIdQuery: string | null;
  wahlbezirk: string | null;
  gender: "male" | "female" | "all";
  age: "<50" | ">=50" | "all";
  jobs: "job1" | "job2" | "job3" | "all";
}

interface TopicModellingState {
  filters: Array<PersonFilter | GroupFilter>;
}

interface FilterReducerAction {
  action: "ADD" | "REMOVE" | "UPDATE";
  type: "group" | "person";
  entity: PersonFilter | GroupFilter | null;
}
const availableFilterColors = ["pink", "orange", "purple", "blue", "green"];

const generateFilterId = () => {
  return Math.random().toString(36).substr(2, 5);
};
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log("\x1b[33m%s\x1b[0m", "%c >> event.target", event.target);
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
              type: "person",
              filterId: generateFilterId(),
              color: availableFilterColors[previousState.filters.length],
              topic: "",
              politicianIdQuery: null,
            },
          ],
        };
      }
      return {
        ...previousState,
        filters: [
          ...previousState.filters,
          {
            type: "group",
            filterId: generateFilterId(),
            color: availableFilterColors[previousState.filters.length],
            topic: "",
            factionIdQuery: null,
            wahlbezirk: "",
            gender: "all",
            age: "<50",
            jobs: "all",
          },
        ],
      };
    }
    case "REMOVE": {
      console.log("\x1b[33m%s\x1b[0m", "%c >> REMOVE");
      console.log("\x1b[33m%s\x1b[0m", "%c >> previousState", previousState);
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
      console.log("\x1b[33m%s\x1b[0m", "%c >> UPDATE");
      const updatedFilters = previousState.filters.map((currentFilter) => {
        if (currentFilter.filterId == action.entity?.filterId) {
          return action.entity;
        }
        return currentFilter;
      });
      console.log("result:", {
        ...previousState,
        filters: updatedFilters,
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

export const TopicModelling: React.FC = () => {
  const [state, dispatch] = useReducer(filterReducer, {
    filters: [
      {
        type: "person",
        filterId: generateFilterId(),
        color: availableFilterColors[0],
        topic: null,
        politicianIdQuery: null,
      },
    ],
  });

  return (
    <form onSubmit={handleSubmit}>
      {state.filters.map((filter) => {
        return (
          <Card marginY={5}>
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
                key={filter.filterId}
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
                colorScheme="teal"
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
      <DefaultButton
        rightIcon={<AddIcon />}
        mt={3}
        colorScheme="pink"
        type="submit"
        marginY="30px"
        disabled={state.filters.length >= 5 ? true : false}
        onClick={() =>
          dispatch({ action: "ADD", type: "person", entity: null })
        }
      >
        Personenfilter hinzufügen
      </DefaultButton>
      <DefaultButton
        rightIcon={<AddIcon />}
        mt={3}
        colorScheme="pink"
        type="submit"
        marginY="30px"
        disabled={state.filters.length >= 5 ? true : false}
        onClick={() => dispatch({ action: "ADD", type: "group", entity: null })}
      >
        Gruppenfilter hinzufügen
      </DefaultButton>

      <DefaultButton
        rightIcon={undefined}
        mt={3}
        colorScheme="pink"
        type="submit"
        marginY="30px"
      >
        Topics suchen
      </DefaultButton>
    </form>
  );
};
