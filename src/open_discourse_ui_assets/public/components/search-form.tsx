import queryString from "query-string";
import { Stack, Input, Select, Button } from "@chakra-ui/core";
import React, { useState, useEffect, FormEvent } from "react";
import { useHistory as useRouter, useLocation } from "react-router-dom";

export interface FormParams {
  contentQuery?: string | null;
  nameQuery?: string | null;
  positionQuery?: string | null;
  fromDate?: string | null;
  toDate?: string | null;
}

export const SearchForm: React.FC<FormParams> = () => {
  const [formParams, setFormParams] = useState<FormParams>({});

  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // do not refresh entire page
    event.preventDefault();
    // remove empty values from search string
    const searchValues: { [key: string]: any } = { ...formParams };
    Object.keys(searchValues).forEach(
      (key) =>
        searchValues[key] === (undefined || "") && delete searchValues[key]
    );
    router.push(`/?${queryString.stringify(
      JSON.parse(JSON.stringify(searchValues))
    )}`);
  };

  const query = new URLSearchParams(useLocation().search);

  const contentQuery = query.get("contentQuery");
  const nameQuery = query.get("nameQuery");
  const positionQuery = query.get("positionQuery");
  const fromDate = query.get("fromDate");
  const toDate = query.get("toDate");
  const suche = query.get("suche");

  useEffect(() => {
    setFormParams({
      contentQuery: contentQuery as string,
      nameQuery: nameQuery as string,
      positionQuery: positionQuery as string,
      fromDate: fromDate as string,
      toDate: toDate as string,
    });
  }, [contentQuery, nameQuery, positionQuery, fromDate, toDate, suche]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack spacing={3} isInline>
            <Input
              value={formParams?.nameQuery || ""}
              placeholder="Name des Politikers"
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
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
          Suchen (You may have to refresh the page)
        </Button>
      </form>
    </>
  );
};
