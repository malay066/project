import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Alert from './components/Alert';

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert= (massage,type)=>{
    setAlert({
      msg: massage,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggle= ()=>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor="#1b284c";
      showAlert("Dark mode enabled","success");
    }
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Dark mode disabled","success");
    }
  }
  return (
    <>
    <Navbar title="TextUtils" about="About" mode={mode} toggle={toggle}/>
    <Alert alert={alert}/>
    <Text mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
