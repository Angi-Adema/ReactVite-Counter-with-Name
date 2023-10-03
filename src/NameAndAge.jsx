import { useState, useEffect } from "react";

export function NameAndAge() {
  // const [array, setArray] = useState([]);
  const [name, setName] = useState("");
  let [age, setAge] = useState(0);

  useEffect(() => {
    console.log("Age was changed", age);
  }, [age]);

  function incrementAge() {
    age = age + 1;
    setAge(age);
  }

  function decrementAge() {
    age = age - 1;
    setAge(age);
  }

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <br />
      <br />
      <div>
        <button onClick={incrementAge}>+</button>
        {age}
        <button onClick={decrementAge}>-</button>
      </div>
      <br />
      <br />
      <h1>
        My name is {name} and I am {age} years old.
      </h1>
    </div>
  );
}
