import { Accordion } from "@chakra-ui/accordion";
import React from "react";
import { Question1 } from "./question-1";
import { Question2 } from "./question-2";
import { Question3 } from "./question-3";
import { Question4 } from "./question-4";
import { Question5 } from "./question-5";

export const TopicModellingFaqs = () => {
  return (
    <Accordion allowToggle>
      <Question1 />
      <Question2 />
      <Question3 />
      <Question4 />
      <Question5 />
    </Accordion>
  );
};
