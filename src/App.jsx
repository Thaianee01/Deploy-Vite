import { useState } from 'react';
import Header from './components/Header';
import Flashcards from './components/Flashcards';
import Footer from './components/Footer';

import cards from './z-data'; // array dos flashcards
import styled from 'styled-components';

function App() {
  const [completedCount, setCompletedCount] = useState(0);

  return (
    <MainContainer>
      <Header />
      <Flashcards cards={cards} onCardCompleted={() => setCompletedCount(i => i + 1)} />
      <Footer completedCount={completedCount} totalCards={cards.length} />
    </MainContainer>
  );
}

export default App;

// Main container
const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  background-color: #FB6B6B;
`;