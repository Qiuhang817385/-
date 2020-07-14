import React, { Component, createRef } from 'react'
import './BackForm.scss'
export default class BankForm extends Component {
  constructor(props) {
    super(props);
    this.spin = createRef();
    this.state = {
      arr: []
    }
  }
  componentDidMount () {
    this.setState({
      arr: this.generaterCirclePath(3, 1)
    })
  }
  /**
  * 生成n维环形坐标
  * @param {number} n 维度
  * @param {number} cell 单位坐标长度
  */
  generaterCirclePath = (n, cell) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push([i * cell, 0])
    }
    for (let i = 0; i < n - 1; i++) {
      arr.push([(n - 1) * cell, (i + 1) * cell]);
    }
    for (let i = 0; i < n - 1; i++) {
      arr.push([(n - i - 2) * cell, (n - 1) * cell])
    }
    for (let i = 0; i < n - 2; i++) {
      arr.push([0, (n - i - 2) * cell]);
    }
    return arr;
  }
  // 防抖函数,避免频繁点击执行多次函数
  debounce = (fn, interval = 300) => {
    let timeout = null;
    return function () {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        fn.apply(this, ...arguments)
      }, interval)
    }
  }
  run = (el, path, speed = 60, n = 1, i = 0, len = path.length, random = Math.floor(Math.random() * len)) => {
    console.log('ok');
    // 怎么最后停在一个位置????
    setTimeout(() => {
      // 这里不懂
      if (n > 0) {
        if (n === 1) {
          len = random
        }
        if (len <= i) {
          i = n === i ? len : 0;
          n--;
          speed += (300 - speed) / n
        }
        console.log(path[i][0], path[i][1])
        el.style.transform = `translate(${path[i][0] * 100}px, ${path[i][1] * 100}px)`
        // 这是干嘛的
        this.run(el, path, speed, n, ++i, len, random)
      }
    }, 300)
  }

  handleClick = () => {
    this.debounce(
      this.run(this.spin.current, this.state.arr, 60, 1, 0, this.state.arr.length)
    )
  }


  render () {
    return (
      <>
        <div className="bankForm">
          <div className="box">
            <div className="item">我爱你</div>
            <div className="item">你爱我</div>
            <div className="item">我不爱你</div>
            <div className="item">你爱我</div>
            <div className="item start" onClick={this.handleClick}>开始</div>
            <div className="item">你爱我</div>
            <div className="item">再见</div>
            <div className="item">谢谢惠顾</div>
            <div className="item">你爱我</div>
            <div ref={this.spin} className="spin"></div>
          </div>
        </div>
      </>
    )
  }
}
