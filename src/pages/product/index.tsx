import ImageProduct from './../../assets/images/product_image.png'
import ProductDesc from '../../components/product/product-desc'

const ProductPage = () => {
  return (
    <div className='flex px-96 pt-32 justify-between'>
      <img src={ImageProduct} alt='product image' className='w-2/6 h-80'/>
      <div className='flex flex-col w-2/6 space-y-11'>
        <h1 className='text-6xl font-bold'> Jaket Ngab </h1>
        <h2 className='text-3xl font-bold'> Rp 35.000</h2>
        <ProductDesc/>
        <div className='flex flex-col h-32 space-y-4 font-bold'>
          <button className='bg-cream h-full text-grey'>
            TAMBAHKAN KE KERANJANG
          </button>
          <button className='bg-grey h-full text-cream'>
            DONASI
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage