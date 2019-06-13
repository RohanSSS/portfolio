import React from 'react';
import styled from 'styled-components';

import profilePic from '../assets/profile.jpg';
import cv from '../assets/CV.pdf';

const Container = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 2em 0;
`;

const Image = styled.img`
  /* width: 30vw; */
  min-width: 10em;
  max-width: 20em;
  border-radius: 50%;
  border: solid 3px black;
`;

const SubContainer = styled.div`
  margin: 0 1em;
`;

const Name = styled.h2`

`;

const Profile = styled.p`
  max-width: 30em;
`;

const Link = styled.a`

`;

const Home = () => {
  return (
    <Container>
      <Image src={profilePic} />
      <SubContainer>
        <Name>Rohan Shah Summers</Name>
        <Profile>
          I am a young person keen to become a part of the IT Industry. I have been an avid player of video games for many years, and the hidden side behind the game is one of the largest drivers behind my interest in the world of computers and all things digital. I have always enjoyed puzzles and challenges, whether they are computer related or not, and the IT industry is full of puzzles that need to be solved.
        </Profile>
        <Link href={cv}>CV for more Information</Link>
      </SubContainer>
    </Container>
  )
}

export default Home
