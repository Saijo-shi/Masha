import { Box, WrapItem, Avatar, Button } from '@chakra-ui/react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
const Post = props => {
  return (
    <Box>
      <Box>
        <WrapItem>
          <Avatar
            m="4"
            size="xl"
            name="Медведь"
            src="https://www.vokrug.tv/pic/person/b/7/2/c/b72cda00c79ea8ce59e4bd4b2f4dbc05.jpg"
          />
          {props.message}
          <Button m="4" size="s" colorScheme="blue" textAlign="center">
            Remove
          </Button>
        </WrapItem>
      </Box>

      <Button colorScheme="blue" size="xs" m="4">
        <AiOutlineLike m="4" /> {props.likesCount}
      </Button>
      <Button colorScheme="blue" size="xs">
        <AiOutlineDislike m="4" />
      </Button>
    </Box>
  );
};

export default Post;
