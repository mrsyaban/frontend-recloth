import Navbar from "./components/common/navbar";
import Homepage from "./pages/homepage";
import ProductPage from "./pages/product";
import LoginPage from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Homepage />} />
          <Route path="product/:id" element={<ProductPage/>} />
        </Route>
        <Route path="login" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
