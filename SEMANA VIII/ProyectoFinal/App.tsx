import Navigation from './Components/Navegacion/Navigation';
import Provider from './Context/Provider';
export default function App() {
  return (
    <Provider>
      <Navigation></Navigation>
    </Provider>
  )
}