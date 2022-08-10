import { extendTheme } from "@chakra-ui/react";

const mainTheme = extendTheme({
  config: {
    intialColorMode: "dark",
    useSystemColorMode: true,
  },
});

export default mainTheme;
