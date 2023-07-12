import Navbar from "./components/common/navbar";
import Homepage from "./pages/homepage";
import ProductPage from "./pages/product";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import ListItem from "./pages/list-item";
import CartPage from "./pages/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Homepage />} />
          <Route path="create" element={<ListItem />} />  
          <Route path="product/:id" element={<ProductPage/>} />
          <Route path="cart" element={<CartPage/>}/>
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="registry" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
