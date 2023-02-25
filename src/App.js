import { Routes, Route } from "react-router-dom"
import React,{ useState } from "react";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import Darkform from "./components/Darkform";
import "./App.css";
import Alert from "./components/Alert";

function App() {

const [mode , setMode] = useState("light");
const [text, setText] = useState("enable dark mode");
const [text1, setText1] = useState("enable blue bg-color");
const [alert, setAlert] = useState(null);

const showAlert = (message) => {
    setAlert ({
      msg : message
    })
    setTimeout(() => {
      setAlert (null)
    }, 1500);
}

const modeFun = () => {
    if(mode === "light") {
      setMode("dark");
      // console.log("enable light mode")
      setText("enable light mode");
      document.body.style.backgroundColor= '#3c3b3b';
      showAlert("Dark mode enable");
    }
    else {
      setMode ("light");
      setText("enable dark mode");
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode enable");
    }
} 
const change1 = () => {
    if(mode === "light") {
      setMode("primary");
      setText1("enable light mode");
      document.body.style.backgroundColor= '#1f1f74';
      showAlert("Primary background enable");
    }
    else {
      setMode ("light");
      setText1("enable blue bg-color");
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode enable");
    }
} 
  return (
    <>
      <Navbar title="TextUtils" about="AboutTextUtil" textBtn={text} text1={text1} mode={mode} change1={change1} modeFun={modeFun}/>
      <Alert alert={alert}/>
      <div className="container">
            {/* <Darkform /> 
            <TextForms mode={mode}/>  */}
        <Routes>
          <Route exact path="/" element={ <TextForms showAlert={showAlert} mode={mode}/> } />
          <Route exact path="about" element={ <Darkform/> } />
        </Routes>
      </div>
    </>
  );
}

export default App;
