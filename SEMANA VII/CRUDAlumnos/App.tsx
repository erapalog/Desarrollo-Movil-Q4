import Navigation from './Components/Navegacion/Navigation';
import ContentTheme from './Context/Provider';

export default function App() {
  return (
    <ContentTheme>
      <Navigation></Navigation>
    </ContentTheme>
  )
}