import NavegacionBasica from './Components/Navegacion/NavegacionBasica';
import ContentTheme from './Context/ThemeLocalProvider';

export default function App() {
  return (
    <ContentTheme>
      <NavegacionBasica></NavegacionBasica>
    </ContentTheme>
  )
}



