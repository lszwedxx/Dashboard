import { Reset } from 'styled-reset';
import MainCard from './components/MainCard/MainCard';
import WrapperStyles from './WrapperStyles';
import { ThemeProvider } from './theme/ThemeContext';
function App() {
  return (
    <ThemeProvider>
      <WrapperStyles>
        <Reset />
        <MainCard />
      </WrapperStyles>
    </ThemeProvider>
  );
}

export default App;
