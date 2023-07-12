import ProductItem from "../../components/homepage/product-item";
import { useEffect, useState } from 'react'
import axios from "axios";

interface Product {
  id: string;
  title: string;
  description: string;
  size: string;
  quantity: number;
  price: number;
  img_url: string;
  donate_discount: number;
}

const Homepage = () => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        'https://reclothserver.azurewebsites.net/api/products/1?limit=100',
        // 'https://localhost:8080/api/products/1?limit=5'
      )
      console.log(response.data); // Anda dapat menangani data sesuai kebutuhan Anda di sini
      await setProducts(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid grid-cols-3 px-96 py-32 space-x-5 space-y-5">
      {products.map((product) => (
        <ProductItem 
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          size={product.size}
          quantity={product.quantity}
          price={product.price}
          img_url={product.img_url}
          donate_discount={product.donate_discount}
        />
      ))}
    </div>
  );
}

export default Homepage