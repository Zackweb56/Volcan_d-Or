import './App.css';
import Navbar from './layouts/Navbar/Navbar';
import Footer from './layouts/Footer/Footer';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes here as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
