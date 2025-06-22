import { useState } from 'react'
import  Navbar from './components/Navbar';
import './css/App.css'
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import{Routes, Route} from 'react-router-dom'; 
import Favorites from './pages/Favorites';
import { MovieProvider } from './contexts/MovieContext';
function App() {
  const [count, setCount] = useState(0)

  return (
    <MovieProvider>
    
      <Navbar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites></Favorites>} />
        </Routes>
        </main>
            
        </MovieProvider>
);
}

export default App
