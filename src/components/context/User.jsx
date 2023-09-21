import React from "react";
import { useContext } from "react";
import { UserContext } from "./Contex";

const User = () => {
  const data = useContext(UserContext);
  const { user, city, setUser, setCity } = data;

  const changeData = () => {
    setCity("jaipur");
    setUser("Aman");
  };

  return (
    <div>
      {/* Name : {user[0]} <br/>
     City : {user[1]} */}
      Name : {user} <br />
      City : {city} <br /> <br />
      <button onClick={changeData}>change Data</button>
    </div>
  );
};

export default User;
