import React, {useState} from 'react'

export default function TextForm(props) {
  const handleOnChange = (event)=>{
    console.log("On change")
    setText(event.target.value)
  }
  const handleUpChange = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const[text , setText] = useState('Enter text here');
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="12"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpChange}>Convert to upper case</button>
    </div>
  )
}
