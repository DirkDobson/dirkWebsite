import React from 'react'
import styled from 'styled-components';

class Home extends React.Component {
  render() {
    return (
      <>
      <Body>
      <Header>Welcome To My Website</Header>
      <RSide/>
      <LSide/>
      </Body>
      </>
    )
  }
}

const Header = styled.div`
  background-color: #00CED1;
  width: 100%;
  height 3em;
  text-align: center;
`
const Body = styled.div`
  background-color: #000000;
  height: 100%;
  width: 100%;
`
const RSide = styled.div`
  bacground-color: 111E6C;
  display: float;
  float: right;
  height: 500px;
  width: 30px;
`

const LSide = styled.div`
  bacground-color: 111E6C;
  display: float;
  float: left;
  height: 500px;
  width: 30px;
`

export default Home;