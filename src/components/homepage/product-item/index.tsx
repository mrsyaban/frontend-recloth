import {Link} from 'react-router-dom';

import ImageProduct from './../../../assets/images/product_image.png'

interface ProductItemProps {
  id: string;
  title: string;
  description: string;
  size: string;
  quantity: number;
  price: number;
  img_url: string;
  donate_discount: number;
}

const ProductItem = (props: ProductItemProps) => {
  const { id, title, description, size, quantity, price, img_url, donate_discount } = props;

  return (
    <Link className="flex flex-col bg-cream drop-shadow-md" to="/product">
      <img src={img_url} alt="" className='w-full'/>
      <div className="flex px-6 py-2 justify-between">
        <div className="flex flex-col">
          Rp {price}
          <br/>
          {size}
        </div>
        <div className="flex flex-col text-xs">
          Donate
          <div className='text-xl'>{donate_discount*100}%</div>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem