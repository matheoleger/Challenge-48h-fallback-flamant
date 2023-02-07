import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import "./App.css"
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
          <body>
          <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#about">About</a>

            <div className="search-container">
              <form action="">
                  <input type="text" placeholder="Search.." name="search" autoComplete='off'/>
                  <button type="submit"><i className="fa fa-search"></i></button>
                  
              </form>
            </div>
          </div>
          </body>
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
