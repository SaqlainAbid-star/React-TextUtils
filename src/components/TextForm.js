import React,{useState} from 'react'


export default function TextForm(props) {
    const [text,setText] = useState("")

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const handleUpClick=()=>{
       let newText = text.toUpperCase();
       setText(newText)
       props.showAlert("Converted to uppercase!","success")
    }

    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
       props.showAlert("Converted to lowercase!","success")
     }

     const handleCopy = () =>{
         var newText = document.getElementById("myBox")
         newText.select();
         navigator.clipboard.writeText(newText.value)
       props.showAlert("Copied to clipboard!","success")
     }

     const handleExtraSpaces = () =>{
         let newText = text.split(/[ ]+/)
         setText(newText.join(" "))
       props.showAlert("Extra space removed!","success")
     }

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}} >
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows={8} />
                <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert To Upper Case</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lower Case</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your Text Summary</h1>
            <p> <b> {text.split(" ").length} </b> words and <b> {text.length} </b> characters</p>
            <p> Number of sentences <b> {text.split(".").length} </b> </p>
            <p> <b> {0.008 * text.split(" ").length} </b> minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length?text:"Enter something to preview it here"}</p>
        </div>
        </>
    )
}
