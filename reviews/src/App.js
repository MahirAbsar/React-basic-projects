import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { MainWrapper, Title, UnderLine } from './styles/style';
import Review from './Review';
function App() {
  return (
    <MainWrapper>
      <GlobalStyle />
      <Title>our review</Title>
      <UnderLine></UnderLine>
      <Review />
    </MainWrapper>
  );
}

export default App;
