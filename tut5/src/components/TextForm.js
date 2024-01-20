import React, { useState } from "react"; 

export default function TextForm(props) {
  const HandleUpClick = () => {
    // console.log("Uppercase was clicked" + Text); 
    let newText = Text.toUpperCase();

    setText(newText);
  };
  const HandleLoClick = () => {
    // console.log("Uppercase was clicked" + Text); 
    let newText = Text.toLowerCase();

    setText(newText);
  };
  const HandleOnChange = (event) => {
    console.log("On Change");
 setText(event.target.value );
  };
  const [Text, setText] = useState("Enter Texrt Here ");
  return (
    <>
    <div className="container">
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={Text}
          id="myBox"
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
    </div>
    <div className="container my-4">
        <h2>Your Text Summary</h2>
        <p>{Text.split(" ").length} Words and {Text.length} Characters</p>
        <p>{0.008 * Text.split(" ").length} Mitues to Read</p>
        <h2>Preview</h2>
        <p>{Text}</p>
    </div>
    </>
  );
}
