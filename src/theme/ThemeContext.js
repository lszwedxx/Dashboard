import React, { useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

const theme = {
  VeryDarkBlue: 'hsl(226, 43%, 10%)',
  DarkBlue: 'hsl(235, 46%, 20%)',
  DesaturatedBlue: 'hsl(235, 45%, 61%)',
  PaleBlue: 'hsl(236, 100%, 87%)',
  Blue: 'hsl(246, 80%, 60%)',
  LightOrange: 'hsl(15, 100%, 70%)',
  SoftBlue: 'hsl(195, 74%, 62%)',
  LightRed: 'hsl(348, 100%, 68%)',
  LimeGreen: 'hsl(145, 58%, 55%)',
  Violet: 'hsl(264, 64%, 52%)',
  SoftOrange: 'hsl(43, 84%, 65%)',
};

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [data, setData] = useState('cos');
  return (
    <ThemeContext.Provider value={data}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
