import { useGetData } from "../full-text-search/hooks/use-get-data";
import { Politician } from "../full-text-search/search-form";
import { ColoredSelectInput } from "./select-input";
import { GroupFilter, PersonFilter } from ".";
import { Stack, Box } from "@chakra-ui/react";
import {
  topicFilterOptions,
  factionFilterOptions,
  ageFilterOptions,
  genderFilterOptions,
  electionPlaceFilterOptions,
  jobFilterOptions,
} from "./filters";

interface TopicFilterProps {
  filterState: GroupFilter | PersonFilter;
  updateFilterState: (newFilter: GroupFilter | PersonFilter) => void;
}
export const TopicFilters: React.FC<TopicFilterProps> = ({
  filterState,
  updateFilterState,
}) => {
  if (filterState.type == "group") {
    return (
      <>
        <Box width="100%">
          <Stack
            direction={{ base: "column", md: "row" }}
            marginBottom={{ base: 2, lg: 2 }}
          >
            <ColoredSelectInput
              color={filterState.color}
              rawData={topicFilterOptions}
              onSelect={(element) => {
                updateFilterState({
                  ...filterState,
                  topic: element?.key || null,
                });
              }}
              initialValue={topicFilterOptions[0]}
              placeholder="Nach Thema Filtern"
            />
            <ColoredSelectInput
              color={filterState.color}
              rawData={factionFilterOptions}
              onSelect={(element) => {
                updateFilterState({
                  ...filterState,
                  abbreviation: element?.key || null,
                });
              }}
              placeholder="Nach Fraktion Filtern"
            />
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} width="100%">
            <ColoredSelectInput
              color={filterState.color}
              rawData={genderFilterOptions}
              placeholder="Geschlecht"
              onSelect={(element) => {
                updateFilterState({
                  ...filterState,
                  gender: element?.key || null,
                });
              }}
            />
            <ColoredSelectInput
              color={filterState.color}
              rawData={ageFilterOptions}
              placeholder="Alter"
              onSelect={(element) => {
                updateFilterState({
                  ...filterState,
                  ageCat: element?.key || null,
                });
              }}
            />
            <ColoredSelectInput
              color={filterState.color}
              rawData={electionPlaceFilterOptions}
              placeholder="Wahlbezirk"
              onSelect={(element) => {
                updateFilterState({
                  ...filterState,
                  electionPlace: element?.key || null,
                });
              }}
            />
            <ColoredSelectInput
              color={filterState.color}
              rawData={jobFilterOptions}
              placeholder="Job"
              onSelect={(element) => {
                updateFilterState({
                  ...filterState,
                  job: element?.key || null,
                });
              }}
            />
          </Stack>
        </Box>
      </>
    );
  } else {
    return (
      <PersonFilters filter={filterState} updateFilter={updateFilterState} />
    );
  }
};

interface PersonFilterProps {
  filter: PersonFilter;
  updateFilter: (newFilter: PersonFilter) => void;
}
const PersonFilters: React.FC<PersonFilterProps> = ({
  filter,
  updateFilter,
}) => {
  console.log("\x1b[33m%s\x1b[0m", "%c >> filter", filter);
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
        color={filter.color}
        rawData={topicFilterOptions}
        onSelect={(element) => {
          updateFilter({
            ...filter,
            topic: element?.key || null,
          });
        }}
        placeholder="Nach Thema Filtern"
        initialValue={topicFilterOptions[0]}
      />
      <ColoredSelectInput
        color={filter.color}
        rawData={convertedPoliticians}
        onSelect={(element) => {
          updateFilter({
            ...filter,
            politicianIdQuery: element?.key || null,
          });
        }}
        initialValue={
          filter.politicianIdQuery
            ? convertedPoliticians.find(
                (politician) => politician.key == filter.politicianIdQuery
              )
            : undefined
        }
        placeholder="Nach Politiker_Innen Filtern"
      />
    </Stack>
  );
};
