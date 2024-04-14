import React from 'react';
import { ChakraProvider, theme, Grid, GridItem } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './Header';
import Main from './Main';

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
        <GridItem pl="2"  area={'header'} border="solid">
          <Header />
        </GridItem>
        <GridItem pl="2"  area={'nav'} border="solid"></GridItem>
        <GridItem pl="2"  area={'main'} border="solid">
          <Main />
        </GridItem>
        <GridItem pl="2" area={'footer'} border="solid">
          Footer
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default App;
