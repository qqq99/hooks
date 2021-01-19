import React, { Component } from "react";
export default class Effect2 extends React.Component {
  state = { time: "" };
  //对比两个effect发现：component是在initail render 之后执行，useEffect在initial render就会执行
  componentDidMount = () => {
    //setInterval第一个参数是方程，第二个参数是interval时间
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  };
  render() {
    return (
      <div>The class Effect2 componentDidMount time is :{this.state.time}</div>
    );
  }
}
