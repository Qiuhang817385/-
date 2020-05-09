import React, { useState, useRef, useEffect } from "react";

const Register = (props) => {
  const [count, setCount] = useState(0);
  // const countRef = useRef(count);
  // const countRef = useRef();
  let a;

  // useEffect(() => {
  //   countRef.current = count;
  // });

  const changeHandlerCount = () => {
    // countRef.current = count + 1
    a = count + 1
    setCount(a);
    console.log(a)
  };
  const show = () => {

  }

  return (
    <div>
      {count}
      <button onClick={changeHandlerCount}>更新state</button>
    </div>
  );
};
// 解决了this的问题，还有生命周期的问题，组件状态复用问题
// 模拟componentdidupdate
export default Register;
