import { Checkbox } from "pretty-checkbox-react";
import { useState } from "react";

import ProfPicture from "./../../assets/images/default_profpic.png";
import { Link } from "react-router-dom";
// import ItemImage from "./../../assets/images/default_item.png";

const CartPage = () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [price, usePrice] = useState<number>(30000);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [disc, setDisc] = useState<number>(0);
  
  // {"id":"64aec606d84e6f81c5addff8",
  // "title":"Kemeja Pria",
  // "description":"Kemeja lengan panjang untuk pria dengan model slim fit, warna hitam, bahan katun halus dan nyaman dipakai, cocok untuk acara formal maupun kasual. Ukuran M.",
  // "size":"M",
  // "quantity":8,
  // "price":200000,
  // "img_url":["https://p-id.ipricegroup.com/6ba8f204cad7369ca4ec6c19b87d7d84b0ba79be_0.jpg"],
  // "donate_discount":0.2,"brand":"Zara","location":"Jakarta","condition":"Baru",
  // "owner_id":"64a78a91bcddd64f55ceb4a6","owner_name":""}
  return (
    <div className="flex flex-col w-[80%]  mx-auto space-y-10 mt-10 mb-10 font-bold text-xl">
      <h1 className="text-3xl ">SHOPPING CART</h1>
      <div className="flex space-x-10">
        {/* CART ITEM */}
        <div className="w-[70%] ">
          <Checkbox bigger className="flex border border-slate-400 space-x-6 p-5 rounded-md" >
            <div className="flex flex-col space-y-5">
              {/* seller profile */}
              <div className="flex space-x-4">
                <img
                  src={ProfPicture}
                  alt="profile"
                  className="h-10 rounded-full"
                />
                <div className="flex flex-col">
                  UMKM Dago
                  <div className="text-xs font-thin text-black">Jakarta</div>
                </div>
              </div>

              <div className="flex space-x-5">
                <img
                  src="https://p-id.ipricegroup.com/6ba8f204cad7369ca4ec6c19b87d7d84b0ba79be_0.jpg"
                  alt="item"
                  className="h-40"
                />
                <div className="flex flex-col space-y-2">
                  <span className="font-thin text-2xl">Kemeja Pria</span>
                  <span>Rp 200000</span>
                  <span> M </span>
                </div>
              </div>
            </div>
          </Checkbox>
        </div>

        {/* ORDER SUMMARY */}
        <div className="border w-[35%] border-solid border-slate-400 p-5">
          <h2 className="text-xl">ORDER SUMMARY</h2>
          <div className="mt-5 flex font-thin justify-between">
            <h3 className="text-xl  text-slate-600">SUBTOTAL</h3>
            {/* Rp {price.toLocaleString("id")} */}
            Rp 200000
          </div>
          <div className="mt-5 flex font-thin justify-between">
            <h3 className="text-xl  text-slate-600">DISCOUNT</h3>
            {/* Rp {disc.toLocaleString("id")} */}
            Rp 40000
          </div>
          <hr />
          <div className="flex mt-5 justify-between">
            <h3 className="text-xl">ORDER TOTAL</h3>
            {/* Rp {((100-disc)*price).toLocaleString("id")} */}
            Rp 160000
          </div>
          <div className="flex flex-col mt-10">
            <Link to={"/"}>
              <button className="bg-grey rounded-sm">BUY</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
