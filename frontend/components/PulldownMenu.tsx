import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem, Link } from '@chakra-ui/react';
import { PageInfo, pageList } from '../utils/pages';

const PulldownMenu: React.FC = () => {
  return (
    <Menu>
      <MenuButton>
        <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        {pageList.map((page: PageInfo, index) => {
          return (
            <MenuItem
              key={page.title}
              as={Link}
              href={page.url}
              _hover={{ textDecoration: 'none' }}
              isExternal={page.isExternal}
            >
              {page.title}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default PulldownMenu;
