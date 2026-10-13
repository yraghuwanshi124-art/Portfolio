
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[#09090f] text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/My_Portfolio/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
