import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleLowerClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleClearText = () => {
    // console.log("On change");
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to Clipboard!", "success");
  };
  const handleExtraSpaces=()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }
  const [text, setText] = useState("");
  // setText("new text");
  // console.log(useState('Enter text here2'));
  return (
    <>
      {" "}
      <div className="container" style={{color: props.mode==='dark'?'white':'#rgb(7 23 49)'}}>
        <h1> {props.heading} </h1>{" "}
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#475569':'white', color: props.mode==='dark'?'white':'#rgb(7 23 49)' }}
            id="mybox"
            rows="8"
          >
            {" "}
          </textarea>{" "}
        </div>{" "}
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          {" "}
          Convert to Uppercase{" "}
        </button>{" "}
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
          {" "}
          Convert to Lowercase{" "}
        </button>{" "}
        <button className="btn btn-primary mx-1" onClick={handleClearText}>
          {" "}
          Clear Text{" "}
        </button>{" "}
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          {" "}
          Copy Text{" "}
        </button>{" "}
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          {" "}
          Remove Extra Spaces{" "}
        </button>{" "}
      </div>{" "}
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#rgb(7 23 49)'}}>
        <h2> Your text summary </h2>{" "}
        <p>
          {" "}
          {text.split(" ").length}
          words and {text.length}
          characters{" "}
        </p>{" "}
        <p>
          {" "}
          {0.008 * text.split(" ").length}
          minutes read{" "}
        </p>{" "}
        <h2> Preview </h2> <p> {text.length>0 ?text :"Enter something in textbox above to previw it here"} </p>{" "}
      </div>{" "}
    </>
  );
}
