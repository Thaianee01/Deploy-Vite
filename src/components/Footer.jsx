import styled from 'styled-components';

function Footer({ completedCount, totalCards }) {
  return (
    <FooterContainer>
      <h1>{completedCount}/{totalCards} Concluídos</h1>
    </FooterContainer>
  );
}

export default Footer;

// Estilo do Footer
const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background:#FFFFFF;
  border-top: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  color: #333333;
  z-index: 10;

 h1 {
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
  }
`;

