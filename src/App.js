import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./components/header/HeaderComponent";
import Main from "./components/Main";
import NavigationBar from "./components/header/NavigationBar";
import Body from "./components/header/Body";
import LeftNavBar from "./components/LeftNavBar/LeftNavBar";

function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <Body />

      {/*<HeaderComponent />*/}
    </div>
  );
}

export default App;
