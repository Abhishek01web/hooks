import { useState, useEffect, createContext } from "react";
import User from "./User";

export const UserContext = createContext();

const Contex = () => {
  const [user, setUser] = useState("Jesse Hall");
  const [city, setCity] = useState("London");

  useEffect(() => {
    if (user === "Aman") {
      setTimeout(() => {
        setCity("Dausa");
      }, 1000);
    }
  }, [user]);

  //   const data = [user, city];
  const data = { user, city, setUser, setCity };
  console.log(data);

  return (
    <UserContext.Provider value={data}>
      <h1>{`Hello ${user}!`}</h1>
      <p>{`City : ${city}`}</p>
      <User />
    </UserContext.Provider>
  );
};

export default Contex;
