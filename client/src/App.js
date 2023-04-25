import Home from './pages/Home';
import Product from './pages/Product';
import ProductsList from './pages/ProductsList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

import { Routes, Route, Navigate } from "react-router-dom"
import SharedLayout from './pages/SharedLayout';

const App = () => {
  const user = true;
  return (
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>} />
          <Route path='products' element={<ProductsList/>} />
          <Route path='products/:id' element={<Product/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='login' element={user ? <Navigate to="/"/> : <Login/>} />
          <Route path='register' element={user ? <Navigate to="/"/> : <Register/>}/>
        </Route>
        
        <Route path='*' element={<>404 Not Found</>} />
      </Routes>
  )
};

export default App
