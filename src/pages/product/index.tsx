import ImageProduct from "./../../assets/images/product_image.png";
import ProfPicture from "./../../assets/images/default_profpic.png";
import ProductDesc from "../../components/product/product-desc";

const ProductPage = () => {
  return (
    <div className="flex px-96 pt-16 justify-between">
      <img src={ImageProduct} alt="product image" className="w-2/6 h-80" />
      <div className="flex flex-col w-2/6 space-y-11">

        {/* seller profile */}
        <div className="flex space-x-4">
          <img src={ProfPicture} alt="profile" className="h-10 rounded-full" />
          <div className="flex flex-col">
            <div className="font-bold">UMKM Dago</div>
            <div className="text-xs">Bandung</div>
          </div>
        </div>

        {/* Product Detail */}
        <div className="flex flex-col space-y-1">
          <h1 className="text-4xl font-bold"> Jaket Ngab </h1>
          <h2 className="text-2xl font-bold"> Rp 35.000</h2>
        </div>
        <ProductDesc />
        <div className="flex flex-col h-32 space-y-4 font-bold">
          <button className="bg-cream h-full text-grey">
            TAMBAHKAN KE KERANJANG
          </button>
          <button className="bg-grey h-full text-cream">DONASI</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
