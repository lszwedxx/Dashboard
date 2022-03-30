import styled from 'styled-components';
const MainCardStyles = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 15px;
  background: ${({ theme }) => theme.Blue};
  border-radius: 15px;
  margin: 0 auto;
  padding: 2em 0 2em 0;
  .personal-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }
  .owner {
    width: 20%;
    border-radius: 50%;
    border: 3px solid white;
  }
  .additional-text {
    font-size: 0.9em;
    color: ${({ theme }) => theme.PaleBlue};
  }
  .name {
    font-size: 1.5em;
    font-weight: 300;
  }
`;

export default MainCardStyles;
