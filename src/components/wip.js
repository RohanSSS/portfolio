import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: black;
  color: white;
  width: 100vw;
  font-size: 1em;
  text-align: center;
  padding: 0.5em 0;
`;

const Wip = () => {
  return (
    <Container>
      This Portfolio is currently a work in Progress
    </Container>
  )
}

export default Wip;
