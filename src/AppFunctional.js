import React, { useState, useEffect } from "react";

const AppFunctional = (props) => {
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState("");

  useEffect(() => {
    console.log("this is useEffect statring");

    return () => {
      console.log("unmounting");
    };
  }, []);

  console.log("props", props);

  const { age } = props;

  return (
    <div>
      <h2>this is app funciotnal component</h2>
      <h5>Name : {props.name}</h5>
      <h5>Class : {props.class}</h5>
      <h5>Age : {age}</h5>
      <button onClick={props.sampleFunction}>Click</button>
      {/* <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
      </form> */}
    </div>
  );
};

export default AppFunctional;
