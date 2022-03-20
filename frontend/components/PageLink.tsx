import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, HStack, Link, Text } from '@chakra-ui/react';

const PageLink: React.FC<{ title: string; desc: string; url: string }> = (
  props
) => {
  return (
    <Box width='100%' marginY='8px'>
      <HStack>
        <Link href={props.url} marginRight='px' fontSize='3xl'>
          {props.title}
        </Link>
      </HStack>
      <Text color='gray'>{props.desc}</Text>
    </Box>
  );
};

export default PageLink;
