import { Container, ContainerProps, useBreakpointValue } from "@chakra-ui/core";

interface DefaultContainerProps extends ContainerProps {
  size: "s" | "m" | "l" | "xl";
}
export const DefaultContainer: React.FC<DefaultContainerProps> = ({
  size,
  children,
  ...props
}) => {
  const containerSizes = {
    s: { base: "100vw", sm: "400px", md: "500px", lg: "850px", xl: "60vw" },
    m: { base: "100vw", sm: "500px", md: "600px", lg: "1050px", xl: "65vw" },
    l: { base: "100vw", sm: "500px", md: "900px", lg: "1250px", xl: "70vw" },
    xl: { base: "100vw", sm: "500px", md: "900px", lg: "1400px", xl: "80vw" },
  };
  const containerMaxWidth = useBreakpointValue(containerSizes[size]);

  return (
    <Container
      maxW={containerMaxWidth}
      {...props}
      marginLeft="auto"
      marginRight="auto"
    >
      {children}
    </Container>
  );
};
