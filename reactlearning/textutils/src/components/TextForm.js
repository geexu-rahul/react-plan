import React, {useState} from 'react'
export default function TextForm(props) {
    const [text, setText] = useState("Enter Text")
    const [textlength, setTextlength] = useState(0)
    const handleUppercase = () =>{
        setTextlength(0)
        setText(text.toUpperCase())
    }
    const handleLowercase = () =>{
        setTextlength(0)
        setText(text.toLowerCase())
    }
    const handleCapitalize = () =>{
        setTextlength(0)
        let z = text.charAt(0).toUpperCase() + text.slice(1)
        setText(z)
    }
    const handleLength = (e) =>{
        setTextlength(0)
        setTextlength(text.length)
    }

    const handleOnchange = (event) =>{
        setText(event.target.value)
    }

    const handleCleartext = () =>{
        setTextlength(0)
        setText("")
    }

    return (
    <div className='container mt-3'>
        <h2 style={{ color : props.mode=='light' ? 'black' : 'white' }} className='text-center'> { props.title} </h2>
        <h3 style={{ color : props.mode=='light' ? 'black' : 'white' }}> {text} </h3>
             { (textlength) > 0 ? <h3 > { textlength }</h3> : "" }
        <div className="mt-4 mb-3">
            <textarea onChange={handleOnchange} value={text} className="form-control" id="myBox" rows="6"></textarea>
            <p  style={{ color : props.mode=='light' ? 'black' : 'white' }} className='mt-3'> Total {text.split(" ").length} Words and { text.length } Characters  </p>
        </div>
        <div>
            <button onClick={handleUppercase} className='btn btn-primary btn-md m-2'> UPPER CASE </button>
            <button onClick={handleLowercase} className='btn btn-primary btn-md m-2'> lower case </button>
            <button onClick={handleCapitalize} className='btn btn-primary btn-md m-2'> Capitalize  </button>
            <button onClick={handleLength} className='btn btn-primary btn-md m-2'> Display Character Count  </button>
            <button onClick={handleCleartext} className='btn btn-primary btn-md m-2'> Clear  </button>
        
        </div>
    </div>
  )
}

TextForm.defaultProps = {
    title : "Enter The text"    
}
