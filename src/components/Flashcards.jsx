import styled from 'styled-components';
import Card from './Card';

function Flashcards({ cards, onCardCompleted }) {
  return (
    <Container>
      <CardsContainer>
        {cards.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            question={card.question}
            answer={card.answer}
            onCardCompleted={onCardCompleted}
          />
        ))}
      </CardsContainer>
    </Container>
  );
}

export default Flashcards;

// estilos
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 80px;
  box-sizing: border-box;
  width: 100%;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
`;