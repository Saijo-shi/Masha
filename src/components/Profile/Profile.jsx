import { Container, Box, Image } from '@chakra-ui/react';
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
  return (
    <Container>
      <Box>
        <Image
          w="100%"
          h="100%"
          src="https://zabavnikplus.ru/wp-content/uploads/4/4/4/44487e034e78e10024f8fac778adda42.jpeg"
          alt="Dan Abramov"
        />
      </Box>
      <Box>ava + description</Box>
     <MyPosts />
    </Container>
  );
};

export default Profile;
