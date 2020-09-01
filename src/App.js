import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar,NavabarBrand, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      dishes:DISHES
    }
  }
  render(){
    return (
      <div>
          <Navbar dark color='success'>
              <div className='container'>
                <NavbarBrand href='/'> Restaurant</NavbarBrand>
              </div>
          </Navbar>
          <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
