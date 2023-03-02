import React,{useState} from "react";
import "./Todo.css"

function Todo(){
const[input,setInput]=useState("")
const[add,setAdd]=useState([]);


const handleClick=(e)=>{
  e.preventDefault();
const addValue={id:new Date().getTime().toString(),input}
setAdd([...add,addValue])
console.log(setAdd)
setInput("")
}
const handleRemove=()=>{
    setAdd([]);
}

  
const removeEle=(id)=>{
const myNewInput=add.filter((a)=>{return a.id !== id})
setAdd(myNewInput)
}
    return(
        
        <div >
        <div className="container">
        <h1 className="heading">Add Here</h1>
     
        <input type="text"
        className="inputBox"
        placeholder="input some text here"
        value={input}
        onChange={(e)=>setInput(e.target.value)} 
       
        />
         <button type="submit" onClick={handleClick} className="btn">Add</button><button onClick={handleRemove} className="removeAll">remove all</button>
         <div>
         {add.map((e)=><div><h3 className="textHeading">{e.input}<button onClick={()=>removeEle(e.id)} className="remove" >Delete</button></h3></div>)}
         </div>
         </div>

        </div>
    )
}
export default Todo;