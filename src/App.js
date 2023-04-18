// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom"
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(44, 23, 23)'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = '#fff'
    }
  }
  const [myAlert, mySetAlert] = useState(null)
  const alertFunc = (message, type) => {
    mySetAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      mySetAlert(null)
    }, 1500);
  }
  return (
    <>
      <Router>
        <Navbar title="TextManipulator" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={myAlert} />
        {/* <Navbar /> */}
        <div className='container my-3'>
          <Switch>
            <Route exact path="/About">
              <About mode={mode} />
            </Route>
            <Route exact path="/" >
              <TextForm heading="Enter text below" mode={mode} alertFunc={alertFunc} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>

  );
}

export default App;
