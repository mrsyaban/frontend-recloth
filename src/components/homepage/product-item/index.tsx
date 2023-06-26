import {Link} from 'react-router-dom';

import ImageProduct from './../../../assets/images/product_image.png'


const ProductItem = () => {
  return (
    <Link className="flex flex-col bg-cream drop-shadow-md" to="/product">
      <img src={ImageProduct} alt="" className='w-full'/>
      <div className="flex px-6 py-2 justify-between">
        <div className="flex flex-col">
          Rp 35.000
          <br/>
          XL
        </div>
        <div className="flex flex-col text-xs">
          Donate
          <div className='text-xl'>70%</div>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem