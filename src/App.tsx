import Navbar from "./components/common/navbar";
import Homepage from "./pages/homepage";
import ProductPage from "./pages/product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Homepage />} />
          <Route path="product" element={<ProductPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
