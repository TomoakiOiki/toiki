import { VStack, Box, Text, Image } from '@chakra-ui/react';

const Profile: React.FC = () => {
  return (
    <VStack
      borderBottom='1px'
      borderBottomColor='gray.500'
      paddingBottom='32px'
    >
      <Image
        borderRadius='full'
        boxSize='150px'
        src='https://avatars.githubusercontent.com/u/76932511?v=4'
        alt='toiki'
        height='100px'
        width='auto'
      />
      <Box>
        <Text fontSize='4xl' fontWeight='bold'>
          toiki / Tomoaki Oiki
        </Text>
      </Box>
      <Text color='gray'>
        {'A software engineer in Japan. Mainly developing web applications.'}
      </Text>
    </VStack>
  );
};

export default Profile;
