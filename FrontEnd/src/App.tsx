import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './screens/index';
import { Footer, NavBar } from './components/index';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          {/* Home Page Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          {/* <Route exact path="/Home" element={<Home />} /> */}
          {/* 404 Page */}
          {/* <Route path="*" element={<> 404</>} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
