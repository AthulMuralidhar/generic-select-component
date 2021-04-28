import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Console } from 'node:console';

// types
type Option = {
  value: string
  
}


// logic
const Select = (props) => {
  const handleOnChange(e){
    props.onChange(e.currentSelect.value)
  }

  return (
    <select value={props.value} onChange={handleOnChange}>
      {props.options.map (option =>(
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      )}
    </select>
  )
}

function App() {
  const selects = [
    { value: "es3", label: "ECMAScript 3" },
    { value: "es5", label: "ECMAScript 5" },
    { value: "es2015", label: "ECMAScript 2015" },
    { value: "es2016", label: "ECMAScript 2016" },
    { value: "es2017", label: "ECMAScript 2017" },
    { value: "es2018", label: "ECMAScript 2018" },
    { value: "es2019", label: "ECMAScript 2019" }
  ]

  const [select, setSelect] = useState("es2019")
  return <select></select>
}

export default App;
