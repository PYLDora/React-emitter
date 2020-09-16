import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Test1 from './test1.js';
import Test2 from './test2.js';

class Home extends Component {

  render() {

    return (
      <>
        <Test1 />
        <Test2 />
      </>
    )

  }
}

export default Home;
