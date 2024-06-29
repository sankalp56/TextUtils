import React ,{useState} from 'react'    // Write rfc to create react function base component 01/06/2024
import PropTypes from 'prop-types'    // write 'imt + Enter' to import PropTypes

import './TextForm.css'



export default function TextForm(props) {

    const [myStyle,setMyStyle]=useState({
        color: 'Black',
        backgroundColor: 'White'
      })

      const [btntext, setBtnText] = useState("Enable Dark Mode")  // This is a hook in react. It is used to change the value
    
      const toggleStyle = ()=>{
        if(myStyle.color === 'Black'){
          setMyStyle({
            color: 'White',
            // backgroundColor: 'Black'
            
          })
          document.body.style.backgroundColor = 'Grey';
          setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color: 'Black',
                backgroundColor: 'White',
                text:'bolder'
            })
            document.body.style.backgroundColor = 'White';
            setBtnText("Enable Dark Mode")
        }
      }

    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked");
         setText(text.toUpperCase());
    }

    const handleBelowClick = ()=>{
        // console.log("Uppercase was clicked");
          setText(text.toLowerCase());
     }

     const handleClearClick = ()=>{
        // console.log("Uppercase was clicked");
          setText("");
     }


     const speak = ()=>{
        let msg= new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        
     }


     const stopSpeaking = () => {
        window.speechSynthesis.cancel();
    }

    const captitalizeFirstLetter = () => {

       
    
        //  let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        // setText(newText);

        let sentences = text.split('. ');
    let newText = sentences.map(sentence => {
        return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
    }).join('. ');
    setText(newText);
    
    
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    
    const onChangeClick = (event)=>{
       // console.log("writing text in Textbox")
        setText(event.target.value)    // ye event.target.value se jo bhi value aayegi wo setText me set ho jayegi.
                                            //  matlab hum text area me likh payenge
    }


    
    const [text, setText] = useState('');  // This is a hook in react. It is used to change the value 
                                                      // of text. It is a function which takes an argument and return an array.

    // text="new Text"; // Wrong way to change the state
    // setText("new Text"); // Correct way to change the state
  return (
    <> 
    <div className='container height-100% width-' style={myStyle}>
        <div className='container'  >

    <div className="cont d-flex justify-content-between">
       <h1 className="my-3">{props.heading}</h1>
       <div className="form-check form-switch mx-3 ">
      <div className="mt-4">
      <input className="form-check-input custom-switch mx-15" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleStyle} />
      <label className="form-check-label labelText " for="flexSwitchCheckDefault">{btntext}</label>
      </div>
     </div>
       </div>
        <div className="mb-3">
        <textarea className="form-control text-area my-3" id="MyText" rows="12" value={text} onChange={onChangeClick}  ></textarea>
        </div>

        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>

        <button className="btn btn-primary mx-2 my-2" onClick={handleBelowClick}>Convert to Lowercase</button>

        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>

        <button type="submit" className="btn btn-primary mx-2 my-2" onClick={speak}>Read Loud</button>

        <button type="submit" className="btn btn-primary mx-2 my-2" onClick={stopSpeaking}>Stop Reading</button>

        <button type="submit" className="btn btn-primary mx-2 my-2" onClick={captitalizeFirstLetter}>Capatilize First Letter</button>

        <button type="submit" className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Handle Extra Space</button>
    </div>

    <div className="container my-4" >
        <h1 className='my-2'>Your Text Summary</h1>
        <p className='my-2'>{text.split(" ").length} words and {text.length} characters</p>

        <p className='mt-4 mb-5'>It will take {0.48 * text.split(" ").length} Seconds and {(0.48 * text.split(" ").length)/60} minutes to read. </p>
    </div>
</div>
    </>
  )
}

TextForm.propTypes = {
    heading:PropTypes.string.isRequired
}



TextForm.defaultProps = {
    heading:"Enter Text here"
}

