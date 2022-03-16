import { Box, Center, HStack, Link } from "@chakra-ui/react";

export const Header: React.FC = () => {
  return (
    <Box w="100%" backgroundColor="black">
      <Center>
        <HStack>
          <HStack color="White">
            <Link>About me</Link>
            <Link>Memo</Link>
            <Link>Timeline</Link>
          </HStack>
        </HStack>
      </Center>
    </Box>
  );
};
