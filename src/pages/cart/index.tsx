import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { CartItem } from "../../components/cart/product-item";
import axios from "axios";
// import ItemImage from "./../../assets/images/default_item.png";

interface CartItemProps {
  id: string;
  title: string;
  size: string;
  price: number;
  img_url: string[];
  donate_discount: number;
  brand: string;
  location: string;
  condition: string;
  owner_id: string;
  owner_name: string;
}

const CartPage = () => {
  axios.defaults.withCredentials = true;
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const [subTotal, setSubTotal] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [disc, setDisc] = useState(0);
  

  const fetchCartItems = async() => {
    try {
      const response = await axios.get("https://reclothserver.azurewebsites.net/api/cart",
      // const response = await axios.get("http://localhost:8080/api/cart",
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      await setCartItems(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  const postTransaction =async () => {
    const currentDate = new Date().toISOString();

    const requestBody = {
      withCredentials: true,
      date: currentDate,
      items: selectedItems.map((itemId) => {
        return {
          quantity: 1,
          item_id: itemId
        };
      }),
      amount: 1
    };

    try {
      const response = await axios.post("https://reclothserver.azurewebsites.net/api/transaction/checkout",
      // const response = await axios.post("http://localhost:8080/api/transaction/checkout",
          requestBody
      )
      console.log(response.data);
      await setSelectedItems([]);
    } catch (error) {
      console.error(error);
    }
  }

  const handleBuy = async () => {
    try {
      const deleteRequests = selectedItems.map((itemId) => {
        return axios.put("https://reclothserver.azurewebsites.net/api/cart",{
        // return axios.put("https://localhost:8080/api/cart",{
          // withCredentials: true,
          method: "del",
          item_id: itemId,
        });
      });

      const responses = await Promise.all(deleteRequests);
      responses.forEach((response) => {
        console.log(response.data);
      });

      postTransaction()
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCartItems();
  }, [])

  return (
    <div className="flex flex-col w-[80%]  mx-auto space-y-10 mt-10 mb-10 font-bold text-xl">
      <h1 className="text-3xl ">SHOPPING CART</h1>
      <div className="flex space-x-10">
        <div className="flex flex-col flex-grow">
          {cartItems.map((cartItem) => {
            return (
              <CartItem 
                key={cartItem.id}
                id={cartItem.id}
                title={cartItem.title}
                size={cartItem.size}
                price={cartItem.price}
                donate_discount={cartItem.donate_discount}
                img_url={cartItem.img_url}
                location={cartItem.location}
                owner_name={cartItem.owner_name}
                disc={disc}
                subTotal={subTotal}
                setSubTotal={setSubTotal}
                setDisc={setDisc}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
              />
            )
          })}
        </div>

        {/* ORDER SUMMARY */}
        <div className="border w-[35%] border-solid border-slate-400 p-5 h-[fit-content]">
          <h2 className="text-xl">ORDER SUMMARY</h2>
          <div className="mt-5 flex font-thin justify-between">
            <h3 className="text-xl  text-slate-600">SUBTOTAL</h3>
            {/* Rp {price.toLocaleString("id")} */}
            Rp {subTotal}
          </div>
          <div className="mt-5 flex font-thin justify-between">
            <h3 className="text-xl  text-slate-600">DISCOUNT</h3>
            {/* Rp {disc.toLocaleString("id")} */}
            Rp {disc}
          </div>
          <hr />
          <div className="flex mt-5 justify-between">
            <h3 className="text-xl">ORDER TOTAL</h3>
            {/* Rp {((100-disc)*price).toLocaleString("id")} */}
            Rp {subTotal-disc}
          </div>
          <div className="flex flex-col mt-10">
            <Link to={"/"}>
              <button className="bg-grey px-5 py-2 rounded-md" onClick={handleBuy}>BUY</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
