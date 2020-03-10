import React from 'react';
import NavBar from './commons/NavBar'
import Info from './containers/Info'
import {Box, Flex} from '@chakra-ui/core'

function App() {
  return (
    <Flex flexDirection="column" minH="100%" >
      <NavBar>
          <Info></Info>
      </NavBar>
    </Flex>
  );
}

export default App;
