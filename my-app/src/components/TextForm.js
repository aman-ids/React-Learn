import React, {useState} from 'react'

export default function TextForm(props) {
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const handleUpChange = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upper case", "success");
  }
  const handleLoChange = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lower case", "success");
  }
  const handleClear = ()=>{
    let newText = "";
    setText(newText)
  }
  const[text , setText] = useState('');
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpChange}>Convert to upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLoChange}>Convert to lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
      </div>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </>
  )
}
