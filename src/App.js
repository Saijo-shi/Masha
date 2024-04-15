import React from 'react';
import { ChakraProvider, theme, Grid, GridItem } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <Grid
        templateAreas={`"header header"
                        "nav main"
                        "nav footer"`}
        gridTemplateRows={'1fr'}
        gridTemplateColumns={'200px 1fr'}
        gap="5"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" area={'header'} border="solid">
          <Header />
        </GridItem>
        <GridItem pl="2" area={'nav'} border="solid">
          <Navbar />
        </GridItem>
        <GridItem pl="2" area={'main'} border="solid">
          <Profile />
        </GridItem>
        <GridItem pl="2" area={'footer'} border="solid">
          <Footer/>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default App;
