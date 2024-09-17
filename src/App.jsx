import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
// import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import {
  faQuoteLeft,
  faQuoteRight,
  faStar,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons"; // Import d'une icône de fa-solid

library.add(faPagelines, faQuoteLeft, faQuoteRight, faStar, faPaperPlane); // Ajout de l'icône au library

import Home from "./pages/home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
