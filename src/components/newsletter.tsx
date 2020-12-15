import { useBreakpointValue } from "@chakra-ui/react";
import React from "react";

export const Newsletter: React.FC = () => {
  const iframeHeight = useBreakpointValue({ base: "1000px" });
  const iframeWidth = useBreakpointValue({ base: "100%" });
  return (
    <>
      <iframe
        src="http://eepurl.com/gNedIP"
        height={iframeHeight}
        width={iframeWidth}
      />
    </>
  );
};
