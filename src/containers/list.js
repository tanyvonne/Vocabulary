/*
   Home 主页
*/
import React, { Component } from 'react';

class Home extends Component {


   render() {
     const  data = [
       {
         word:'clause',
         meaning: [
           {
             property: 'n',
             desc: ['条款', '从句']
           }
         ]
       },
       {
         word:'thick',
         meaning: [
           {
             property: 'adv',
             desc: ['密集地'],
           },
           {
             property: 'adj',
             desc: ['厚的','粗的','稠的','浓的'],
           },
         ]
       }
     ];
      return (
        <div>{data[0].word}</div>
      );
   }
}

export default Home;
