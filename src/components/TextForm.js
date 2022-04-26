import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = () => {
        // select text and copy
        //  var newText = document.getElementById("myBox")
        //  newText.select();
        //  navigator.clipboard.writeText(newText.value)
        // To deselect the Text
        //  document.getSelection().removeAllRanges()

        // directly copy
        navigator.clipboard.writeText(text)

        props.showAlert("Copied to clipboard!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra space removed!", "success")
    }


    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <div className="mb-3">
                    <h1 className='mb-4 disabled={text.length === 0} '>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows={8} />
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert To Upper Case</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lower Case</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your Text Summary</h1>
                <p> <b> {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} </b> words and <b> {text.length} </b> characters</p>
                <p> Number of sentences <b> {text.split(".").length} </b> </p>
                <p> <b> {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} </b> minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
