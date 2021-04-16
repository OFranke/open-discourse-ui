import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Card } from "@bit/limebit.limebit-ui.card";
import { Box } from "@chakra-ui/react";
import {
  DefaultHeadline,
  headingMarginBottom,
} from "@bit/limebit.limebit-ui.default-headline";
import { ReactNode } from "react";

interface FaqAccordionItemProps {
  headline: string;
  children: ReactNode;
}
export const FaqAccordionItem = ({
  headline,
  children,
}: FaqAccordionItemProps) => {
  return (
    <AccordionItem marginBottom={{ base: "4", md: "6", lg: "10" }}>
      <Card>
        <h3>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <DefaultHeadline size="xs" as="span">
                {headline}
              </DefaultHeadline>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h3>
        <AccordionPanel marginTop={headingMarginBottom["xs"]} pb={4}>
          {children}
        </AccordionPanel>
      </Card>
    </AccordionItem>
  );
};
