import React from 'react'

export default function About(props) {
//    const [myStyle, setMyStyle] = useState({
//     color: 'black',
//     backgroundColor: 'white',
//    })
let myStyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
}

 
  return (
    <div className='container'>
        <h1 className='my-3' style={{color:props.mode === 'dark'?'white':'#042743'}}>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or sentence count.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free To Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils is a free character, words and sentence counter tool that provides instant count statistics for a given text. TextUtils 
                reports the number of words, characters and sentence count with an ability to tell you how much time will it take to read the whole text. 
                It also has a feature of converting text to speech. Thus it is suitable for writing text with word/character/sentence limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This software works in any web browsers such as Chrome, Firefox, Safari, Opera. It suits to count characters and words in Facebook, blogs, books,
                Word documents, pdf documents, Essays etc. 
            </div>
            </div>
        </div>
        </div>
       
        
    </div>
  )
}
