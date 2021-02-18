import { BaseTemplate } from "../templates/base-template";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { Section } from "@bit/limebit.limebit-ui.section";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";

import React from "react";
import SEO from "../components/seo";

const Search: React.FC = () => {
  return (
    <BaseTemplate>
      <SEO
        title="Themensuche"
        description="Die Open Discourse Volltextsuche ermöglicht eine strukturierte Suche in allen verfügbaren Plenarprotokollen des Deutschen Bundestags seit 1949."
        canonicalRoute="dokumentation"
      />
      <Section
        marginTop={{ base: "8", sm: "14", md: "20", lg: "20", xl: "32" }}
      >
        <DefaultContainer size="l">
          <DefaultHeadline size="s" as="h2">
            Dokumentation
          </DefaultHeadline>
        </DefaultContainer>
      </Section>
    </BaseTemplate>
  );
};

export default Search;
