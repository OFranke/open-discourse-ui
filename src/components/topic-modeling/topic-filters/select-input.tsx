import React, { useEffect, useState } from "react";
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
import { Tooltip } from "@chakra-ui/react";

export interface DataProps {
  label: string;
  key: string;
  searchList?: string[];
}

interface FilteredResult extends DataProps {
  searchHit?: string;
}
interface SearchResult {
  key: string | null;
  searchHit: string | null;
}
interface ExtendedInputProps extends InputProps {
  disabled?: boolean;
}
export interface SelectInputProps {
  placeholder: string;
  rawData: DataProps[];
  width?: string;
  first?: number;
  onSelect?: (element: DataProps | undefined) => void;
  BoxProps?: BoxProps;
  InputProps?: ExtendedInputProps;
  ButtonProps?: ButtonProps;
  TextProps?: TextProps;
  iconColor?: ResponsiveValue<CSS.Property.BackgroundImage>;
  iconHoverColor?: ResponsiveValue<CSS.Property.BackgroundImage>;
  boxHoverColor?: ResponsiveValue<CSS.Property.BackgroundImage>;
  initialValue?: DataProps;
}

interface MarkSearchHighlightProps {
  word: string;
  searchHit: string;
}
const markSearchHighlight = ({ word, searchHit }: MarkSearchHighlightProps) => {
  const highlightedWord = word.replace(
    new RegExp(searchHit, "gi"),
    (match) => `<b>${match}</b>`
  );
  return highlightedWord;
};

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

  const [filteredResults, setFilteredResults] = useState<FilteredResult[]>(
    rawData
  );

  useEffect(() => {
    if (input == "") {
      setFilteredResults(rawData);
    } else {
      const results: Array<FilteredResult | undefined> = rawData.map(
        (element) => {
          const searchList = element.searchList && element.searchList.join(" ");
          if (element.label.toLowerCase().includes(input.toLowerCase())) {
            return element;
          }
          if (searchList?.toLocaleLowerCase().includes(input.toLowerCase())) {
            calculateSearchResultMatch(
              element.searchList as string[],
              input,
              element.key
            );

            const searchHit = element?.searchList?.find((item) =>
              item.toLowerCase().includes(input.toLowerCase())
            );
            return { ...element, searchHit };
          }
        }
      );
      const resultsWithoutUndefinedValues = results.filter(Boolean);
      setFilteredResults(resultsWithoutUndefinedValues as FilteredResult[]);
    }
  }, [input]);

  const setInput = (input: string) => {
    if (input && input.length >= 1) {
      _setInput(input);
    } else {
      _setInput("");
      setSearchResult({ key: null, searchHit: null });
    }
  };
  const calculateSearchResultMatch = (
    searchList: string[],
    match: string,
    key: string
  ) => {
    const searchHit = searchList.find((item) =>
      item.toLowerCase().includes(match.toLowerCase())
    );
    if (searchHit && searchHit != searchResult.searchHit) {
      setSearchResult({
        key,
        searchHit,
      });
    }
  };

  return (
    <Box position="relative" display="inline-block" width={width}>
      <Tooltip
        label="Dieser Filter ist nicht verfügbar, wenn Sie als Akteur eine Einzelperson gewählt haben."
        isDisabled={!Boolean(InputProps?.disabled)}
      >
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
      </Tooltip>
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
          {filteredResults.map((element) => (
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
              {element.searchHit && (
                <Text
                  {...TextProps}
                  fontWeight="300"
                  color="grey"
                  paddingLeft="10px"
                >
                  enthält:{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: markSearchHighlight({
                        word: element.searchHit,
                        searchHit: input,
                      }),
                    }}
                  ></span>
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
