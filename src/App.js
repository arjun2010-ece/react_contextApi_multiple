import { AuthProvider, VisibleProvider } from './context';
import Navbar from './components/Navbar'
import Button from './components/Button'
import Hero from './components/Hero'
import './App.css';

function App() {
  return (
    <AuthProvider>
        <Navbar />
        <Button />
        <VisibleProvider>
          <Hero />
        </VisibleProvider>
    </AuthProvider>
  );
}

export default App;

// very very important
// Hero component can only use data from VisibleProvider but not AuthProvider