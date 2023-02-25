import React,{ useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import Darkform from "./components/Darkform"

function App() {

const [mode , setMode] = useState("light");
const [text, setText] = useState("enable dark mode");
const [text1, setText1] = useState("enable blue bg-color");

const modeFun = () => {
    if(mode === "light") {
      setMode("dark");
      console.log("enable light mode")
      setText("enable light mode");
      document.body.style.backgroundColor= 'gray';
    }
    else {
      setMode ("light");
      setText("enable dark mode");
      document.body.style.backgroundColor= 'white';
    }
} 
const change1 = () => {
    if(mode === "light") {
      setMode("primary");
      setText1("enable light mode");
      document.body.style.backgroundColor= '#4747ff';
    }
    else {
      setMode ("light");
      setText1("enable blue bg-color");
      document.body.style.backgroundColor= 'white';
    }
} 
  return (
    <>
      <Navbar title="TextUtils" about="About US" textBtn={text} text1={text1} mode={mode} change1={change1} modeFun={modeFun}/>
      <div className="container">
            <Darkform /> 
            <TextForms mode={mode}/> 
      </div>
    </>
  );
}

export default App;
