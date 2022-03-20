import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem, Link } from '@chakra-ui/react';

const PulldownMenu: React.FC = () => {
  return (
    <Menu>
      <MenuButton>
        <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <MenuItem as={Link} href='about' _hover={{ textDecoration: 'none' }}>
          About me
        </MenuItem>
        <MenuItem as={Link} href='memo' _hover={{ textDecoration: 'none' }}>
          Memo
        </MenuItem>
        <MenuItem>
          <Link
            as={Link}
            href='https://twitter.com/kn_prg'
            _hover={{ textDecoration: 'none' }}
            isExternal
          >
            Twitter
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            as={Link}
            href='https://github.com/TomoakiOiki'
            _hover={{ textDecoration: 'none' }}
            isExternal
          >
            Github
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PulldownMenu;
