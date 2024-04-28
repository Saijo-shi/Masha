import { Center, Wrap, WrapItem } from '@chakra-ui/react';
const Footer = () => {
  return (
    <Wrap>
  <WrapItem>
    <Center w='180px' h='80px' >
      Филипп
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='180px' h='80px' >
      Мама
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='180px' h='80px'>
      Флора
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='180px' h='80px' >
      Папа
    </Center>
  </WrapItem>
</Wrap>
  );
};

export default Footer;
