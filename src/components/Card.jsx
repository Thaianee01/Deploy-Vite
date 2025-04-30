import { useState } from 'react';
import styled from 'styled-components';
import Feedback from './Feedback';

function Card({ name, question, answer, onCardCompleted }) {
  const [state, setState] = useState(0);
  // 0: Card fechado
  // 1: Pergunta aberta
  // 2: Resposta aberta 
  // -1: Feedback mostrado (card finalizado)

  const [feedback, setFeedback] = useState(null); //Armazena o feedback do usuário

  const handleCardClick = () => {
    if (state === 0) {
      setState(1);
    }
  };

  const handleShowAnswer = () => {
    if (state === 1) {
      setState(2);
    }
  };

  const handleFeedback = (tipo) => {   // Chama quando o usuário clica em um dos botões de feedback
    setFeedback(tipo);
    setState(-1);  // muda o estado para finalizado

    if (onCardCompleted) {
      onCardCompleted();
    }
  };

  return (
    <CardContainer>
      {state === 0 && (
        <TitleContainer>
          <CardTitle>{name}</CardTitle>
          <PlayImage
            src="./src/assets/seta_play.png"
            alt="Abrir pergunta"
            onClick={handleCardClick}
          />
        </TitleContainer>
      )}

      {state === 1 && (
        <QuestionContainer>
          <Text>{question}</Text>
          <TurnImage
            src="./src/assets/seta_virar.png"
            alt="Mostrar resposta"
            onClick={handleShowAnswer}
          />
        </QuestionContainer>
      )}

      {state === 2 && (
        <AnswerContainer>
          <Text>{answer}</Text>
          <FeedbackButtons>
            <Button $color="#FF3030" onClick={() => handleFeedback('Não lembrei')}>Não lembrei</Button>
            <Button $color="#FF922E" onClick={() => handleFeedback('Quase esqueci')}>Quase não lembrei</Button>
            <Button $color="#2FBE34" onClick={() => handleFeedback('Zap!')}>Zap!</Button>
          </FeedbackButtons>
        </AnswerContainer>
      )}

      {state === -1 && (
        <Feedback type={feedback} name={name} />
      )}
    </CardContainer>
  );
}

export default Card;

//CardContainer
const CardContainer = styled.div`
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  min-height: 80px;
  border-radius: 12px;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);  ---------------------- /*X, Y , blur, color; */
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 10px;
`;


const CardTitle = styled.h2`
  font-family: 'Recursive';
  font-weight: 700;
  font-size: 16px;
  color: #333333;
`;

const PlayImage = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  background-color: #FFFFD4;
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 12px;

  img {
    margin-left: auto;
    width: 20px;
    height: 20px;
    display: block;
  }
`;

const Text = styled.p`
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
`;

const TurnImage = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  cursor: pointer;
`;

//AnswerContainer e FeedBack
const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;    
  background-color: #FFFFD4;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 12px;
`;

const Button = styled.button`
  padding: 10px 18px;
  background-color: ${props => props.$color};
  border: none;
  flex: 1;
  border-radius: 8px;
  cursor: pointer;
  box-sizing: border-box;

  font-family: 'Recursive';
  font-weight: 400;
  font-size: 12px;
  color: #FFFFFF;
`;

const FeedbackButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;   
  gap: 8px;
  box-sizing: border-box;
`;