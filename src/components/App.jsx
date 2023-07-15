import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import PrimarySearchAppBar from './NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Product from './Grids'
import Carrito from './CarritoProduct';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <PrimarySearchAppBar />
        <Switch>
          <Route exact path="/" component={Product} />
          <Route path="/carrito" component={Carrito} />
        </Switch>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;