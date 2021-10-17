import { Box, Center } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Box bg="tomato" w="100%" p={1} color="white">
        <Box>Hoge</Box>
        <Center>Hello, world</Center>
      </Box>
    </div>
  );
}
