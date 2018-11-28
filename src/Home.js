import React from 'react'
import styled from 'styled-components';
import Game from './Game.js';

class Home extends React.Component {
  render() {
    return (
      <>
      <Body>
      <Header>Welcome To My Website</Header>
      <RSide/>
      <Game/>
      <LSide/>
      </Body>
      </>
    )
  }
}

const Body = styled.div`
  background-color: #000000;
`

const Header = styled.div`
  background-color: #00CED1;
  width: 100%;
  height 3em;
  text-align: center;
`
const RSide = styled.div`
  background-color: #111E6C;
  float: right;
  height: 100em;
  width: 5em;
`

const LSide = styled.div`
  background-color: #111E6C;
  float: left;
  height: 100em;
  width: 5em;
`

export default Home;