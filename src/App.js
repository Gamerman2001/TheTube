import React from 'react';
import './App.scss';
import {HeaderNav} from './containers/HeaderNav/HeaderNav'
import {SideBar} from './containers/SideBar/SideBar'
console.log('testing ')
export function App() {
  return (
    <div >
      <HeaderNav />
      <SideBar />
    </div>
  );
}

export default App;
