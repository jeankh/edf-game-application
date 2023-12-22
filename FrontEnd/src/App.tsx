import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Certificat, Home, Tests } from "./screens/index";
import { Footer, NavBar } from "./components/index";
import NotFound404 from "./screens/NotFound404/NotFound404";

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
          {/* Tests */}
          <Route path="/Tests" element={<Tests />} /> Certificat
          {/* Tests */}
          <Route path="/Certificat" element={<Certificat />} />
          {/* 404 Page */}
          <Route path="*" element={<NotFound404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
