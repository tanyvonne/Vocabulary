/*
   Home 主页
*/
import React from 'react';
import WordCard from './wordCard';
// import {Data} from '../config/data';

const wordProp = [
  'pron.',
  'adj.',
  'adv.',
  'vt.',
  'vi.',
  'num.',
  'art.',
  'prep.',
  'conj.',
  'interj.',
  'v.',
  'n.',
]

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: `one 
英  [wʌn]   美  [wʌn]
pron. 一个人；任何人
adj. 一的；唯一的
n. 一
num. 一；一个
n. (One)人名；(老)温`,
      data: {},
    };
  }

  changeMeaning(event) {
    this.setState({word: event.target.value});
  }

  returnMeaningObj(wordStr, prop) {
    const res = [];
    let idx = wordStr.indexOf(prop);
    while (idx !== -1) {
      res.push({
        prop,
        index: idx
      });
      idx = wordStr.indexOf(prop, idx + 1);
    }
    return res;
  }

  splitProp(str) {
    str = str+'.';
    let arr;
    for(const p of wordProp) {
      const index = str.indexOf(p);
      if (index>=0) {
        arr = [
          str.slice(0, index),
          `${p}`
        ];
        break;
      }
    };
    return arr || str;
  }

  returnWord(str) {
    return str.slice(0, str.indexOf('英'));
  }

  addWord() {
    const wordStr = this.state.word;
    const initArr = wordStr.split('.');
    let splitArr = [];
    initArr.forEach((item) => {
      splitArr = splitArr.concat(this.splitProp(item));
    });
    console.log(splitArr);

    let meaningArr = [];
    for (let i=1; i<=parseInt(splitArr.length/2); i++) {
      const index = i*2-1;
      meaningArr.push({
        property: splitArr[index],
        desc: splitArr[index+1].split("；")
      });
    }

    const wordData = {
      word:this.returnWord(splitArr[0]),
      meaning: meaningArr
    };

    this.setState({data: wordData});
    console.log(this.state);
  }

  // <input value={this.state.word} placeholder='word' onChange={(e) => this.changeWord(e)}/>

  render() {
    return (
      <React.Fragment>
        {this.state.data.word ? <WordCard data={this.state.data}/> : <textarea placeholder='meaning' value={this.state.word} rows='10' onChange={(e) => this.changeMeaning(e)}/>}
        <button onClick={() => this.addWord()}>GENERATE</button>
      </React.Fragment>
    );
  }
}

export default Home;
