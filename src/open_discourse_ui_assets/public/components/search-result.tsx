import { Stack } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory as useRouter, useLocation } from "react-router-dom";
import { TableComponent } from "../components/table-component"
import { Text } from "@chakra-ui/core";

export interface SearchResultRow {
  date: string;
  firstName: string;
  lastName: string;
  documentUrl: string;
  position: string;
  speechContent: string;
}

export const SearchResult: React.FC = () => {
  const [tableData, setData] = useState<{
    ftSearchSpeeches: SearchResultRow[];
  }>();
  const query = new URLSearchParams(useLocation().search);

  const queryParams = {
    contentQuery: query.get("contentQuery"),
    nameQuery: query.get("nameQuery"),
    positionQuery: query.get("positionQuery"),
    fromDate: query.get("fromDate"),
    toDate: query.get("toDate"),
  };

  const contentQuery = query.get("contentQuery");
  const nameQuery = query.get("nameQuery");
  const positionQuery = query.get("positionQuery");
  const fromDate = query.get("fromDate");
  const toDate = query.get("toDate");

  useEffect(() => {
    const callApiAsync = async () => {
      const result = await fetch("https://od-graphql.herokuapp.com/graphql", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: `{"operationName":"Search","variables":{"first":50,"contentQuery":"${
          contentQuery || ""
        }","positionQuery":"${positionQuery || ""}","nameQuery":"${
          nameQuery || ""
        }"${fromDate ? `,"fromDate":"${fromDate}"` : ""}${
          toDate ? `,"toDate":"${toDate}"` : ""
        }},"query":"query Search($nameQuery: String, $contentQuery: String, $positionQuery: String, $fromDate: Date, $toDate: Date, $first: Int!) {\\n  ftSearchSpeeches(first: $first, nameQuery: $nameQuery, contentQuery: $contentQuery, positionQuery: $positionQuery, fromDate: $fromDate, toDate: $toDate) {\\n    rank\\n    id\\n    firstName\\n    lastName\\n    position\\n    date\\n    documentUrl\\n    speechContent\\n    __typename\\n  }\\n}\\n"}`,
      });
      const searchResult = await result.json();
      setData(searchResult.data);
    };

    callApiAsync();
  }, [contentQuery, nameQuery, positionQuery, fromDate, toDate]);

  if (tableData) {
    console.log(tableData.ftSearchSpeeches);
    return <TableComponent tableData={tableData.ftSearchSpeeches} />;
  }
  return null;
};
