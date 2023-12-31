import ProfPicture from "./../../assets/images/default_profpic.png";
import ProductDesc from "../../components/product/product-desc";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  description: string;
  size: string;
  quantity: number;
  price: number;
  condition: string;
  brand: string;
  owner_name: string;
  location: string;
  img_url: string;
  donate_discount: number;
}

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://reclothserver.azurewebsites.net/api/product/${id}`,
        // `http://localhost:8080/api/product/${id}`,
        {
          withCredentials: true,
        }
      )

      console.log(response.data);
      await setProduct(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTransaction = async () => {
    console.log("transaction");
    try {
      const response = await axios.put("https://reclothserver.azurewebsites.net/api/cart", {
      // const response = await axios.put("https://localhost:8080/api/cart", {
        // withCredentials: true,
        method: "add",
        item_id: id
      })

      console.log(response.data);
      navigate("/cart");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="flex px-96 pt-32 justify-between">
      <img src={product?.img_url} alt="product image" className="w-2/6 h-80" />
      <div className="flex flex-col w-2/6 space-y-11">

        {/* seller profile */}
        <div className="flex space-x-4">
          <img src={ProfPicture} alt="profile" className="h-10 rounded-full" />
          <div className="flex flex-col">
            <div className="font-bold">{product?.owner_name}</div>
            <div className="text-xs">{product?.location}</div>
          </div>
        </div>

        {/* Product Detail */}
        <div className="flex flex-col space-y-1">
          <h1 className="text-4xl font-bold"> {product?.title} </h1>
          <h2 className="text-2xl font-bold"> Rp {product?.price}</h2>
        </div>
        <ProductDesc 
            size = {product?.size ?? ""}
            condition = {product?.condition ?? ""}
            brand = {product?.brand ?? ""}
            description = {product?.description ?? ""}          
        />
        <div className="flex flex-col h-32 space-y-4 font-bold">
          <button onClick={handleTransaction} className="bg-cream h-full text-grey">
            TAMBAHKAN KE KERANJANG
          </button>
          <button onClick={handleTransaction} className="bg-grey h-full text-cream">
            DONASI ({(product?.donate_discount ?? 0) * 100}%)
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
