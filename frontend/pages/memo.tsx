import { Box, Center, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { getAllMemo } from '../api/memo';
import MemoItem, { MemoItemProps } from '../modules/MemoItem';

type MemoPageProps = {
  memos: MemoItemProps[];
};

const About: NextPage<MemoPageProps> = (props) => {
  return (
    <>
      <Head>
        <title>Memo | toiki</title>
      </Head>
      <Box marginX='16%'>
        <VStack marginX='32px'>
          {props.memos.map((memo, index) => {
            return <MemoItem key={index} {...memo} />;
          })}
        </VStack>
      </Box>
    </>
  );
};

export default About;

export const getStaticProps = async () => {
  const memo = getAllMemo(['slug', 'title', 'date']);

  return {
    props: {
      memos: memo,
    },
  };
};
