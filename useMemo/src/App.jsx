import { useMemo, useState } from "react";

export default function App() {
  const [nums, setNums] = useState([]);
  const [count, setCount] = useState(1);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const addRandom = () => {
    let randNum = parseInt(Math.random() * 1000, 10);
    setNums([...nums, randNum]);
  };

  // Without useMemo issue:
  // const magicNum = calculateMagicNumber(count);

  //Using useMemo and fixing the issue
  const magicNum = useMemo(() => calculateMagicNumber(count), [count]);

  return (
    <div>
      <div>
        Counter: {count} | Magic number: {magicNum} &nbsp;
        <button onClick={increaseCounter}>+</button>
      </div>
      <hr />
      <div>
        <ul>
          {nums.map((num, i) => (
            <li key={i}>{num}</li>
          ))}
        </ul>
        <button onClick={addRandom}>Add random</button>
      </div>
    </div>
  );
}

function calculateMagicNumber(n) {
  console.log("Costly calculation triggered.");
  let num = 1;
  for (let i = 0; i < n + 1000000000; i++) {
    num += 123000;
  }
  return parseInt(num - num * 0.22, 10);
}
