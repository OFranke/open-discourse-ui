import { Tooltip } from "@chakra-ui/react";
import { ReactNode } from "react";
import { DataProps, SelectInput } from "./select-input";

export interface DefaultSelectInputProps {
  rawData: DataProps[];
  onSelect: (element: DataProps | undefined) => void;
  placeholder: string;
  initialValue?: DataProps;
  color: string;
  disabled?: boolean;
}

export const ColoredSelectInput = ({
  rawData,
  onSelect,
  placeholder,
  initialValue,
  disabled,
}: DefaultSelectInputProps) => {
  return (
    <SelectInput
      width="100%"
      placeholder={placeholder}
      rawData={rawData}
      onSelect={onSelect}
      InputProps={{
        disabled: disabled,
        borderColor: `gray.200`,
        focusBorderColor: `gray.500`,
        type: "text",
        _hover: { borderColor: `gray.500` },
      }}
      BoxProps={{
        backgroundColor: "white",
        borderWidth: "1px",
        borderColor: `gray.200`,
      }}
      ButtonProps={{
        textColor: "black",
        rounded: "0px",
        _hover: { backgroundColor: `gray.200` },
        paddingX: "1",
      }}
      iconColor={`gray.500`}
      iconHoverColor={`gray.100`}
      initialValue={initialValue}
    />
  );
};
