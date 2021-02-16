import {
  DataProps,
  SelectInput,
} from "@bit/limebit.chakra-ui-recipes.select-input";

export interface DefaultSelectInputProps {
  rawData: DataProps[];
  onSelect: (element: DataProps | undefined) => void;
  placeholder: string;
  initialValue?: DataProps;
  color: string;
}

export const ColoredSelectInput = ({
  rawData,
  onSelect,
  placeholder,
  initialValue,
  color,
}: DefaultSelectInputProps) => {
  console.log("\x1b[33m%s\x1b[0m", "%c >> color", color);
  return (
    <SelectInput
      width="100%"
      placeholder={placeholder}
      rawData={rawData}
      onSelect={onSelect}
      InputProps={{
        borderColor: `${color}.200`,
        focusBorderColor: `${color}.500`,
        type: "text",
        _hover: { borderColor: `${color}.500` },
      }}
      BoxProps={{
        backgroundColor: "white",
        borderWidth: "1px",
        borderColor: `${color}.200`,
      }}
      ButtonProps={{
        textColor: "black",
        rounded: "0px",
        _hover: { backgroundColor: `${color}.200` },
        paddingX: "1",
      }}
      iconColor={`${color}.500`}
      iconHoverColor={`${color}.100`}
      initialValue={initialValue}
    />
  );
};
