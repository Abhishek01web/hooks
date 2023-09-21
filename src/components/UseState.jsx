import { useState } from "react";
import ReactDOM from "react-dom/client";

const UseState = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const [person, setPerson] = useState({
    name: "Abhishek Chauhan",
    city: "jaipur",
    work: "React Developer"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  const addSkill = () => {
    setPerson(perState => {
        return {
            ...perState, work: "js developer", skill: "React js"
        }
    })
  }

  return (
    <>
      {/* <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button> */}

      <div>
        <h1>Name : {person.name}</h1>
        <p>City : {person.city} <br /> Profesion : {person.work} <br /> skills : {person.skill}</p>
        <button onClick={addSkill}>add skill</button>
      </div>
    </>
  )
}

export default UseState;