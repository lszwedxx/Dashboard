import styled from 'styled-components';

const PeriodsStyles = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
  padding: 1.5em 0 1.5em 0;
  color: ${({ theme }) => theme.DesaturatedBlue};
  font-size: 1.2em;
  font-weight: 400;
  .period {
    transition: 0.3s linear;
    cursor: pointer;
  }
  .period:hover {
    font=weight: 500;
    color: #fff;
  }
`;

export default PeriodsStyles;
