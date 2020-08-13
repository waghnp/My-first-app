import React from 'react';
import logo from './logo.svg';
import {Navbar,NavabarBrand, NavbarBrand} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar dark color='success'>
            <div className='container'>
              <NavbarBrand href='/'>Welcome back</NavbarBrand>
            </div>
        </Navbar>
    </div>
  );
}

export default App;
