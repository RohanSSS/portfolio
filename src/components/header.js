import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: black;
  width: 100vw;
`;

const Title = styled.h1`
  margin: 0;
  padding: 1em 0;
  color: white;
`;

const Header = () => {
  return (
    <Container>
      <Title>Who Am I</Title>
    </Container>
  );
};

export default Header;
