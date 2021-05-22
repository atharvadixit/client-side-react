import './App.css';
import NavbarFile from './Components/HeaderFile'
import SpringBoot from './Components/SpringBoot';
import NodeExpress from './Components/NodeExpress'
import Home from './Components/Home'
import React from 'react';
import {BrowserRouter,
  Switch,
  Route,
  Redirect
  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavbarFile/>
      <Switch>
            <Route  path="/spring-boot" component={()=> <SpringBoot/>} />
            <Route  path="/node-express" component={()=> <NodeExpress/>} />
            <Route  path="/home" component={()=> <Home/>} />
            <Redirect to="/home"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
