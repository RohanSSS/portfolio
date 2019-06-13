import React from 'react';
import styled from 'styled-components';

import { Wip, Header, Footer } from './components';
import Home from './pages/home';

const AppSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

const App = () => {
  return (
    <AppSection>
      <Wip />
      <Header />
      <Home />
      <Footer />
    </AppSection>
  );
};

export default App;
