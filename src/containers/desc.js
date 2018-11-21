/*
WordCard Component
*/
import React from 'react';
import styled from 'styled-components'

const Desc = styled.div`
    margin-bottom: 5px;
`;

const Prop =  styled.span`
    display: inline-block;
    width: 30px;
    font-style:italic;
    margin-right: 15px;
`;

const Meaning = styled.span`
`;

class WordCard extends React.Component {
    render() {
        console.log(this.props.meaning);
        return (
            <Desc>
                <Prop>{this.props.meaning.property}</Prop>
                {this.props.meaning.desc.map(m => (
                    <Meaning>{m}；</Meaning>
                ))}
            </Desc>
        );
    }
}

export default WordCard;
