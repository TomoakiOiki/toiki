import {
  Box,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import PulldownMenu from '../components/PulldownMenu';
import BreadCrumb from './BreadCrumb';

const Header: React.FC = () => {
  return (
    <Box h={'10%'} marginBottom='24px'>
      <BreadCrumb />
    </Box>
  );
};

export default Header;
