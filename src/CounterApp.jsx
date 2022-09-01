import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleOperation = (e, operation) => {
    switch (operation) {
      case "add":
        return setCounter((c) => c + 1);
      case "decrease":
        return setCounter((c) => c - 1);
      case "reset":
        return setCounter(value);
      default:
        return;
    }
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={(e) => handleOperation(e, "add")}>+1</button>
      <button onClick={(e) => handleOperation(e, "decrease")}>-1</button>
      <button onClick={(e) => handleOperation(e, "reset")}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
