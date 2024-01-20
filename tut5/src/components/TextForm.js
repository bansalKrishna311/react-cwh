import React, { useState } from "react"; 

export default function TextForm(props) {
  const HandleUpClick = () => {
    // console.log("Uppercase was clicked" + Text); 
    let newText = Text.toUpperCase();

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
      <button className="btn btn-primary" onClick={HandleUpClick}>
        Convert To Uppercase
      </button>
    </div>
    <div className="container my-4">
        <h1>Your Text Summary</h1>
        <p>{Text.split(" ").length} Words and {Text.length} Characters</p>
    </div>
    </>
  );
}
