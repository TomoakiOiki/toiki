import { Box, HStack, Link, Text } from '@chakra-ui/react';
import { PageInfo } from '../utils/pages';

const PageLink: React.FC<PageInfo> = (props) => {
  return (
    <Box width='100%' marginY='8px'>
      <HStack>
        <Link
          href={props.url}
          marginRight='px'
          fontSize='3xl'
          isExternal={props.isExternal}
        >
          {props.title}
        </Link>
      </HStack>
      <Text color='gray'>{props.description}</Text>
    </Box>
  );
};

export default PageLink;
