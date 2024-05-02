import { Box, Textarea, Button } from '@chakra-ui/react';
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <Box>
     
      <Box>
        My posts
        <Box >
          <Textarea />
          <Button colorScheme="blue">Add post</Button>
        
        </Box>
        </Box>
        <Box>
         <Post />
      </Box>
   
    </Box>
  )
};

export default MyPosts;
