import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log(text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase', 'success');
    }
    const handleLowClick = ()=>{
        // console.log(text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase', 'success');
    }
    const handleCopy = ()=>{
        let toCopy = document.getElementById('myBox');
        toCopy.select();
        navigator.clipboard.writeText(toCopy.value)
        props.showAlert('Copied to clipboard!', 'success');
    }
    const handleRevClick = ()=>{
        // console.log(text);
        let newText = '';
        for (let i = text.length - 1; i >= 0; i--) {
            newText += text[i];
        }
        setText(newText);
        props.showAlert('Your message is reversed', 'success');
    }
    let reverse = '';
    const handleOnChange = (event)=>{
        // console.log("changing the text");
        setText(event.target.value);
        for (let i = event.target.value.length - 1; i >= 0; i--) {
            reverse += event.target.value[i];
        }
        setReverseText(reverse);
    }
    const [text, setText] = useState('');
    const [reverseText, setReverseText] = useState('');
    // text = "nfn"; //not possible to change value of text. Actually its a state, we can't change state like this we have to use function
    // setText("klnsdsa");
    return (
        <>
        <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label">Example textarea</label>
            <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text} style={{
                backgroundColor: props.mode === 'light'?'white' : 'grey',
                color: props.mode === 'light'? 'black':'white'
            }}></textarea>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleRevClick}>Reverse your string</button>
        </div>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ")[text.split(" ").length-1] === "" ?text.split(" ").length-1:text.split(" ").length} words and {text.length} character</p>
            {/* <p>{text.split(" ").length} words and {text.length} character</p> */}
            <p>{0.008 * (text.split(" ").length-1)} minutes to read</p>
            <h2>Preview</h2>
            <p>{reverseText}</p>
        </div>
        </>
    )
}
