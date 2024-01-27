import React from 'react'
import './App.css'






// Your task is to explain why count value is not updated to 3 as expected


/*Here when you check the value of `count`. You will see that it is being pointed to an older value. But why ?
After updating the state, React will eventually re-render the component to reflect the new state. But this re-render doesn’t happen right away. It’s scheduled and managed by React's reconciliation process, which is why it seems asynchronous. So if you try to log the value of **`count`** right after calling **`setCount`**, you'll still see the old value, not the updated one. This is because the update to **`count`** hasn't been applied yet—it's scheduled to happen later. This process is known as batching. React batches multiple state updates for performance optimization*/



function App() {
  const [count, setCount] = React.useState(0);
  const [count1, setCount2] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
		console.log(count);
  };

  const handleClick2 = () => {
    setCount2(count1 + 1);
    console.log(count1);
  }

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
      <br />
      <br />
      <p>Button is clicked {count1} times</p>
      <button onClick={handleClick2}>Click Me</button>
    </div>
  );
}

export default App