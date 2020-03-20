import React from 'react';
import './App.scss';
import {HeaderNav} from './containers/HeaderNav/HeaderNav'
import {SideBar} from './containers/SideBar/SideBar'
import {Home} from './containers/Home/Home'
console.log('testing ')
export function App() {
  return (
    <div >
      <HeaderNav />
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
