import { Checkbox } from "pretty-checkbox-react";
import ProfPicture from "./../../../assets/images/default_profpic.png";
import {useState} from "react";

interface CartItemProps {
  id: string;
  title: string;
  size: string;
  price: number;
  donate_discount: number;
  img_url: string[];
  location: string;
  disc: number;
  subTotal: number;
  owner_name: string;
  setSubTotal: React.Dispatch<React.SetStateAction<number>>;
  setDisc: React.Dispatch<React.SetStateAction<number>>;
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>
}
export const CartItem = (props: CartItemProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const { 
    id, 
    title, 
    size, 
    price, 
    img_url,
    donate_discount,
    location, 
    owner_name, 
    subTotal,
    disc,
    setSubTotal,
    setDisc,
    selectedItems,
    setSelectedItems,
  } = props;

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      console.log(subTotal);
      setSubTotal(subTotal + price);
      setDisc(disc + donate_discount*price);
      setSelectedItems([...selectedItems, id]);
    } else {
      console.log(subTotal);
      setSubTotal(subTotal - price);
      setDisc(disc - donate_discount*price);
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    }
  };

  return (
    <div className="w-[90%] py-2">
      <Checkbox 
        bigger
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="flex border border-slate-400 space-x-6 p-5 rounded-md" 
      >
        <div className="flex flex-col space-y-5">
          {/* seller profile */}
          <div className="flex space-x-4">
            <img
              src={ProfPicture}
              alt="profile"
              className="h-10 rounded-full"
            />
            <div className="flex flex-col">
              {owner_name}
              <div className="text-xs font-thin text-black">{location}</div>
            </div>
          </div>

          <div className="flex space-x-5">
            <img
              src={img_url[0]}
              alt="item"
              className="h-40"
            />
            <div className="flex flex-col space-y-2">
              <span className="font-thin text-2xl">{title}</span>
              <span>Rp {price}</span>
              <span> {size} </span>
            </div>
          </div>
        </div>
      </Checkbox>
    </div>
  
  )
} 

// export const CartItem = () => {
//   return (<div>
//     </div>);
// }