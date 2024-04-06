import React,{useState} from 'react';
export default function TextForm(props)
{
    const [text, setText] = useState('Enter Text Here');
    const handleUpClick = () => {
        // console.log("UpperCase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success")
    }
    
    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("converted to lowercase","success")
    }
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value)
        
    }
    const handleUndo = (event) => {
        text.length = text.length - 1;
        setText(event.target.value)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.innerHTML == "Speak") {
            toogle.innerHTML = "Stop"
        }
        // if (toogle.innerHTML == "Stop") {
        //     toogle.innerHTML = "Speak"
        // }
        
        else {
            toogle.innerHTML = "Stop"
            if (toogle.innerHTML = "Stop"){
                window.speechSynthesis.cancel()
                toogle.innerHTML = "Speak"
            }
        }
        props.showAlert("Speaking","success")
    }

    return (
      <>
      <div className='container' style={{color:props.mode==='dark'?'white':'#001e49'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className='form-control' id='myBox' rows="10" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#001e49'}}></textarea>
          </div>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-5' onClick={handleLoClick}>Convert to lower case</button> 
                <button disabled={text.length===0} type="submit" onClick={speak}  className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
      </div>
            <div className='Container my-3' style={{color:props.mode==='dark'?'white':'#001e49'}}>
                <h2>Text summary</h2>
                <p>{text.split(" ").filter((element) => {
                    return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").filter((element) => {
                    return element.length !== 0}).length} minutes will be taken to read </p>
                <h3>Preview</h3>
                <p>{text}</p>

                
                
        </div>
      </>
  )
 }

// import React,{useState} from 'react'

// export default function TextForm(props) {
//     const [text, setText] = useState("enter the text here")
//     const onChange = (event) => {
//         setText(event.target.value);
//     }
//     const onClick = () => {
//         setText(text.toUpperCase());
//     }
//   return (
//       <div>
//           <h1>{props.heading}</h1>
//               <div className="mb-3">
//                   <textarea className="form-control" id="myBox" rows="10" value={text} onChange={onChange}></textarea>
//               </div>
//               <button className='btn btn-primary' onClick={onClick}>To UpperCase</button>
      
//     </div>
//   )
// }

