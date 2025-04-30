import { useState } from 'react';
import Header from './components/Header';
import Flashcards from './components/Flashcards';
import Footer from './components/Footer';

import cards from './z-data'; // array dos flashcards
import styled from 'styled-components';

function App() {
  const [completedCount, setCompletedCount] = useState(0);

  return (
    <MainContainer> {/* Aqui troquei a <div> para <MainContainer> */}
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
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow-x: hidden;
  background-color: #FB6B6B;
`;

// Header Container
const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #7e1212;
`;

// Imagem dentro do Header
const HeaderImage = styled.img`
  width: 50px;
  height: 60px;
`;
