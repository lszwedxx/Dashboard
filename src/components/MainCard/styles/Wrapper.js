import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  max-width: 400px;
  margin: 0 auto;
  background: ${({ theme }) => theme.DarkBlue};
  color: #fff;
  border-radius: 15px;
`;
export default Wrapper;
