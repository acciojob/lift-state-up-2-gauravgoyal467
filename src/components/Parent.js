import React,{useState} from "react";
import Child from "./Child"

const Parent = () => {
  const [inputValue,setInputValue]=useState("");

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <div>{inputValue}</div>
      <Child setInputValue={setInputValue}/>
    </div>
  )
}

export default Parent
