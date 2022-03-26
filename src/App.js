import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggle = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#1b284c";
      showAlert("Dark mode enabled", "success");
    }
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode disabled", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About" mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/">
        <Text mode={mode} showAlert={showAlert} />
        </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
