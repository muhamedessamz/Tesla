import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavbarNew';
import Home from './pages/HomeEnhanced';
import Vehicles from './pages/Vehicles';
import Model3 from './pages/Model3';
import ModelY from './pages/ModelY';
import ModelX from './pages/ModelX';
import Cybertruck from './pages/Cybertruck';
import Energy from './pages/Energy';
import Charging from './pages/Charging';
import Discover from './pages/Discover';
import Shop from './pages/Shop';
import Support from './pages/Support';
import About from './pages/AboutEnhanced';
import Contact from './pages/ContactEnhanced';
import Footer from './components/Footer';
import './styles/App.css';
import './styles/Home.css';
import './styles/Navbar.css';
import './styles/Tesla.css';
import './styles/TeslaNavbar.css';
import './styles/TeslaExtended.css';
import './styles/CarPages.css';
import './styles/NewPages.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/model3" element={<Model3 />} />
            <Route path="/modely" element={<ModelY />} />
            <Route path="/modelx" element={<ModelX />} />
            <Route path="/cybertruck" element={<Cybertruck />} />
            <Route path="/energy" element={<Energy />} />
            <Route path="/charging" element={<Charging />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/support" element={<Support />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;