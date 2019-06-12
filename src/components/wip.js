import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: black;
  color: white;
  width: 100vw;
  font-size: 1em;
  text-align: center;
  padding: 0.5em 0;
  display: ${props => props.display};
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Exit = styled.button`
  font-weight: bold;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 1.5em;
  position: absolute;
  right: 0;
  margin-right: 1em;
`;

const Wip = () => {

  const [display, setDisplay]= React.useState('flex');

  return (
    <Container display={display}>
      This Portfolio is currently a work in Progress
      <Exit onClick={() => setDisplay('none')}>X</Exit>
    </Container>
  )
}

export default Wip;
