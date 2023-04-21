import Home from './pages/Home';
import Product from './pages/Product';
import ProductsList from './pages/ProductsList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import styled from 'styled-components';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

const Container = styled.div`
  height: 60px;
`

const App = () => {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products">
          <ProductsList/>
        </Route>
        <Route path="/products/:id">
          <Product/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/"/> : <Login/>}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/"/> : <Register/>}
        </Route>
      </Switch>


  </Router>
  )
};

export default App
