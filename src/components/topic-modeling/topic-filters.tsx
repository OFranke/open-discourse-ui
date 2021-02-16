import { useGetData } from "../full-text-search/hooks/use-get-data";
import { Faction, Politician } from "../full-text-search/search-form";
import { ColoredSelectInput } from "./select-input";
import { GroupFilter, PersonFilter, TopicFilter } from ".";
import { Stack, Box, Flex } from "@chakra-ui/react";

const getConvertedFactions = (factions: Faction[] | undefined) => {
  return factions
    ? factions
        .filter(
          (faction) => !["1", "8", "9", "10", "12", "19"].includes(faction.id)
        )
        .map((faction) => ({
          key: faction.id,
          label: faction.id == "-1" ? "Ohne Zuordnung" : faction.fullName,
        }))
    : [];
};

interface TopicFilterProps {
  filterState: GroupFilter | PersonFilter;
  updateFilterState: (newFilter: GroupFilter | PersonFilter) => void;
}
export const TopicFilters: React.FC<TopicFilterProps> = ({
  filterState,
  updateFilterState,
}) => {
  const [factions] = useGetData<Faction[]>(
    "https://api.opendiscourse.de:5300/factions",
    (response) => response.factions
  );

  //   const [filterState, setFilterState] = useState<TopicFilterState>({
  //     factionIdQuery: undefined,
  //   });
  if (filterState.type == "group") {
    const convertedFactions = getConvertedFactions(factions);
    return (
      <>
        <Box width="100%">
          <Stack
            direction={{ base: "column", md: "row" }}
            marginBottom={{ base: 2, lg: 2 }}
          >
            <ColoredSelectInput
              color={filterState.color}
              rawData={[{ key: "umwelt", label: "Umwelt (blabla)" }]}
              onSelect={(element) => {
                updateFilterState({
                  ...filterState,
                  topic: element?.key || null,
                });
              }}
              //   initialValue={
              //     formParams.politicianIdQuery
              //       ? convertedPoliticians.find(
              //           (politician) => politician.key == formParams.politicianIdQuery
              //         )
              //       : undefined
              //   }
              placeholder="Nach Thema Filtern"
            />
            <ColoredSelectInput
              color={filterState.color}
              rawData={convertedFactions}
              onSelect={(element) => {
                updateFilterState({
                  ...filterState,
                  factionIdQuery: element?.key || null,
                });
              }}
              initialValue={
                filterState.factionIdQuery
                  ? convertedFactions.find(
                      (faction) => faction.key == filterState.factionIdQuery
                    )
                  : undefined
              }
              placeholder="Nach Fraktion Filtern"
            />
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} width="100%">
            <ColoredSelectInput
              color={filterState.color}
              rawData={convertedFactions}
              onSelect={(element) => {
                updateFilterState({
                  ...filterState,
                  factionIdQuery: element?.key || null,
                });
              }}
              initialValue={
                filterState.factionIdQuery
                  ? convertedFactions.find(
                      (faction) => faction.key == filterState.factionIdQuery
                    )
                  : undefined
              }
              placeholder="Geschlecht"
            />
            <ColoredSelectInput
              color={filterState.color}
              rawData={convertedFactions}
              onSelect={(element) => {
                updateFilterState({
                  ...filterState,
                  factionIdQuery: element?.key || null,
                });
              }}
              initialValue={
                filterState.factionIdQuery
                  ? convertedFactions.find(
                      (faction) => faction.key == filterState.factionIdQuery
                    )
                  : undefined
              }
              placeholder="Alter"
            />
            <ColoredSelectInput
              color={filterState.color}
              rawData={convertedFactions}
              onSelect={(element) => {
                updateFilterState({
                  ...filterState,
                  factionIdQuery: element?.key || null,
                });
              }}
              initialValue={
                filterState.factionIdQuery
                  ? convertedFactions.find(
                      (faction) => faction.key == filterState.factionIdQuery
                    )
                  : undefined
              }
              placeholder="Wahlbezirk"
            />
            <ColoredSelectInput
              color={filterState.color}
              rawData={convertedFactions}
              onSelect={(element) => {
                updateFilterState({
                  ...filterState,
                  factionIdQuery: element?.key || null,
                });
              }}
              initialValue={
                filterState.factionIdQuery
                  ? convertedFactions.find(
                      (faction) => faction.key == filterState.factionIdQuery
                    )
                  : undefined
              }
              placeholder="Job"
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
        rawData={[{ key: "umwelt", label: "Umwelt (blabla)" }]}
        onSelect={(element) => {
          updateFilter({
            ...filter,
            topic: element?.key || null,
          });
        }}
        //   initialValue={
        //     formParams.politicianIdQuery
        //       ? convertedPoliticians.find(
        //           (politician) => politician.key == formParams.politicianIdQuery
        //         )
        //       : undefined
        //   }
        placeholder="Nach Thema Filtern"
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
