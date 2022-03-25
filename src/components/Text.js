import React, {useState} from 'react'

export default function Text() {
    const [text, setText] = useState("");
    const handleUp= ()=>{
        const upCase= text.toUpperCase();
        setText(upCase); 
    }
    const handleLow= ()=>{
        const upCase= text.toLowerCase();
        setText(upCase); 
    }
    const handleChange= (event)=>{
        setText(event.target.value);
    }
    return (
        <div className='container my-2'>
            <h1>Enter the Text</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleChange} id="exampleFormControlTextarea1" value={text} rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-1" onClick={handleUp}>convert to uppercase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleLow}>convert to lowercase</button>
            <div className='container my-2'>
                <p>Words: {parseInt(text.split(' ').length) - parseInt(1)}</p>
            </div>
        </div>
    )
}
