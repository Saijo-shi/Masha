import { Box, Textarea, Button } from '@chakra-ui/react';
import Post from './Post/Post';
const MyPosts = props => {
  return (
    <Box>
      <Box>
        My posts
        <Box>
          <Textarea m='4'/>
          <Button colorScheme="blue" m='4'>Add post</Button>
        </Box>
      </Box>
      <Box>
        <Post message="Hi, how are you?" likesCount='15' m='4'/>
        <Post message="It's my first post" likesCount='20' m='4'/>
      </Box>
    </Box>
  );
};

export default MyPosts;
