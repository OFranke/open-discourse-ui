import { BaseTemplate } from "../templates/base-template";
import { Heading, Flex } from "@chakra-ui/core";
import { FullTextSearch } from "../components/full-text-search";

const Search: React.FC = () => {
  return (
    <BaseTemplate>
      <Flex direction="column">
        <Heading>Volltextsuche</Heading>
        <FullTextSearch />
      </Flex>
    </BaseTemplate>
  );
};

export default Search;
