import { useState, useCallback } from "react";
import { getQueryStringValue, setQueryStringValue } from "./queryString";
import { useRouter } from "next/router";

export const useQueryString = (key, initialValue) => {
  const router = useRouter();
  const [value, setValue] = useState(getQueryStringValue(key) || initialValue);
  const onSetValue = useCallback(
    (newValue) => {
      setValue(newValue);
      setQueryStringValue(key, newValue);
    },
    [key]
  );

  return [value, onSetValue];
};
