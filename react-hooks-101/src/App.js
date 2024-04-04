import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const increment2 = () => {
    setCount((previousCount) => previousCount + 1);
  };
  const decrement2 = () => {
    setCount((previousCount) => previousCount - 1);
  };

  const reset = () => {
    setCount(0);
  };
  const x2 = () => {
    setCount(count * 2);
  };
  // const test = () => {
  //   if (count % 3 === 0) {
  //     setCount(count / 3);
  //   } else {
  //     return count;
  //   }
  // };
  const test = () => {
    setCount((previousCount) => {
      if (previousCount % 3 === 0) {
        return previousCount / 3;
      } else {
        return previousCount;
      }
    });
  };

  return (
    <React.Fragment>
      <div>count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={x2}>x2</button>
        <button onClick={test}>3の倍数の時だけ3で割る</button>
      </div>
    </React.Fragment>
  );
};

export default App;
