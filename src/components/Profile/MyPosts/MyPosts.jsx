import { Container, Box, Textarea, Button, WrapItem, Avatar } from '@chakra-ui/react';
const MyPosts = () => {
  return (
    <Container>
      <Box>
        My posts
        <Box>
          <Textarea />
          <Button colorScheme="blue">Add post</Button>
          <Button colorScheme="blue">Remove</Button>
        </Box>
        <Box>
          <Box>
            <WrapItem>
              <Avatar
                size="xl"
                name="Christian Nwamba"
                src="https://bit.ly/code-beast"
              />{'Post 1 '}
            </WrapItem>
          </Box>
          <Box>Post 2</Box>
        </Box>
      </Box>
    </Container>
  );
};

export default MyPosts;
