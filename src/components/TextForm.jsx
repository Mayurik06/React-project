import React, { useState } from 'react'



function TextForm(props) {
const [text,setText]=useState("")

function handleUpClick(){
  if(text.length>0){
    let newText=text.toUpperCase();
    setText(newText);
props.showAlert('Your text is converted into UPPERCASE','success');
  }else{
    props.showAlert('Something went wrong','warning'); 
  }
}
function handleLwClick(){
  if(text.length>0){
  let newText=text.toLowerCase();
  setText(newText);
  props.showAlert('Your text is converted into lowercase','success');
  }else{
    props.showAlert('Something went wrong','warning'); 
  }
}
function handleClClick(){
  if(text.length>0){
  setText("");
  props.showAlert('Your text is cleard','success');
  }else{
    props.showAlert('Something went wrong','warning'); 
  }
}
function handleCopy(){
  if(text.length>0){
let text=document.getElementById('myBox');
text.select();
navigator.clipboard.writeText(text.value);
props.showAlert('Your text is copies','success');
  }
  else{
    props.showAlert('Something went wrong','warning'); 
  }
}

function handleChange(e){
    setText(e.target.value);
}

  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode=='light'?'black':'white'}}></textarea>
</div> 
<button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UPPERCASE</button>
<button className="btn btn-primary mx-3" onClick={handleLwClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-3" onClick={handleClClick}>Clear Text</button>
<button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>



    </div>
    <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
<h2>Your text summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length} minutes to read</p>
<h2>Preview</h2>
<p>{text.length>0?text:'Enter something above textarea to preview it here'}</p>
    </div>
    </>
  )
}

export default TextForm
