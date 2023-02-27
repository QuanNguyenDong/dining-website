import { Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { AboutUs, Contact, Home, Menu } from './pages';
// import './responsive.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Menu />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
