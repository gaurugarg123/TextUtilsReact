import React, {useState} from 'react'


export default function Text(props) {
    const [text, setText] = useState('');
    // text = "new text"; // wrong way to set state
    // setText( "new text"); // right way to set state
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLowClick = () =>{
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleClearClick = () =>{
        let newText = ''
        // console.log("lickr");
        setText(newText);
        props.showAlert("Clear", "success")
    }
    const handleCopyText = () =>{
        let copyText = document.getElementById("myBox")
        copyText.select();
        navigator.clipboard.writeText(copyText.value)
        props.showAlert("Text Copied", "success")
    }
    const handleClearExtraSpaces = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Clear Extra Spaces", "success")
    }
    const handleOnChange = (event) =>{
        // console.log("HandleONChange");
        setText(event.target.value)
    }
    return (
        <>
        <div className='container' style={{color: props.mode === 'light'?'black': 'white'}}>
            <h1>{props.title}</h1>
            <div className ="mb-3 my-3">
                <textarea className="form-control" id="myBox" value = {text} style={{backgroundColor: props.mode === 'light'?'white': 'black', color:  props.mode === 'light'?'black': 'white'}} onChange={handleOnChange}rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearExtraSpaces}>Clear Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light'?'black': 'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length}  Words and {text.length} Characters</p>
            <b><p>{0.008 * text.split(" ").length} Minutes read</p></b>
            <h2>Preview</h2>
            <p>{text.length>0 ? text:"Enter Something in the TextBox to preview it here"}</p>
        </div>
        </>
        
    )
}
