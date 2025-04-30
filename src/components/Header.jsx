import styled from 'styled-components';
import logo from '../assets/logo.png';

function Header() {
  return (
    <HeaderContainer>
      <HeaderImage src={logo} alt="logo" />
      <Title>ZapRecall</Title>
    </HeaderContainer>
  );
}

export default Header;

// Styled-components
const HeaderContainer = styled.header`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px 20px 0 20px;
  background-color: #FB6B6B;
`;

const HeaderImage = styled.img`
  width: 50px;
  height: 60px;
`;

const Title = styled.h1`
  font-family: 'Righteous';
  font-size: 36px;
  font-weight: 400;
  color: #FFFFFF;
`;
