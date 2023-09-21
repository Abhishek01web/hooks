import React, { useReducer, useState } from "react";
import {reducer} from './reducer';

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { age: 20 });
  const [value, setValue] = useState("increment");

  return (
    <div>
      <p>{`age : ${state.age}`}</p>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="increment">increment</option>
        <option value="decrement">decrement</option>
      </select><br/>    
      <button
        onClick={() => {
          dispatch({ type: value });
        }}
      >
        {value}
      </button>
    </div>
  );
};

export default UseReducer;
