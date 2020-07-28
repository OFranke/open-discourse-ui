import { Flex } from "@chakra-ui/core";
import { FormParams } from "./search-form";
import { useEffect, useState } from "react";
import queryString from "query-string";
import { useRouter } from "next/router";

export const SearchResult: React.FC = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  console.log("\x1b[33m%s\x1b[0m", ">> router", router);
  useEffect(() => {
    const callApiAsync = async () => {
      // if (loading) {
      const searchApiEndpoint = `/api/suche${window.location.search}`;

      const searchResult = await fetch(searchApiEndpoint, {
        headers: { "Content-Type": "application/json" },
      }).then((response) => response.json());
      console.log("\x1b[33m%s\x1b[0m", ">> searchResult async", searchResult);
      // setData(searchResult);
      //   setLoading(false);
      // }
    };

    callApiAsync();
  }, [router.query]);

  console.log("\x1b[33m%s\x1b[0m", ">> SearchResult data", data);
  return <Flex></Flex>;
};
