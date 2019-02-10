import React, { Component } from 'react';
// import './App.css';
// import {Button, Icon,Footer} from 'react-materialize';

const heroText = {
  textAlign: 'center',
  position: 'absolute',
  top: '10%',
  right: '10%',
  transform: 'translate(-50%, -50%)',
  color: '#282c34'
  };
const heroImage = {
  backgroundImage: 'url("https://drive.google.com/uc?export=view&id=15uT2sztOEQjG9jGnLZ8JQE_vv0komqi9")',
  backgroundColor: '#cccccc',
  height: '500px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position:' relative'
};

class Header extends Component {
  render() {
    return (
      <div>
      <header style = {heroImage} >
        <div style = {heroText}>
          <h1>ServoMotor</h1>
        </div>
      </header>;
      </div>

    );
  }
}

export default Header;
