import React, { Component } from 'react';
import emitter from './emitter'
import { Input } from 'antd';

class Test1 extends Component {

  render() {

    return (
      <div>
        输入内容：<Input onPressEnter={(e) => { emitter.emit('add', e.target.value) }} />
      </div>
    )

  }
}

export default Test1;