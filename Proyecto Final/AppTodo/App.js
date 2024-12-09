import Navigation from './components/Navegacion/Navigation';
import Provider from './components/Context/Provider';
export default function App() {
  return (
    <Provider>
      <Navigation></Navigation>
    </Provider>
  )
}