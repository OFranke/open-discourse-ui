import { ColoredSelectInput } from "./colored-select-input";
import { FilterParams } from "../helpers/types";
import { Stack, Box, Link, IconButton, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { Card } from "@bit/limebit.limebit-ui.card";
import {
  topicFilterOptions,
  ageFilterOptions,
  stateFilterOptions,
  jobFilterOptions,
  genderFilterOptions,
  politicianFilterOptions,
  actorFilterOptions,
} from "../helpers/filters";

interface TopicFilterProps {
  filterState: FilterParams;
  updateFilterState: (newFilter: FilterParams) => void;
  removeFilter?: () => void;
}

export const TopicFilters: React.FC<TopicFilterProps> = ({
  filterState,
  updateFilterState,
  removeFilter,
}) => {
  const isPoliticianSelected = Boolean(
    politicianFilterOptions.find(
      (politicianFilter) => politicianFilter.key == filterState.actor
    )
  );
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  console.log(
    "\x1b[33m%s\x1b[0m",
    "%c >>filterState.color ",
    filterState.color
  );
  return (
    <Card marginY={5} borderLeft={`8px solid ${filterState.color}`}>
      <Flex width="100%" justifyContent="space-around">
        <Box width="80%">
          <Stack
            direction={{ base: "column", md: "row" }}
            marginBottom={{ base: 2, lg: 2 }}
          >
            <ColoredSelectInput
              color={filterState.color}
              rawData={topicFilterOptions}
              placeholder="Nach Thema Filtern"
              onSelect={(element) => {
                updateFilterState({
                  ...filterState,
                  topics: element?.key || null,
                });
              }}
              initialValue={topicFilterOptions.find(
                (filter) => filter.key == filterState.topics
              )}
            />
            <ColoredSelectInput
              color={filterState.color}
              rawData={actorFilterOptions}
              placeholder="Nach Akteur Filtern"
              onSelect={(element) => {
                updateFilterState({
                  ...filterState,
                  actor: element?.key || null,
                });
              }}
              initialValue={actorFilterOptions.find(
                (filter) => filter.key == filterState.actor
              )}
            />
          </Stack>
          {showMoreFilters && (
            <Stack direction={{ base: "column", md: "row" }} with="100%">
              <ColoredSelectInput
                disabled={isPoliticianSelected}
                color={filterState.color}
                rawData={genderFilterOptions}
                placeholder="Geschlecht"
                onSelect={(element) => {
                  updateFilterState({
                    ...filterState,
                    gender: element?.key || null,
                  });
                }}
                initialValue={genderFilterOptions.find(
                  (filter) => filter.key == filterState.gender
                )}
              />
              <ColoredSelectInput
                disabled={isPoliticianSelected}
                color={filterState.color}
                rawData={ageFilterOptions}
                placeholder="Alter"
                onSelect={(element) => {
                  updateFilterState({
                    ...filterState,
                    age: element?.key || null,
                  });
                }}
                initialValue={ageFilterOptions.find(
                  (filter) => filter.key == filterState.age
                )}
              />
              <ColoredSelectInput
                disabled={isPoliticianSelected}
                color={filterState.color}
                rawData={stateFilterOptions}
                placeholder="Wahlbundesland"
                onSelect={(element) => {
                  updateFilterState({
                    ...filterState,
                    state: element?.key || null,
                  });
                }}
                initialValue={stateFilterOptions.find(
                  (filter) => filter.key == filterState.state
                )}
              />
              <ColoredSelectInput
                disabled={isPoliticianSelected}
                color={filterState.color}
                rawData={jobFilterOptions}
                placeholder="Berufsgruppe"
                onSelect={(element) => {
                  updateFilterState({
                    ...filterState,
                    job: element?.key || null,
                  });
                }}
                initialValue={jobFilterOptions.find(
                  (filter) => filter.key == filterState.job
                )}
              />
            </Stack>
          )}
        </Box>
        <Flex
          width="20%"
          marginLeft={1}
          flexDirection={{ base: "column-reverse", md: "row" }}
          alignItems={{ md: "center" }}
          textAlign="center"
          justifyContent="center"
        >
          <Box>
            <Link
              as="span"
              href="#"
              onClick={(_e) => setShowMoreFilters((prevState) => !prevState)}
            >
              {showMoreFilters ? "Weniger optionen" : "Mehr optionen"}
            </Link>
          </Box>
          <Box>
            <IconButton
              marginLeft={{ base: 2, lg: 4 }}
              variant="outline"
              colorScheme={"pink"}
              aria-label="Filter entfernen"
              fontSize="20px"
              disabled={!Boolean(removeFilter)}
              icon={<CloseIcon />}
              onClick={removeFilter}
            />
          </Box>
        </Flex>
      </Flex>
    </Card>
  );
};
