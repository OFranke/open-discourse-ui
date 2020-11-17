import { Stack } from "@chakra-ui/react";
import { SearchForm } from "./search-form";
import { SearchResult } from "./search-result";

export const FullTextSearch = () => (
  <Stack>
    <SearchForm />
    <SearchResult />
  </Stack>
);

export default FullTextSearch;
