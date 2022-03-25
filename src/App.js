import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';

function App() {
  const[mode,setMode]=useState('light');
  const toggle= ()=>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor="#1b284c";
    }
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
    <Navbar title="TextUtils" about="About" mode={mode} toggle={toggle}/>
    <Text mode={mode}/>
    </>
  );
}

export default App;
