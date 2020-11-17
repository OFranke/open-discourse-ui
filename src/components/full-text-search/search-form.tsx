import queryString from "query-string";
import {
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/router";
import { useGetData } from "./hooks/use-get-data";
import { SelectInput } from "@bit/limebit.chakra-ui-recipes.select-input";

export interface FormParams {
  contentQuery?: string | null;
  factionIdQuery?: string | null;
  politicianIdQuery?: string | null;
  positionShortQuery?: string | null;
  fromDate?: string | null;
  toDate?: string | null;
}

export interface Faction {
  id: string;
  fullName: string;
  abbreviation: string;
}

export interface Politician {
  id: string;
  firstName: string;
  lastName: string;
}

export const SearchForm: React.FC<FormParams> = () => {
  const [formParams, setFormParams] = useState<FormParams>({});
  const [politicians] = useGetData<Politician[]>(
    `${process.env.PROXY_ENDPOINT || "http://67.207.79.172:5300"}/politicians`,
    (response) => response.politicians
  );
  const [factions] = useGetData<Faction[]>(
    `${process.env.PROXY_ENDPOINT || "http://67.207.79.172:5300"}/factions`,
    (response) => response.factions
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // do not refresh entire page
    event.preventDefault();
    // remove empty values from search string
    const searchValues: { [key: string]: any } = { ...formParams };
    Object.keys(searchValues).forEach(
      (key) =>
        searchValues[key] === (undefined || "") && delete searchValues[key]
    );
    router.push(
      `tools-und-daten/?${queryString.stringify(
        JSON.parse(JSON.stringify(searchValues))
      )}`
    );
  };

  const router = useRouter();
  useEffect(() => {
    const {
      contentQuery,
      factionIdQuery,
      politicianIdQuery,
      positionShortQuery,
      fromDate,
      toDate,
    } = router.query;
    setFormParams({
      contentQuery: contentQuery as string,
      factionIdQuery: factionIdQuery as string,
      politicianIdQuery: politicianIdQuery as string,
      positionShortQuery: positionShortQuery as string,
      fromDate: fromDate as string,
      toDate: toDate as string,
    });
  }, [router.query]);

  const convertedPoliticians = politicians
    ? politicians.map((politician) => ({
        key: politician.id,
        label: `${politician.firstName} ${politician.lastName}`,
      }))
    : [];

  const convertedFactions = factions
    ? factions.map((faction) => ({
        key: faction.id,
        label: faction.fullName,
      }))
    : [];

  const positions = [
    { key: "Member of Parliament", label: "Mitglied des Bundestages" },
    { key: "Presidium of Parliament", label: "Mitglied des Präsidiums" },
    { key: "Guest", label: "Gast" },
    { key: "Chancellor", label: "Kanzler_in" },
    { key: "Minister", label: "Minister_in" },
    { key: "Secretary of State", label: "Staatssekretär_in" },
    { key: "Not found", label: "Nicht gefunden" },
  ];

  if (politicians && factions) {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <Stack spacing={{ base: 2, md: 3 }}>
            <Input
              value={formParams?.contentQuery || ""}
              placeholder="Redeinhalt Durchsuchen"
              focusBorderColor="pink.500"
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                setFormParams({
                  ...formParams,
                  contentQuery: event.target.value,
                })
              }
            />
            <Stack direction={{ base: "column", md: "row" }}>
              <SelectInput
                width="100%"
                placeholder="Nach Politiker Filtern"
                rawData={convertedPoliticians}
                onSelect={(element) => {
                  setFormParams({
                    ...formParams,
                    politicianIdQuery: element?.key,
                  });
                }}
                InputProps={{
                  focusBorderColor: "pink.500",
                }}
                BoxProps={{
                  backgroundColor: "white",
                  borderWidth: "1px",
                  borderColor: "gray.200",
                }}
                ButtonProps={{
                  textColor: "black",
                  rounded: "0px",
                  _hover: { backgroundColor: "gray.200" },
                }}
                iconColor="pink.500"
                iconHoverColor="pink.100"
                initialValue={
                  formParams.politicianIdQuery
                    ? convertedPoliticians.find(
                        (politician) =>
                          politician.key == formParams.politicianIdQuery
                      )
                    : undefined
                }
              />
              <SelectInput
                width="100%"
                placeholder="Nach Fraktion Filtern"
                rawData={convertedFactions}
                onSelect={(element) => {
                  setFormParams({
                    ...formParams,
                    factionIdQuery: element?.key,
                  });
                }}
                InputProps={{
                  focusBorderColor: "pink.500",
                }}
                BoxProps={{
                  backgroundColor: "white",
                  borderWidth: "1px",
                  borderColor: "gray.200",
                }}
                ButtonProps={{
                  textColor: "black",
                  rounded: "0px",
                  _hover: { backgroundColor: "gray.200" },
                }}
                iconColor="pink.500"
                iconHoverColor="pink.100"
                initialValue={
                  formParams.factionIdQuery
                    ? convertedFactions.find(
                        (faction) => faction.key == formParams.factionIdQuery
                      )
                    : undefined
                }
              />
              <SelectInput
                width="100%"
                placeholder="Nach Position Filtern"
                rawData={positions}
                onSelect={(element) => {
                  setFormParams({
                    ...formParams,
                    positionShortQuery: element?.key,
                  });
                }}
                InputProps={{
                  focusBorderColor: "pink.500",
                }}
                BoxProps={{
                  backgroundColor: "white",
                  borderWidth: "1px",
                  borderColor: "gray.200",
                }}
                ButtonProps={{
                  textColor: "black",
                  rounded: "0px",
                  _hover: { backgroundColor: "gray.200" },
                }}
                iconColor="pink.500"
                iconHoverColor="pink.100"
                initialValue={
                  formParams.positionShortQuery
                    ? positions.find(
                        (position) =>
                          position.key == formParams.positionShortQuery
                      )
                    : undefined
                }
              />
            </Stack>
            <Stack direction={{ base: "column", md: "row" }}>
              <InputGroup>
                <InputLeftAddon children={"Von:"} />
                <Input
                  value={formParams?.fromDate || ""}
                  placeholder="YYYY-MM-DD"
                  type="date"
                  focusBorderColor="pink.500"
                  onChange={(
                    event: React.ChangeEvent<HTMLInputElement>
                  ): void =>
                    setFormParams({
                      ...formParams,
                      fromDate: event.target.value,
                    })
                  }
                />
                <InputRightElement
                  children={<CalendarIcon color="pink.500" />}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon children={"Bis:"} />
                <Input
                  value={formParams?.toDate || ""}
                  placeholder="YYYY-MM-DD"
                  type="date"
                  focusBorderColor="pink.500"
                  onChange={(
                    event: React.ChangeEvent<HTMLInputElement>
                  ): void =>
                    setFormParams({
                      ...formParams,
                      toDate: event.target.value,
                    })
                  }
                />
                <InputRightElement
                  children={<CalendarIcon color="pink.500" />}
                />
              </InputGroup>
            </Stack>
          </Stack>
          <Button mt={3} colorScheme="pink" type="submit" marginY="30px">
            Suchen
          </Button>
        </form>
      </>
    );
  }
  return null;
};
