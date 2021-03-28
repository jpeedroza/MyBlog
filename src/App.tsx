import { createGlobalStyle } from 'styled-components';
import { PersonalInfo } from './components/PersonalInfo'

const GlobalConfigs = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  html {
    font-size: 62,5%;
  }
`

export default function App() {
  return (
    <>
      <PersonalInfo />
      <GlobalConfigs />
    </>
  );
}