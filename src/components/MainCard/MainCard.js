import { useContext } from 'react';
import jeremyImg from '../../assets/imgs/image-jeremy.png';
import Wrapper from './styles/Wrapper';
import MainCardStyles from './styles/MainCardStyles';
import Periods from '../Periods/Periods';
import { ThemeContext } from '../../theme/ThemeContext';
const Owner = () => {
  const value = useContext(ThemeContext);
  console.log(value);

  return (
    <Wrapper>
      <MainCardStyles>
        <img className='owner' src={jeremyImg} alt='Jeremy face' />
        <section className='personal-data'>
          <span className='additional-text'>Report for</span>
          <h1 className='name'>Jeremy Robson</h1>
        </section>
      </MainCardStyles>
      <Periods />
    </Wrapper>
  );
};

export default Owner;
