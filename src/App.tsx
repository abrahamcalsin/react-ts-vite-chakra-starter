import * as React from "react";

import { Code, Container, Heading, Link, Text } from "@chakra-ui/react";

function App() {
  return (
    <Container textAlign="center" mt="20">
      <Heading>
        <Link href="https://reactjs.org/" isExternal>
          React
        </Link>{" "}
        +{" "}
        <Link href="https://www.typescriptlang.org/" isExternal>
          TS
        </Link>{" "}
        +{" "}
        <Link href="https://vitejs.dev/" isExternal>
          Vite
        </Link>{" "}
        +{" "}
        <Link href="https://chakra-ui.com/" isExternal>
          Chakra
        </Link>
      </Heading>
      <Text my="6">
        Edit <Code>src/App.tsx</Code> and save to test HMR
      </Text>
      <Text
        bg="gray.100"
        _dark={{ bg: "whiteAlpha.200" }}
        fontStyle="italic"
        py="5"
      >
        {"{"}Created by{" "}
        <Link
          href="https://www.abrahamcalsin.com"
          fontWeight="bold"
          textDecoration="underline"
          isExternal
        >
          Abraham Calsin
          {"}"}
        </Link>
      </Text>
    </Container>
  );
}

export default App;
