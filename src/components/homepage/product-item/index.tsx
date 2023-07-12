import { Link } from "react-router-dom";
import Love from "./../../../assets/love_icon.svg";

import ImageProduct from "./../../../assets/images/product_image.png";

interface ProductItemProps {
  id: string;
  size: string;
  price: number;
  img_url: string;
  donate_discount: number;
}

const ProductItem = (props: ProductItemProps) => {
  const { id, size, price, img_url, donate_discount } = props;

  return (
    <Link
      className="flex flex-col bg-cream drop-shadow-md"
      to={`/product/${id}`}
    >
      <div className={`bg-[url(${ImageProduct})]`}>
        <img src={img_url} alt="image" className="w-full" />
        <button className="z-10 absolute bottom-0 right-0 pb-3 pr-3">
          <img src={Love} alt="" className="w-7" />
        </button>
      </div>
      <div className="flex px-6 py-2 justify-between">
        <div className="flex flex-col">
          Rp {price}
          <br />
          {size}
        </div>
        <div className="flex flex-col text-xs font-bold">
          Donate
          <div className="flex text-sm">
            <div className="flex flex-col">
              <div className="text-slate-400 line-through font-thin">
                Rp {price}
              </div>
              <div>Rp {price * donate_discount}</div>
            </div>
            <div className="text-red-500 bg-red">-{donate_discount * 100}%</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
