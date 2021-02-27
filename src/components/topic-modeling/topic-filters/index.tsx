import { useGetData } from "../../full-text-search/hooks/use-get-data";
import { Politician } from "../../full-text-search/search-form";
import { ColoredSelectInput } from "./colored-select-input";
import { GroupFilter, PersonFilter } from "../helpers/types";
import { Stack, Box } from "@chakra-ui/react";
import {
  topicFilterOptions,
  factionFilterOptions,
  ageFilterOptions,
  electionPlaceFilterOptions,
  jobFilterOptions,
  genderFilterOptions,
} from "../helpers/filters";

interface GroupFilterProps {
  filterState: GroupFilter;
  updateFilter: (newFilter: GroupFilter) => void;
}

interface PersonFilterProps {
  filterState: PersonFilter;
  updateFilter: (newFilter: PersonFilter) => void;
}
interface TopicFilterProps {
  filterState: GroupFilter | PersonFilter;
  updateFilterState: (newFilter: GroupFilter | PersonFilter) => void;
}
export const TopicFilters: React.FC<TopicFilterProps> = ({
  filterState,
  updateFilterState,
}) => {
  if (filterState.type == "group") {
    <GroupFilters filterState={filterState} updateFilter={updateFilterState} />;
  } else if (filterState.type == "person") {
    return (
      <PersonFilters
        filterState={filterState}
        updateFilter={updateFilterState}
      />
    );
  }
  throw new Error("Unknown filter type: " + filterState.type);
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
              topic: element?.key || null,
            });
          }}
          initialValue={topicFilterOptions.find(
            (filter) => filter.key == filterState.topic
          )}
        />
        <ColoredSelectInput
          color={filterState.color}
          rawData={factionFilterOptions}
          placeholder="Nach Fraktion Filtern"
          onSelect={(element) => {
            updateFilter({
              ...filterState,
              abbreviation: element?.key || null,
            });
          }}
          initialValue={factionFilterOptions.find(
            (filter) => filter.key == filterState.abbreviation
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
              ageCat: element?.key || null,
            });
          }}
          initialValue={ageFilterOptions.find(
            (filter) => filter.key == filterState.ageCat
          )}
        />
        <ColoredSelectInput
          color={filterState.color}
          rawData={electionPlaceFilterOptions}
          placeholder="Wahlbezirk"
          onSelect={(element) => {
            updateFilter({
              ...filterState,
              electionPlace: element?.key || null,
            });
          }}
          initialValue={electionPlaceFilterOptions.find(
            (filter) => filter.key == filterState.electionPlace
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

const PersonFilters: React.FC<PersonFilterProps> = ({
  filterState,
  updateFilter,
}) => {
  const [politicians] = useGetData<Politician[]>(
    "https://api.opendiscourse.de:5300/politicians",
    (response) => response.politicians
  );
  const convertedPoliticians = politicians
    ? politicians.map((politician) => ({
        key: politician.id,
        label: `${politician.firstName} ${politician.lastName}`,
      }))
    : [];

  return (
    <Stack direction={{ base: "column", md: "row" }} width="100%">
      <ColoredSelectInput
        color={filterState.color}
        rawData={topicFilterOptions}
        onSelect={(element) => {
          updateFilter({
            ...filterState,
            topic: element?.key || null,
          });
        }}
        placeholder="Nach Thema Filtern"
        initialValue={topicFilterOptions.find(
          (filter) => filter.key == filterState.topic
        )}
      />
      <ColoredSelectInput
        color={filterState.color}
        rawData={convertedPoliticians}
        onSelect={(element) => {
          updateFilter({
            ...filterState,
            politicianIdQuery: element?.key || null,
          });
        }}
        initialValue={
          filterState.politicianIdQuery
            ? convertedPoliticians.find(
                (politician) => politician.key == filterState.politicianIdQuery
              )
            : undefined
        }
        placeholder="Nach Politiker_Innen Filtern"
      />
    </Stack>
  );
};
