import React from 'react';
import logo from './logo.svg';

import './App.css';
import {Icon, Navbar, NavItem} from "react-materialize";

function App() {
  return (
    <div className="App">
      <Navbar
          alignLinks="right"
          brand={<a className="brand-logo" href="#">Logo</a>}
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: undefined,
            onCloseStart: undefined,
            onOpenEnd: undefined,
            onOpenStart: undefined,
            outDuration: 200,
            preventScrolling: true
          }}
      >
        <NavItem href="">
          Getting started
        </NavItem>
        <NavItem href="components.html">
          Components
        </NavItem>
      </Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
