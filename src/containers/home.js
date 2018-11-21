/*
   Home 主页
*/
import React, { Component } from 'react';
import {Data} from '../config/data';

class Home extends Component {
   render() {
      return (
        <div>
          总单词数量：{Data.length}
        </div>
      );
   }
}

export default Home;
