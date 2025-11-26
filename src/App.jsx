import NavBar from "./components/NavBar/NavBar";
import { HashRouter as Router, Route, Routes } from "react-router";
import ContactPage from "./pages/ContactPage/ContactPage";
import ExchangeCard from "./components/ExchangeCard/ExchangeCard";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div id="main-container">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="*" element={<ExchangeCard/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
