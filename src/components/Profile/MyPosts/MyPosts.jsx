import { Box, Textarea, Button } from '@chakra-ui/react';
import Post from './Post/Post';
const MyPosts = props => {
  return (
    <Box>
      <Box>
        My posts
        <Box>
          <Textarea m='2'/>
          <Button colorScheme="blue" mb='10'>Add post</Button>
        </Box>
      </Box>
      <Box>
        <Post message="Hi, how are you?" likesCount='15' />
        <Post message="It's my first post" likesCount='20'/>
      </Box>
    </Box>
  );
};

export default MyPosts;
