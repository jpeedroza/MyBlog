import { GlobalConfigs, Container } from './styles';
import { PersonalInfo } from './components/PersonalInfo'
import { ImageInfo } from './components/ImageInfo'


export default function App() {
  return (
    <Container>
      <ImageInfo />
      <PersonalInfo />
      <GlobalConfigs />
    </Container>
  );
}