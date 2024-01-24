import React, { useState } from "react";

export default function TextForm(props) {
  const HandleUpClick = () => {
    // console.log("Uppercase was clicked" + Text);
    let newText = Text.toUpperCase();
    props.showAlert("Converted to UpperCase","success");

    setText(newText);
  };
  const HandleLoClick = () => {
    // console.log("Uppercase was clicked" + Text);
    let newText = Text.toLowerCase();
    props.showAlert("Converted to LowerCase","success");


    setText(newText);
  };
  const HandleClearClick = (event) => {
    let newText = "";
    setText(event.target.value);
    props.showAlert("Cleared the text","success");

  };
  
  const HandleCopy = (event) => {
   var text = document.getElementById("myBox");
   text.select();
   text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied the text","success");

    
  };

  const HandleExtraSpaces = (event) => {
  let newText = Text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Removed extra Spaces","success");

     
   };

  const HandleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [Text, setText] = useState("Enter Texrt Here ");
  return (
    <>
      <div className="container" style={{ backgroundColor: props.mode === "dark" ? "#313840" : "white", color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            id="myBox"
            style={{ backgroundColor: props.mode === "dark" ? "#313840" : "white", color: props.mode === "dark" ? "white" : "black" }}
            rows="8"
            onChange={HandleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={HandleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-3   " onClick={HandleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-3   " onClick={HandleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-3   " onClick={HandleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-3   " onClick={HandleExtraSpaces}>
          Respace
        </button>
      </div>
            
      <div className="container my-4 " style={{ backgroundColor: props.mode === "dark" ? "#313840" : "white", color: props.mode === "dark" ? "white" : "black" }}  >
        <h2>Your Text Summary</h2>
        <p>
          {Text.split(" ").length} Words and {Text.length} Characters
        </p>
        <p>{0.008 * Text.split(" ").length} Mitues to Read</p>
        <h2>Preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
}
