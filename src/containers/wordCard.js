/*
WordCard Component
*/
import React from 'react';
import styled from 'styled-components'

import Desc from './desc';

const Card = styled.div`
  background: white;
  border: 2px solid green;
  border-radius: 10px;
  color: #666;
  width: 300px;
  height: 400px;
`;

const Word = styled.div`
    background: green;
    color: white;
    font-size: 24px;
    font-weight: bolder;
    border-radius: 7px 7px 0 0;
    line-height: 5rem;
    height: 5rem;
    padding: 0 20px;
`;

const Context = styled.div`
    padding: 30px 20px;
`;

class WordCard extends React.Component {
    render() {
        console.log(this.props.data);
        return (
            <Card>
                <Word>{this.props.data.word}</Word>
                <Context>
                    {this.props.data.meaning.map((meaning) => (<Desc meaning={meaning}/>))}
                </Context>
            </Card>
        );
    }
}

export default WordCard;
