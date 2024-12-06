import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // console.log ("Uppercase was clicked"+ text);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text); 
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
}

const handleCapital = () =>{
  const arr = text.split(" ")
  for(var i =0;i<arr.length;i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }

  const newtet = arr.join(" ")
  setText(newtet)
}

const onAlternatingCase = () => {
  let newtext = ""
  for (let index = 0; index < text.length; index++) {
      if ((index % 2) === 0) {
          newtext += text[index].toLowerCase()
      }
      else {
          newtext += text[index].toUpperCase()
      }

  }
  setText(newtext)
}

const reverseText = () => {
  let newText = text.split('').reverse().join('');
  setText(newText);
}
  const [text, setText] = useState("type or paste your content here");

  // const handleUpperCase = () => {
  //   setText(text.toUpperCase());
  // };

  // const handleChange = (event) => {
  //   setText(event.target.value);
  // };

  return (
    <>
      <div className="container"style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(15 43 69)':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapital}>First Word Capitalized</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={onAlternatingCase}>Alternating Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={reverseText}>Reverse Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            

      </div>
      <div className="container my-3"style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>your text summary</h1>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
      </div>
    </>
  );
}
