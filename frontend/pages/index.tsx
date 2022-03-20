import { Box, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import PageLink from '../components/PageLink';
import Profile from '../components/Profile';
import { pageList, PageInfo } from '../utils/pages';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>toiki</title>
      </Head>
      <Box marginX='20%'>
        <Profile />
        <VStack marginX='32px'>
          {pageList.map((page: PageInfo, index) => {
            return (
              <PageLink
                key={index}
                title={page.title}
                desc={page.description}
                url={page.url}
              />
            );
          })}
        </VStack>
      </Box>
    </>
  );
};

export default Home;
