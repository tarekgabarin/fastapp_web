import React from 'react';
import NavBar from './commons/NavBar'
import Info from './containers/Info'

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
