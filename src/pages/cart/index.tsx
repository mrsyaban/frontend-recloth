import { Checkbox } from "pretty-checkbox-react";
import { useState } from "react";

import ProfPicture from "./../../assets/images/default_profpic.png";
import ItemImage from "./../../assets/images/default_item.png";

const CartPage = () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [price, usePrice] = useState<number>(30000);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [disc, setDisc] = useState<number>(0);
  
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
                  <div className="text-xs font-thin text-black">Bandung</div>
                </div>
              </div>

              <div className="flex space-x-5">
                <img
                  src={ItemImage}
                  alt="item"
                  className="h-40"
                />
                <div className="flex flex-col space-y-2">
                  <span className="font-thin text-2xl">Nama Item Disini</span>
                  <span>Rp 50000</span>
                  <span> XL </span>
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
            Rp {price.toLocaleString("id")}
          </div>
          <div className="mt-5 flex font-thin justify-between">
            <h3 className="text-xl  text-slate-600">DISCOUNT</h3>
            Rp {disc.toLocaleString("id")}
          </div>
          <hr />
          <div className="flex mt-5 justify-between">
            <h3 className="text-xl">ORDER TOTAL</h3>
            Rp {((100-disc)*price).toLocaleString("id")}
          </div>
          <div className="flex flex-col mt-10">
            <button className="bg-grey rounded-sm">BUY</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
