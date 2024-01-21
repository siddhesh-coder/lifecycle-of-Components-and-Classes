import { useEffect, useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  console.log("1");
  function handleChange() {
    setCount((count += 1));
  }
  function handleChange2() {
    setCount((count -= 1));
  }
  // Merge of componentDidMount and componentDidUpdate
  // useEffect(() => {
  //   console.log("This is mounted or update");

  // Equivalent of componentDidMount
  // useEffect(() => {
  //   console.log("This is mounted only not updated.");
  // },[]);

  // Merge of componentDidMount and componentDidUpdate but only for given dependency
  // useEffect(() => {
  //   console.log("This is mounted or count state updated"+count);
  // }, [count]);

  // Equivalent of componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("This is unmounted");
    };
  }, []);

  return (
    <>
      {console.log("render")}
      <p>Counter : {count}</p>
      <button onClick={handleChange}>increment count</button>
      <button onClick={handleChange2}>decrement count</button>
    </>
  );
}

export default Counter;
