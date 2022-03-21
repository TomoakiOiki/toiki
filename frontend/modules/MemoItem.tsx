import { Box, Text, Link } from '@chakra-ui/react';

export type MemoItemProps = {
  title: string;
  date: string;
  slug: string;
};

const MemoItem: React.FC<MemoItemProps> = (props) => {
  const date = new Date(props.date);

  return (
    <Box p='5' borderWidth='1px' width='100%' boxSizing='inherit'>
      <Text fontWeight='bold'>{`${date.getFullYear()}年${date.getMonth()}月${date.getDay()}日`}</Text>
      <Link href={`/memo/${props.slug}`}>
        <Text mt={2} fontSize='xl' fontWeight='semibold' lineHeight='short'>
          {props.title}
        </Text>
      </Link>
    </Box>
  );
};

export default MemoItem;
