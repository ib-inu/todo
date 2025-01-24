import Nav from './ui/Nav'
import AppLayout from './ui/AppLayout'
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <Nav setIsMenuOpen={setIsMenuOpen} />
      <AppLayout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  )
}



export default App;
