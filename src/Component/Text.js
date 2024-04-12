import React,{useState}from 'react'

export default function Text(props) {
    const upper=()=>{
        console.log("convert to upper ");
        let newText = text.toUpperCase();
        settext(newText);
    }
    const change=(event)=>{
        console.log("con")
        settext(event.target.value);
    }
    const[text,settext]=useState()

  return (
    <>
    <div className="container mb-3" style={{color:props.mode==='white'?'black':'white'}}>
  <h1>{props.hading}</h1>
  <textarea className="form-control" value={text} onChange={change} style={{backgroundColor:props.mode==="white"?'white':'#031526'}} id="exampleFormControlTextarea1" rows="8"></textarea>
  <button type="button" className="btn btn-warning" onClick={upper}>Warning</button>
</div>
</>
  )
}
