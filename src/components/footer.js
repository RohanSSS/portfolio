import React from 'react';
import styled from 'styled-components';

import linkedIn from '../assets/LI.png';
import github from '../assets/github.png';

const Container = styled.section`
  width: 100vw;
  background-color: black;
  color: white;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Icon = styled.img`
  height: 3em;
  width: auto;
  margin: 1em;
`;

const Footer = () => {
  return (
    <Container>
      <a href="https://github.com/RohanSSS"><Icon src={github} /></a>
      <a href="https://www.linkedin.com/in/rohan-shah-summers-995406112/"><Icon src={linkedIn} /></a>
    </Container>
  );
};

export default Footer;
