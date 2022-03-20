import { Box, Center, Text, VStack, Image } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Profile from '../components/Profile';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>toiki</title>
      </Head>
      <Box marginX='20%'>
        <Profile />
      </Box>
    </>
  );
};

export default Home;
