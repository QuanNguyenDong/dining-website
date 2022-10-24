import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Navbar } from './components';
import AboutUs from './components/AboutUs/AboutUs';
import { Contact, Home, Menu } from './pages';

function App() {
  return (
    <div className="App grid wide">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
