import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <HelmetProvider>
          <Routes>  
            <Route path="/" element={<Home />} />
          </Routes>
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
