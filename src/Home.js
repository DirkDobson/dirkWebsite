import React from 'react'
import styled from 'styled-components';

class Home extends React.Component {
  render() {
    return (
      <Header>Welcome To My Website</Header>
    )
  }
}

const Header = styled.div`
  background-color: #00CED1;
  width: 100%;
  height 3em;
  text-align: center;
`

export default Home