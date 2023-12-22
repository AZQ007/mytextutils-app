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
        document.getSelection().removeAllRanges();
        props.showAlert("Text is Copied!","success");

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces!","success");

    }

    const handleClearText = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }
    

    const [text, setText] = useState('');
   // setText("new text");
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={textToSpeech}>Text to Speech</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>




            
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.replace(/\s+/g, '').length} characters</p>          
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Total minutes to read</p>
            <p>Total number of sentences is {text.split(".").length-1}</p>
            <h2 my-3>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview!"}</p>
        </div>
        </>
  )
}
