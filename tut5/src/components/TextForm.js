import React ,{useState} from 'react'


export default function TextForm(props) {
    const HandleUpClick =()=>{
        console.log("Uppercase was clicked")
    }  
    const HandleOnChange =()=>{
        console.log("On Change")
    } 
    const [Text, setText] = useState('Enter Texrt Here ');
  return (
    <div>
        <h1>{props.heading} </h1>
       <div className="mb-3">
  <textarea className="form-control" value={Text} id="myBox" rows="8" onChange={HandleOnChange}></textarea>
</div>
<button className="btn btn-primary" onClick={HandleUpClick}>Convert To Uppercase</button>
    </div>
  )
}
