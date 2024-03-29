import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] =useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  
  const toggleMode = () => {
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled", "success");
        // document.title = 'TextUtils - Dark Mode';
      //   setInterval(() => {
      //     document.title = "Welcome to TextUtils";
      //   },2000);
      //   setInterval(() => {
      //     document.title = "Install TextUtils Now";
      //   }, 1500);
     }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
        // document.title = 'TextUtils - Light Mode';


      }
  }
  return (
<>
<BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes>
          <Routes>
            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces, Text to Speech Converter"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>



</>
  );
}

export default App;
