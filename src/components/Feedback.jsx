import styled from 'styled-components';

// Importando imagens
import Errado from '../assets/icone_erro.png';
import Quase from '../assets/icone_quase.png';
import Certo from '../assets/icone_certo.png';

const Icon = {
  'Não lembrei': Errado,
  'Quase esqueci': Quase,
  'Zap!': Certo,
};

function Feedback({ type, name }) {
  return (
    <FeedbackContainer>
      <FinalizedCard $feedback={type}>{name}</FinalizedCard>
      <img src={Icon[type]} alt="Ícone de feedback" />
    </FeedbackContainer>
  );
}

export default Feedback;

// Estilo
const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  align-items: center;
  gap: 12px;
  box-sizing: border-box;
`;

const FinalizedCard = styled.h2`
  font-size: 16px;
  font-weight: 700;
  text-align: center;

  color: ${props =>
    props.$feedback === 'Não lembrei' ? 'red' :
    props.$feedback === 'Quase esqueci' ? 'orange' :
    props.$feedback === 'Zap!' ? 'green' : '#333'};

  text-decoration: ${props => props.$feedback ? 'line-through' : 'none'};
`;

