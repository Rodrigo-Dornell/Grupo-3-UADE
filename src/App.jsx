import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import PrimarySearchAppBar from './NavBar';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <PrimarySearchAppBar />
    </StyledEngineProvider>
  );
}

export default App;

