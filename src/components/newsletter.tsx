import { useBreakpointValue } from "@chakra-ui/react";
import React from "react";

export const Newsletter: React.FC = () => {
  const iframeHeight = useBreakpointValue({ base: "1000px" });
  const iframeWidth = useBreakpointValue({ base: "100%" });
  return (
    <>
      <iframe
        src="https://opendiscourse.us4.list-manage.com/subscribe/post?u=30a259be75440df1879f0b592&id=c65a7ccd1a"
        height={iframeHeight}
        width={iframeWidth}
      />
    </>
  );
};
