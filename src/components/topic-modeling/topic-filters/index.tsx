import { ColoredSelectInput } from "./colored-select-input";
import { FilterParams } from "../helpers/types";
import { Stack, Box } from "@chakra-ui/react";
import {
  topicFilterOptions,
  partyFilterOptions,
  ageFilterOptions,
  stateFilterOptions,
  jobFilterOptions,
  genderFilterOptions,
  politicianFilterOptions,
} from "../helpers/filters";

interface GroupFilterProps {
  filterState: FilterParams;
  updateFilter: (newFilter: FilterParams) => void;
}

interface TopicFilterProps {
  filterState: FilterParams;
  updateFilterState: (newFilter: FilterParams) => void;
}
export const TopicFilters: React.FC<TopicFilterProps> = ({
  filterState,
  updateFilterState,
}) => {
  return (
    <GroupFilters filterState={filterState} updateFilter={updateFilterState} />
  );
};

const GroupFilters: React.FC<GroupFilterProps> = ({
  filterState,
  updateFilter,
}) => {
  return (
    <Box width="100%">
      <Stack
        direction={{ base: "column", md: "row" }}
        marginBottom={{ base: 2, lg: 2 }}
      >
        <ColoredSelectInput
          color={filterState.color}
          rawData={topicFilterOptions}
          placeholder="Nach Thema Filtern"
          onSelect={(element) => {
            updateFilter({
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
          rawData={[...partyFilterOptions, ...politicianFilterOptions]}
          placeholder="Nach Fraktion Filtern"
          onSelect={(element) => {
            updateFilter({
              ...filterState,
              actor: element?.key || null,
            });
          }}
          initialValue={partyFilterOptions.find(
            (filter) => filter.key == filterState.actor
          )}
        />
      </Stack>
      <Stack direction={{ base: "column", md: "row" }} with="100%">
        <ColoredSelectInput
          color={filterState.color}
          rawData={genderFilterOptions}
          placeholder="Geschlecht"
          onSelect={(element) => {
            updateFilter({
              ...filterState,
              gender: element?.key || null,
            });
          }}
          initialValue={genderFilterOptions.find(
            (filter) => filter.key == filterState.gender
          )}
        />
        <ColoredSelectInput
          color={filterState.color}
          rawData={ageFilterOptions}
          placeholder="Alter"
          onSelect={(element) => {
            updateFilter({
              ...filterState,
              age: element?.key || null,
            });
          }}
          initialValue={ageFilterOptions.find(
            (filter) => filter.key == filterState.age
          )}
        />
        <ColoredSelectInput
          color={filterState.color}
          rawData={stateFilterOptions}
          placeholder="Wahlbezirk"
          onSelect={(element) => {
            updateFilter({
              ...filterState,
              state: element?.key || null,
            });
          }}
          initialValue={stateFilterOptions.find(
            (filter) => filter.key == filterState.state
          )}
        />
        <ColoredSelectInput
          color={filterState.color}
          rawData={jobFilterOptions}
          placeholder="Job"
          onSelect={(element) => {
            updateFilter({
              ...filterState,
              job: element?.key || null,
            });
          }}
          initialValue={jobFilterOptions.find(
            (filter) => filter.key == filterState.job
          )}
        />
      </Stack>
    </Box>
  );
};
