import { ThemeProvider } from 'styled-components';
import { GlobalStyles, Stars, Stars2 } from "./styles/globalStyles";

import Header from "./components/header"
import Home from "./components/home";
import Projects from './components/projects';

function App() {

  return (
    <ThemeProvider theme={{}}>
      <Stars2 />
      <GlobalStyles />
      <Header />
      <Home />
      <Stars />
      <Projects />
      <Stars />
    </ThemeProvider>
  )
}

export default App
