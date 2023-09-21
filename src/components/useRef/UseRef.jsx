import React, { useState, useEffect, useRef } from "react";

const UseRef = () => {
  const [stateCount, setStateCount] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
        <span>{count.current}</span>
      <input type="text" placeholder="change for render count" value={stateCount} onChange={(e) => setStateCount(e.target.value)}/>
    </div>
  );
};

export default UseRef;
