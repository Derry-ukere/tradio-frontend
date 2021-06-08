import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Demo from './containers/demo/Hello';
import HomeScreen from './components/layout/HomeScreen/index';
import Dashboard from './components/layout/ClientScreen/index';



function App() {     
  return ( 
    <BrowserRouter>
      <Switch>
        <Route path = '/' exact component = {HomeScreen}/>
        <Route>
          <Dashboard>
            <Switch>
              <Route path = '/test' exact component = {Demo}/>
              {/* <Route path = '/profile' exact component = {HomeScreen}/> */}
            </Switch>
          </Dashboard>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}    
  
export default App; 



