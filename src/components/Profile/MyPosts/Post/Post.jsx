import { Box, WrapItem, Avatar, Button } from '@chakra-ui/react';
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
const Post = () => {
  return (
    <Box>
      <Box>
        <WrapItem>
          <Avatar
            size="xl"
            name="Christian Nwamba"
            src="https://bit.ly/code-beast"
          />
          {'Post 1 '}
          <Button size="s" colorScheme="blue">Remove</Button>
        </WrapItem>
       
      </Box>
      
      <Button colorScheme="blue" size="xs">
      <AiOutlineLike />
      </Button>
      <Button colorScheme="blue" size="xs">
      <AiOutlineDislike />
      </Button>
    </Box>
  );
};

export default Post;
