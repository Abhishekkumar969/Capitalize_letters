import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }


    const [text, setText] = useState('');


    return (
        <>
            {/* <div style={myStyle}>  */}
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='my-4'>{props.heading} </h1>
                <div className="mb-3  ">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743',boxShadow:'2px 2px 6px black' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor:'black' ,border:'1px solid grey', boxShadow:'2px 2px 4px black'}} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor:'black' ,border:'1px solid grey', boxShadow:'2px 2px 4px black'}} onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor:'black' ,border:'1px solid grey', boxShadow:'2px 2px 4px black'}} onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p> {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
