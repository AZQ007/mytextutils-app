import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
       // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }
    const handleLoClick = (event) => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase!","success");

    }
    const textToSpeech = (event) => {
        let newtext = text;
        const value = new SpeechSynthesisUtterance(newtext);
        //setText(newtext);
        window.speechSynthesis.speak(value);
        props.showAlert("Converting text to speech!","success");

    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is Copied!","success");

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces!","success");

    }
    

    const [text, setText] = useState('');
   // setText("new text");
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={textToSpeech}>Text to Speech</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>




            
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>            <p>{0.008 * text.split(" ").length} Total minutes to read</p>
            <p>Total number of sentences is {text.split(".").length-1}</p>
            <h2 my-3>Preview</h2>
            <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>
        </div>
        </>
  )
}
