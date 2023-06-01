import React, { useState } from 'react'

export default function TextForm(props) {


    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btnText, setBtnText] = useState("Enable dark mode")

    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({

    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'

    //         })
    //         setBtnText("Enable light mode")
    //     }
    //     else {
    //         setMyStyle({

    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable dark mode");
    //     }
    // }

    // for upper case 
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    // for lower case 
    const handleLoClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    // for copy text 
    // const handleCopy = () => {
    //     var text = document.getElementById("myBox");
    //     text.select();
    //     navigator.clipboard.writeText(text.value);
    // }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = "";
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new text"; // wrong way
    // setText("new text"); //correct way



    return (
        <>
            {/* <div style={myStyle}>  */}
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 >{props.heading} </h1>
                <div className="mb-3 ">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
                {/* <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button> */}
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p> {text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to to preview it here"}</p>
            </div>
            {/*  <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
            </div>*/}
            {/* </div> */}
        </>
    )
}
