import queryString from "query-string";
import { Stack, Input, Select, Button } from "@chakra-ui/core";
import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/router";

export interface FormParams {
  contentQuery?: string | null;
  nameQuery?: string | null;
  positionQuery?: string | null;
  fromDate?: string | null;
  toDate?: string | null;
}

export const SearchForm: React.FC<FormParams> = () => {
  const [formParams, setFormParams] = useState<FormParams>({});

  console.log("\x1b[33m%s\x1b[0m", ">> formParams", formParams);

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
      `/suche?${queryString.stringify(
        JSON.parse(JSON.stringify(searchValues))
      )}`
    );
  };

  const router = useRouter();
  useEffect(() => {
    const {
      contentQuery,
      nameQuery,
      positionQuery,
      fromDate,
      toDate,
    } = router.query;
    setFormParams({
      contentQuery: contentQuery as string,
      nameQuery: nameQuery as string,
      positionQuery: positionQuery as string,
      fromDate: fromDate as string,
      toDate: toDate as string,
    });
  }, [router.query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack spacing={3} isInline>
            <Input
              value={formParams?.nameQuery || ""}
              placeholder="Name des Politikers"
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                console.log(
                  "\x1b[33m%s\x1b[0m",
                  ">> event.target.value",
                  event.target.value
                );
                setFormParams({
                  ...formParams,
                  nameQuery: event.target.value,
                });
              }}
            />
            <Select
              placeholder="Position suchen"
              value={formParams?.positionQuery || ""}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
                setFormParams({
                  ...formParams,
                  positionQuery: event.target.value,
                })
              }
            >
              {[
                "Fraktionslos",
                "Bündnis 90/Die Grünen",
                "CDU/CSU",
                "DIE LINKE.",
                "FDP",
                "PDS",
                "SPD",
                "Bundeskanzler_in",
                "Bundesminister_in",
              ].map((position: string) => {
                return (
                  <option key={position} value={position}>
                    {position}
                  </option>
                );
              })}
            </Select>
          </Stack>
          <Input
            value={formParams?.contentQuery || ""}
            placeholder="Redebeitrag"
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setFormParams({
                ...formParams,
                contentQuery: event.target.value,
              })
            }
          />
          <Stack isInline>
            <Input
              value={formParams?.fromDate || ""}
              placeholder="Von"
              type="date"
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                setFormParams({
                  ...formParams,
                  fromDate: event.target.value,
                })
              }
            />
            <Input
              value={formParams?.toDate || ""}
              placeholder="Bis"
              type="date"
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                setFormParams({
                  ...formParams,
                  toDate: event.target.value,
                })
              }
            />
          </Stack>
        </Stack>
        <Button mt={3} variantColor="teal" type="submit">
          Suchen
        </Button>
      </form>
    </>
  );
};
