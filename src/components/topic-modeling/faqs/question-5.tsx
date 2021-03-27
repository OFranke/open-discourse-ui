import DefaultText from "@bit/limebit.limebit-ui.default-text";
import { FaqAccordionItem } from "./faq-accordion-item";

export const Question5 = () => {
  return (
    <FaqAccordionItem headline="Welche Schwächen hat das Modell?">
      <>
        <DefaultText>
          Automatisierte Textanalysen können gewisse Schwächen bergen. So kann
          aus der Relevanz nicht abgelesen werden, ob eine Person oder Partei
          einem Thema zu- oder abgeneigt. Lediglich die Auseinandersetzung mit
          diesem Thema kann aufgezeigt werden.
        </DefaultText>
      </>
    </FaqAccordionItem>
  );
};
