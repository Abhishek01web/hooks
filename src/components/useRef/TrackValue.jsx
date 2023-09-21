import React, { useState, useEffect, useRef } from "react";

const TrackValue = () => {
  const [state, setState] = useState("");
  const value = useRef("");

  useEffect(() => {
    value.current = state;
  }, [state]);

  return (
    <div>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <p>Current Value : {state}</p>
      <p>Previous Value: {value.current}</p>
    </div>
  );
};

export default TrackValue;
