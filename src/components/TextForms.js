import React, {useState} from "react";

export default function TextForms(props) {

    
    const chageUpCase = () => {
        // console.log("upper case button is clicked "+text);
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is changed to Upper case")
    }
    
    const chageLowCase = () => {
        const newText1 = text.toLowerCase();
        // console.log("changing into the lower case");
        setText(newText1);
        props.showAlert("Text is changed to Lower case")

    }
    
    const removeSpace = () => {
        const newText1 = text.split(/[ ]+/);
        // console.log("changing into the lower case");
        setText(newText1.join(" "));
        props.showAlert("All White-Spaces is removed")

    }
    
    const clear = () =>{
        const newText2 =("");
        setText(newText2);
        props.showAlert("All text is deleted")

    }
    
    const onChangeValue = (event) => {
        // console.log("the text is changed");
        setText(event.target.value);
    }
    
    const[text, setText] = useState("");

    return (
        <>
    <h3 className="h3 my-3" style = {{color : (props.mode === "dark") ? "white" :(props.mode==="primary")? "white" : "black"}}>This is a textUtil website</h3>
    <div className="form-floating">
  <textarea className="form-control my-2" style = {{ backgroundColor :( props.mode === "dark") ? "#3c3b3b" : ( props.mode === "primary") ? "#1f1f74" : "white", color : (props.mode === "dark") ? "white" :(props.mode==="primary")? "white" : "black"}} onChange={onChangeValue} value={text} id="floatingTextarea"></textarea>
  <label htmlFor="floatingTextarea" style = {{color : (props.mode === "dark") ? "white" :(props.mode==="primary")? "white" : "black"}} >Enter text here..</label>
</div>
<div className="btn my-2" style = {{color : (props.mode === "dark") ? "white" :(props.mode==="primary")? "white" : "black"}}>
<button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-1" onClick={chageUpCase}>Change to UpperCase</button>
<button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-1" onClick={chageLowCase}>Change to LowerCase</button>
<button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-1" onClick={removeSpace}>Remove whiteSpaces</button>
<button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-1" onClick={clear}>Clear</button>
</div>
<div className="div my-3" style = {{color : (props.mode === "dark") ? "white" :(props.mode==="primary")? "white" : "black"}}>
    <h4>Word counter</h4>
    <p><b>{text.split(/\s+/).filter((element) => {return element.length!==0}).length}</b> Words and <b>{text.length}</b> Charecters</p>
    <h3>Priview</h3>
    <p>{text.length>0 ? text : "Nothing to priview .."}</p>
</div>
  </>
  );
}
