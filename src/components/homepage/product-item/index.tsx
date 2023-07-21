import { Link } from "react-router-dom";
import { useState } from "react";

import Love from "./../../../assets/love_icon.svg";
import RedLove from "./../../../assets/likes.svg";
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
  const [isClicked, setIsClicked] = useState<boolean>(false);
 
  const handleClick = () => {
    console.log("dfas",isClicked);
    setIsClicked(!isClicked);
  };

  return (
    <div className="flex flex-col bg-cream drop-shadow-md min-w-min">
      <div className={`bg-[url(${ImageProduct})] relative`}>
        <img src={img_url} alt="image" className="w-full aspect-square" />
        <button className="z-10 absolute bottom-0 right-0 mb-3 mr-3" onChange={handleClick}>
          <img
            src={isClicked ? RedLove : Love}
            alt="image"
            className={`w-7 ${isClicked ? "text-red-500" : ""}`}
            
          />
        </button>
      </div>
      <Link className="flex px-6 py-2 justify-between" to={`/product/${id}`}>
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
      </Link>
    </div>
  );
};

export default ProductItem;
