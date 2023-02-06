import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import logo from './assets/svg/logo.svg';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home'
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Article } from "./pages/Article";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <ChakraProvider>
      <Router>
        
        <header>
          
        </header>
      
        <Routes>
          <Route path='/' element={< Home />}></Route>
          <Route path='/register' element={< Register />}></Route>
          <Route path='/login' element={< Login />}></Route>
          <Route path='/article/:id' element={< Article />}></Route>
          <Route path='/cart' element={< Cart />}></Route>
        </Routes>
      </Router>

    </ChakraProvider>
  )
}

export default App;
