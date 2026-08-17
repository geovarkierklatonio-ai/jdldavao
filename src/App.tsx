import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { NewProducts } from './pages/NewProducts';
import { AccomplishedProjects } from './pages/AccomplishedProjects';
import { Blog } from './pages/Blog';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import './App.css'

function App() {
  return (
    <Router basename="/jdldavao/">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<NewProducts />} />
            <Route path="/projects" element={<AccomplishedProjects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
