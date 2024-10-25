import FooterSection from "./components/Universal/FooterSection";
import NavBar from "./components/Universal/NavBar";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop"; // Import Shop component
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />{" "}
          {/* Shop component handles search and filter */}
        </Routes>
        <FooterSection />
      </BrowserRouter>
    </div>
  );
}

export default App;
