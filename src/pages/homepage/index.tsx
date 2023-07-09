import ProductItem from "../../components/homepage/product-item";

const Homepage = () => {
  return (
    <div className="grid grid-cols-3 px-96 py-32 space-x-5 space-y-5">
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
    </div>
  );
}

export default Homepage