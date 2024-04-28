import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { CgChevronRight } from "react-icons/cg";
const Navbar = () => {
  return (
    <List spacing={3}>
      <ListItem>
        <ListIcon as={CgChevronRight} color="green.500" />
        Profile
      </ListItem>
      <ListItem>
        <ListIcon as={CgChevronRight} color="green.500" />
        Messages
      </ListItem>
      <ListItem>
        <ListIcon as={CgChevronRight} color="green.500" />
        News
      </ListItem>
      <ListItem>
        <ListIcon as={CgChevronRight} color="green.500" />
        Music
      </ListItem>
      <ListItem>
        <ListIcon as={CgChevronRight} color="green.500" />
        Settings
      </ListItem>
    </List>
  );
};

export default Navbar;
