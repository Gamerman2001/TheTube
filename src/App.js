import React from "react";
import "./App.scss";
// import {HeaderNav} from './containers/HeaderNav/HeaderNav'
// import {SideBar} from './containers/SideBar/SideBar'
import { AppLayout } from "./components/AppLayout/AppLayout";
import { Home } from "./containers/Home/Home";
import {Route, Switch} from 'react-router-dom'
import {Watch} from '../src/components/Watch/Watch'

export function App() {
  return (
    <div >
      <AppLayout >
        <Switch >
          <Route path='/watch' component={Watch} />
          <Route path='/' component={Home} />
        </Switch>
      </AppLayout>
    </div>
  );
}

export default App;
