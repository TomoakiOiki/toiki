import { Box } from '@chakra-ui/react';
import BreadCrumb from './BreadCrumb';

const Header: React.FC = () => {
  return (
    <Box h={'10%'} marginBottom='24px'>
      <BreadCrumb />
    </Box>
  );
};

export default Header;
