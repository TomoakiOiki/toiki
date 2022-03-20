import { Box, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Select } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Header: React.FC = () => {
  return (
    <Box h={"10%"}>
      <Box marginLeft="15%" marginTop="2%">
        <Link href="/" fontSize="xl" marginRight="8px">
          toiki
        </Link>
        <Menu>
          <MenuButton>
            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link href="about">About me</Link>
            </MenuItem>
            <MenuItem>
              <Link href="memo">Memo</Link>
            </MenuItem>
            <MenuItem>
              <Link href="timeline">Timeline</Link>
            </MenuItem>
            <MenuItem>
              <Link href="https://twitter.com/kn_prg" isExternal>
                Twitter
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="https://github.com/TomoakiOiki" isExternal>
                Github
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default Header;
