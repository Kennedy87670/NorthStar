import "./App.css";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import NavBar from "./components/NavBar/NavBar";
import Footers from "./components/Footers/Footers";
import ProductItems from "./pages/ProductItems";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Products />} />
          <Route path="/productItem" element={<ProductItems />} />
        </Routes>
        <Footers />
      </Box>
    </BrowserRouter>
  );
}

export default App;
