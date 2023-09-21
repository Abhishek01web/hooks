import React, { useState, useEffect } from 'react'

const UseEffect = () => {
    const [second, setSecond] = useState(0);
    const [minit, setMinit] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setSecond((second) => second + 1);
        },
        1000);
    }, []);

    useEffect(() => {
        setInterval(() => {
            setMinit((minit) => {
                return (
                    minit = minit + 1
                )
        });
        }, 6000);
        }, [])

  return (
    <div>
      <h1>
        second : {second} <br />
        minit : {minit}
      </h1>
    </div>
  )
}

export default UseEffect;
