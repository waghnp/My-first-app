import React from 'react';
import logo from './logo.svg';
import {Navbar,NavabarBrand, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

function App() {
  return (
    <div>
        <Navbar dark color='success'>
            <div className='container'>
              <NavbarBrand href='/'>Welcome back</NavbarBrand>
            </div>
        </Navbar>
        <Menu/>
    </div>
  );
}

export default App;
