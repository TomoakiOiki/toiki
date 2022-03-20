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
  console.log(123);

  return (
    <Box h={'10%'}>
      <BreadCrumb />
    </Box>
  );
};

export default Header;
