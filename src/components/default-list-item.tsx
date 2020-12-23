import { ListItemProps, ListItem } from "@chakra-ui/react";
export const DefaultListItem: React.FC<ListItemProps> = ({
  children,
  ...props
}) => {
  return (
    <ListItem
      fontSize={{
        base: "sm",
        sm: "xl",
        md: "2xl",
        lg: "2xl",
        xl: "4xl",
      }}
      marginBottom={{
        base: "4",
        md: "4",
        lg: "6",
        xl: "8",
      }}
      {...props}
    >
      {children}
    </ListItem>
  );
};
