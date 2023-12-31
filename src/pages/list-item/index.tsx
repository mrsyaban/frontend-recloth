import { useState } from 'react';

import Photos from '../../components/list-item/photos';
import GenderCategory from '../../components/list-item/gender-category';
import Category from '../../components/list-item/category';
import Brand from '../../components/list-item/brand';
import Condition from '../../components/list-item/condition';
import Size from '../../components/list-item/size';
import Quantity from '../../components/list-item/quantity';
import Price from '../../components/list-item/price';
import DonationDisc from '../../components/list-item/donation-disc';
import "./style.css";
import axios from 'axios';

const ListItem = () => {
  const [photoPaths, setPhotoPaths] = useState<string[]>([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [cond, setCond] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);
  const [donationDisc, setDonationDisc] = useState<number>(0);
  axios.defaults.withCredentials = true;

  const handleList = async () => {

    try {
      const response = await axios.post("https://reclothserver.azurewebsites.net/api/product",
      // const response = await axios.post("http://localhost:8080/api/product",
        {
          title: title,
          description: desc,
          quantity: quantity,
          img_url: photoPaths,
          donate_discount: donationDisc,
          // location: location,
          condition: cond,
          // owner_name: owner_name
        },
      )
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="flex flex-col space-y-10 mt-10 mb-10 mx-96 font-bold text-xl">
      <h1 className="text-3xl">LIST AN ITEM</h1>
      <div className="flex flex-col">
        TITLE
        <input
          type="text"
          className="mt-5 border border-solid border-grey font-thin rounded-sm p-2"
          placeholder="Item name"
          onChange={(e) => {setTitle(e.target.value)}}
        />
      </div>
      <Photos photoPaths={photoPaths} setPhotoPaths={setPhotoPaths}/>
      <div className="flex flex-col">
        DESCRIPTION
        <textarea
          rows={4}
          cols={60}
          value={desc}
          onChange={(e) => {setDesc(e.target.value)}}
          className="mt-5 border border-solid border-grey font-thin rounded-sm p-3"
          placeholder="Tell about your item includes length, width, material, etc."
        />
      </div>
      <div className="flex flex-col">
        <span className="mb-5">INFO</span>
        <div className="flex flex-col space-y-5 font-thin">
          <GenderCategory gender={gender} setGender={setGender}/>
          <Category category={category} setCategory={setCategory}/>
          <Brand brand={brand} setBrand={setBrand}/>
          <Condition condition={cond} setCondition={setCond}/>
          <Size size={size} setSize={setSize}/>
          <Quantity quantity={quantity} setQuantity={setQuantity}/>
          <Price price={price} setPrice={setPrice}/>
          <DonationDisc donationDisc={donationDisc} setDonationDisc={setDonationDisc}/>
        </div>
      </div>
      <button className='bg-grey text-cream' onClick={handleList}>
        LIST
      </button>
    </div>
  );
};
export default ListItem;
