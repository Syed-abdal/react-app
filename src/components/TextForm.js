import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('enter new text here');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");  // Trigger alert
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");  // Trigger alert
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert("Text cleared", "success");  // Trigger alert
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");  // Trigger alert
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");  // Trigger alert
  };

  const handleTitleCase = () => {
    let newText = text.split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(newText);
    props.showAlert("Title case applied", "success");  // Trigger alert
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Remove Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleTitleCase}>Title Case</button>
      </div>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "You Enter Something To Preview Here"}</p>
      </div>
    </>
  );
}







// import React, {useState} from 'react'

// export default function TextForm(props) {
//     const handleUpClick = () =>{
//       // console.log("uppercase was clicked" + text);
//        let newText =  text.toUpperCase();
//        setText(newText)
//        props.showAlert("converted to uppercase", "success");
//     }
//     const handleLoClick = () => {
//       // console.log("lowercase was clicked" + text);
//        let newText =  text.toLowerCase();
//        setText(newText)
    
// }
// const handleClearClick = () => {
//    // console.log("lowercase was clicked" + text);
//     let newText =  '';
//     setText(newText)
 
// }
// const handleCopy = ()=>{
//     navigator.clipboard.writeText(text);
//     alert("Text copied to clipboard");
 
// }
// const handleExtraSpaces = () => {
//     let newText = text.split(/[ ]+/);
//     setText(newText.join("."))
// }
// const handleTitleCase = () => {
//    // Capitalize the first letter of each word
//    let newText = text.split(" ")
//        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//        .join(" ");
//    setText(newText);
// }

//     const handleOnChange = (event) => {
//        //console.log("on change");
//        setText(event.target.value);
//     }
//     const [text, setText] = useState('enter new text here');
//     /* const handleUpClick = () =>{
//        setText(text.toUpperCase())
//     }
//     const handleOnChange = () => {
//        setText(text.toLowerCase())
//        setText(event.target.value);
//     }
//     const [text, setText] = useState('enter text here 2'); */

//   return (
//    <>
//     <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
//         <h1>{props.heading}</h1>
//         <div className="mb-3">
//             <textarea className="form-control"  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8"></textarea>
//         </div>
//         <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
//         <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to lower case</button>
//         <button className="btn btn-primary mx-1" onClick={handleClearClick}>Remove Text</button>
//         <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
//         <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Even Spaces</button>
//         <button className="btn btn-primary mx-1" onClick={handleTitleCase}>Title Case</button>


//         </div>
//         <div className="container my-4"style={{color:props.mode==='dark'?'white':'#042743'}}>  
//          <h2>your text summary</h2>
//          <p>{text.split(" ").length} words and {text.length} characters</p>
//          <p>{0.008 * text.split(" ").length} Minutes read</p>
//          <h2>Preview</h2>
//          <p>{text.length>0?text:"YOU Enter Something To Preview Here "}</p>
//         </div>
//         </>
//   )
// }
