import { BaseTemplate } from "../templates/base-template";
import { Heading } from "@chakra-ui/react";
import SEO from "../components/seo";

const Page: React.FC = () => {
  return (
    <BaseTemplate>
      <SEO title="" description="" canonicalRoute="" />
      <Heading>Tools und Daten</Heading>
    </BaseTemplate>
  );
};

export default Page;
