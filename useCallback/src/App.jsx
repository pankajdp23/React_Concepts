
// With useCallback

import { memo, useState,useCallback } from "react";

const Numbers = memo(({ nums, addRandom }) => {
  console.log("Numbers rendered");

  return (
    <div>
      <ul>
        {nums.map((num, i) => (
          <li key={i}>{num}</li>
        ))}
      </ul>
      <button onClick={addRandom}>Add random</button>
    </div>
  );
});

export default function App() {
  const [nums, setNums] = useState([]);
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };


/*
Without useCallack Issue:
 const addRandom = () => {
    let randNum = parseInt(Math.random() * 1000, 10);
    setNums([...nums, randNum]);
  };
*/

  const addRandom = useCallback(() => {
    let randNum = parseInt(Math.random() * 1000, 10);
    setNums([...nums, randNum]);
  }, [nums]);

  return (
    <div>
      <div>
        Count: {count} &nbsp;
        <button onClick={increaseCounter}>+</button>
      </div>
      <hr />
      <Numbers nums={nums} addRandom={addRandom} />
    </div>
  );
}
