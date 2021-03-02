import React, { useState } from "react";
import {
  Input,
  Box,
  Button,
  Text,
  InputGroup,
  InputRightElement,
  ResponsiveValue,
  BoxProps,
  InputProps,
  ButtonProps,
  TextProps,
} from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import * as CSS from "csstype";

export interface DataProps {
  label: string;
  key: string;
  searchList?: string[];
}
interface SearchResult {
  key: string | null;
  searchHit: string | null;
}

export interface SelectInputProps {
  placeholder: string;
  rawData: DataProps[];
  width?: string;
  first?: number;
  onSelect?: (element: DataProps | undefined) => void;
  BoxProps?: BoxProps;
  InputProps?: InputProps;
  ButtonProps?: ButtonProps;
  TextProps?: TextProps;
  iconColor?: ResponsiveValue<CSS.Property.BackgroundImage>;
  iconHoverColor?: ResponsiveValue<CSS.Property.BackgroundImage>;
  boxHoverColor?: ResponsiveValue<CSS.Property.BackgroundImage>;
  initialValue?: DataProps;
}

// const searchFilter = (element: DataProps) => {
//   const concatenatedSearchList =
//     element.searchList && element.searchList.join(" ");

//   console.log(
//     "\x1b[33m%s\x1b[0m",
//     "%c >> searchList",
//     concatenatedSearchList
//   );

//   if (
//     state.searchInput &&
//     element.label.toLowerCase().includes(state.searchInput.toLowerCase())
//   ) {
//     return true;
//   }
//   if (
//     state.searchInput &&
//     element.searchList &&
//     concatenatedSearchList
//       ?.toLocaleLowerCase()
//       .includes(state.searchInput.toLowerCase())
//   ) {
//     const searchHit = element.searchList.find((searchListEntry) =>
//       searchListEntry.toLowerCase().includes(state.searchInput.toLowerCase())
//     );
//     if (searchHit) {
//       setState({ ...state, searchResult: { searchHit, key: element.key } });
//     }
//     return true;
//   }
// };

export const SelectInput = ({
  width,
  placeholder,
  rawData,
  onSelect,
  BoxProps,
  ButtonProps,
  InputProps,
  TextProps,
  iconColor,
  iconHoverColor,
  boxHoverColor,
  initialValue,
  first = 50,
}: SelectInputProps): JSX.Element => {
  const [state, setState] = useState(null);

  const [focusedInput, setFocusedInput] = useState(false);
  const [focusedButton, setFocusedButton] = useState(false);
  const [selected, setSelected] = useState<DataProps | null>(
    initialValue || null
  );
  const [searchResult, setSearchResult] = useState<SearchResult>({
    key: null,
    searchHit: null,
  });
  const [input, _setInput] = useState(initialValue?.label || "");

  const setInput = (input: string) => {
    if (input && input.length >= 1) {
      _setInput(input);
    } else {
      _setInput("");
      setSearchResult({ key: null, searchHit: null });
    }
  };
  console.log("\x1b[33m%s\x1b[0m", "%c >> input", input);
  const calculateSearchResultMatch = (
    searchList: string[],
    match: string,
    key: string
  ) => {
    console.log("\x1b[33m%s\x1b[0m", "%c >> searchList", searchList);
    console.log("\x1b[33m%s\x1b[0m", "%c >> match", match);
    const searchHit = searchList.find((item) =>
      item.toLowerCase().includes(match.toLowerCase())
    );
    if (searchHit && searchHit != searchResult.searchHit) {
      setSearchResult({
        key,
        searchHit,
      });
    }
    console.log("\x1b[33m%s\x1b[0m", "%c >> searchHit", searchHit);
  };

  return (
    <Box position="relative" display="inline-block" width={width}>
      <InputGroup
        onFocus={() => setFocusedInput(true)}
        onBlur={() => {
          setTimeout(() => {
            if (!selected) setInput("");
            setFocusedInput(false);
            setSearchResult({ key: null, searchHit: null });
          }, 150);
        }}
      >
        <Input
          {...InputProps}
          placeholder={placeholder}
          onChange={(e) => {
            setInput(e.target.value);
            setSelected(null);
          }}
          value={selected ? selected.label : input}
          width="100%"
        />
        <InputRightElement
          children={
            selected ? (
              <CloseIcon
                boxSize="25px"
                color={iconColor}
                borderRadius="0.5em"
                padding="4px"
                cursor="pointer"
                _hover={{ backgroundColor: iconHoverColor }}
                onClick={() => {
                  setInput("");
                  setSelected(null);
                  setSearchResult({ key: null, searchHit: null });
                  if (onSelect) onSelect(undefined);
                }}
              />
            ) : (
              <SearchIcon color={iconColor} />
            )
          }
        />
      </InputGroup>
      {focusedInput || focusedButton ? (
        <Box
          {...BoxProps}
          position="absolute"
          width="100%"
          maxHeight="200px"
          overflowY="auto"
          marginTop="6px"
          shadow="sm"
          rounded="4px"
          zIndex="20"
          onFocus={() => setFocusedButton(true)}
          onBlur={() => setFocusedButton(false)}
          _focus={{ outline: "None" }}
        >
          {rawData
            .filter((element) => {
              const searchList =
                element.searchList && element.searchList.join(" ");
              console.log("\x1b[33m%s\x1b[0m", "%c >> searchList", searchList);
              if (element.label.toLowerCase().includes(input.toLowerCase())) {
                return true;
              }
              if (
                searchList?.toLocaleLowerCase().includes(input.toLowerCase())
              ) {
                calculateSearchResultMatch(
                  element.searchList as string[],
                  input,
                  element.key
                );
                return true;
              }
              // return element.label.toLowerCase().includes(input.toLowerCase());
            })
            .slice(0, first)
            .map((element) => (
              <Button
                key={element.key}
                justifyContent="left"
                _hover={{ backgroundColor: boxHoverColor }}
                {...ButtonProps}
                variant="ghost"
                width="100%"
                textAlign="left"
                onClick={() => {
                  setInput(element.label);
                  setSelected(element);
                  setFocusedButton(false);
                  setFocusedInput(false);
                  setSearchResult({ key: null, searchHit: null });
                  if (onSelect) onSelect(element);
                }}
              >
                <Text {...TextProps} fontWeight="normal" paddingLeft="10px">
                  {element.label}
                </Text>
                {searchResult.key == element.key && (
                  <Text
                    {...TextProps}
                    fontWeight="300"
                    color="grey"
                    paddingLeft="10px"
                  >
                    enthält: {searchResult.searchHit}
                  </Text>
                )}
              </Button>
            ))}
        </Box>
      ) : null}
    </Box>
  );
};

export default SelectInput;
