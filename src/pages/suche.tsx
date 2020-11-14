import { BaseTemplate } from "../templates/base-template";
import { Heading, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import queryString from "query-string";
import { SearchForm } from "../components/search-form";
import { SearchResult } from "../components/search-result";
export interface QueryParams {
  first?: number;
  contentQuery?: string;
  nameQuery?: string;
  positionQuery?: string;
  fromDate?: string;
  toDate?: string;
}

const Search: React.FC = () => {
  const router = useRouter();
  const {
    contentQuery,
    nameQuery,
    positionQuery,
    fromDate,
    toDate,
  } = router.query;
  // const [queryParams, setQueryParams] = useState<QueryParams>(router.query);
  // console.log("\x1b[33m%s\x1b[0m", ">> queryParamsddd", router.query);

  // const [searchParams] = useState<QueryParams>({ ...params });

  // useEffect(() => {
  //   const params = (queryString.parseUrl(window.location.search)
  //     .query as unknown) as QueryParams;
  //   // setQueryParams({ ...params });
  //   console.log("\x1b[33m%s\x1b[0m", ">> router.query", router.asPath);
  // fetch(`/api${router.asPath}`).then((response) =>
  //   console.log("\x1b[33m%s\x1b[0m", ">> response", response)
  // );
  // }, [queryParams]);
  return (
    <BaseTemplate>
      <Flex direction="column">
        <Heading>test</Heading>

        <Flex flex={1} p={4}>
          {/* {process.browser && ( */}
          <SearchForm
          // contentQuery={contentQuery as string}
          // nameQuery={nameQuery as string}
          // positionQuery={positionQuery as string}
          // fromDate={fromDate as string}
          // toDate={toDate as string}
          />

          {/* <Search
            first={Number(searchParams.first) || 50}
            contentQuery={searchParams.contentQuery}
            nameQuery={searchParams.nameQuery}
            positionQuery={searchParams.positionQuery}
            fromDate={searchParams.fromDate}
            toDate={searchParams.toDate}
          /> */}
        </Flex>
        <SearchResult />
      </Flex>
    </BaseTemplate>
  );
};

export default Search;
