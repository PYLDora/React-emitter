import React, { Component } from 'react';
import emitter from './emitter'
class Test2 extends Component {

  constructor() {
    super()
    this.state = {
      value: ''
    }
  }
  componentDidMount() {
    this.eventEmitter = emitter.addListener("add", (x) => {
      this.setState({
        value: x
      })
    })
  }


  render() {

    return (
      <div>
        得到内容:{this.state.value}
      </div>
    )

  }
}

export default Test2;