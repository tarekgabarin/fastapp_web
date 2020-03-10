import React from 'react';
import NavBar from './commons/NavBar'
import Info from './containers/Info'
import {Box, Flex} from '@chakra-ui/core'

function App() {
  return (
    <div>
      <NavBar>
          <Info></Info>
      </NavBar>
    </div>
  );
}

export default App;
