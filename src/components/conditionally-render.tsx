import React, { useEffect, useState } from "react";

export interface ConditionallyRenderProps {
  client?: boolean;
  server?: boolean;
}

const ConditionallyRender: React.FC<ConditionallyRenderProps> = ({
  client,
  server,
  children,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted && client) {
    return null;
  }

  if (isMounted && server) {
    return null;
  }

  return children as React.ReactElement;
};

export default ConditionallyRender;
