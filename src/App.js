
import React, { Component } from 'react';

import './App.css';

const headerEnums = [
  'home', 'list', 'filter', 'review', 'operate'
];

const renderHeaderList = ()=> {
  return headerEnums.map((item, index) => {
    const linkStr = '/' + item;
    return (
      <li key={index}>
        <a href={linkStr}>{item.toUpperCase()}</a>
      </li>
    )
  });
}

class App extends Component {
    render() {
      return (
        <React.Fragment>
          <header className='App-header'>
            <ul>{renderHeaderList()}</ul>
          </header>
          <main className='App-main'>{this.props.children}</main>
          <footer className='App-footer'>
            Yvonne&#39;s First Project For Recite Words.&copy;YVONNE 2018
          </footer>
        </React.Fragment>
      );
    }
}
export default App;
