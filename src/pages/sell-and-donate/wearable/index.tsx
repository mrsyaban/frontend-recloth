import { Link } from 'react-router-dom';

import SellImage from './../../../assets/images/sell.png';
import DonateImage from './../../../assets/images/charity.png';

const Wearable = () => {
  return (
    <div className="flex flex-col w-[80%]  mx-auto space-y-10 mt-10 mb-10 font-bold text-xl">
    <h1 className="text-3xl ">WEARABLE</h1>
    <div className="flex space-x-10">
      <Link to='create-product'>
        <img src={SellImage} className="w-[450px]" />
      </Link>
      <button>
        <img src={DonateImage} className="w-[450px]" />
      </button>
    </div>
  </div>
  )
}
export default Wearable