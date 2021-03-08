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
  color,
  disabled,
}: DefaultSelectInputProps) => {
  const Wrapper = ({ children }: { children: ReactNode }) =>
    disabled ? (
      <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
        {children}
      </Tooltip>
    ) : (
      <>{children}</>
    );
  return (
    <SelectInput
      width="100%"
      placeholder={placeholder}
      rawData={rawData}
      onSelect={onSelect}
      InputProps={{
        disabled: disabled,
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
