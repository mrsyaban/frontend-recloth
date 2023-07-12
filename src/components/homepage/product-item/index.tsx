import {Link} from 'react-router-dom';

import ImageProduct from './../../../assets/images/product_image.png'

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
    <Link className="flex flex-col bg-cream drop-shadow-md" to={`/product/${id}`}>
      <div className={`bg-[url(${ImageProduct})]`}>
        <img src={img_url} alt="image" className='w-full'/>
      </div>
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