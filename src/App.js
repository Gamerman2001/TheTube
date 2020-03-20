import React from "react";
import "./App.scss";
// import {HeaderNav} from './containers/HeaderNav/HeaderNav'
// import {SideBar} from './containers/SideBar/SideBar'
import { AppLayout } from "./components/AppLayout/AppLayout";
import { Home } from "./containers/Home/Home";

export function App() {
  return (
    <div>
      <AppLayout>
        <Home />
      </AppLayout>
    </div>
  );
}

export default App;
