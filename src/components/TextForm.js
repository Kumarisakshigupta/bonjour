//import React from 'react'
import React, {useState} from 'react'


export default function TextForm(props) {
  const submitClickuc = () =>{
    //console.log("Your form has been submitted " + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase","Success");
  }

  const submitClicklc = () =>{
    //console.log("Your form has been submitted " + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase","Success");
  }
  const submitClickrv = () =>{
    //console.log("Your form has been submitted " + text);
    let newtext = text.split(" ").reverse().join(" ");
    setText(newtext);
    props.showAlert("Text reversed","Success");
  }

  const submitClickhandcopy = () =>{
    //console.log("Your form has been submitted " + text);
    let newtext = document.getElementById("hola")
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
    props.showAlert("Text copied to clipboard","Success");
  }

  const submitClickextraspaces = () =>{
    //console.log("Your form has been submitted " + text);
    let newtext = text.split(/[ ]+/).join(" ");
    setText(newtext);
  }
  const submitClickcleartxt = () =>{
    //console.log("Your form has been submitted " + text);
    let newtext = document.getElementById("hola")
    newtext.value ='';
  }
  const handleonChange = (event) =>{
    console.log("on change of value");
    setText(event.target.value);
  }

  const [text,setText] = useState('');
  return (
    <>
  <div >
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label" style={{color:props.mode ==='light'?'black':'white'}}>{props.heading}</label>
        <input type="email" className="form-control" id="exampleInputEmail1" style={{backgroundColor:props.mode ==='light'?'white':'grey'}} aria-describedby="emailHelp"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label" style={{color:props.mode ==='light'?'black':'white'}}>Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" style={{backgroundColor:props.mode ==='light'?'white':'grey'}} />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" style={{color:props.mode ==='light'?'black':'white'}} htmlFor="exampleCheck1" >Check Please</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>  
  </div>
  <br></br>
  <br></br>
  <div className="mb-3" style={{color:props.mode ==='light'?'black':'white'}}>
    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1><b>Let's convert Lowercase to Uppercase...</b></h1></label>
    <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode ==='light'?'white':'grey', color:props.mode ==='light'?'black':'white'}} id="hola" rows="8"></textarea>
    <br></br>
    <button type="submit" className="btn btn-primary mx-2" onClick={submitClickuc}>Convert Uppercase</button>
    <button type="submit" className="btn btn-primary mx-2" onClick={submitClicklc}>Convert Lowercase</button>
    <button type="submit" className="btn btn-primary mx-2" onClick={submitClickrv}>Reverse Text</button>
    <button type="submit" className="btn btn-primary mx-2" onClick={submitClickhandcopy}>Copy Text</button>
    <button type="submit" className="btn btn-primary mx-2" onClick={submitClickextraspaces}>Extra Spaces in Text</button>
    <button type="submit" className="btn btn-primary mx-2" onClick={submitClickcleartxt}>Clear Text</button>
  </div>
  <br></br>
  <br></br>
  <div style={{color:props.mode ==='light'?'black':'white'}}>
    <h2><b>Your text contains...</b></h2>
    <p>{text.split(' ').length -1} words and {text.length} characters</p>
    <p>{0.008 * (text.split(' ').length -1)} minutes to read {text.split(' ').length -1} words</p>
    <p>{text.split(/[aeiou]+/gi).length -1} vowels</p>
    <h3>Preview...</h3>
    <p>{text.length>0?text:"Enter Something to preview..."}</p>
  </div>
</>
  )
}
