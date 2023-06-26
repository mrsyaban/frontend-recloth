import ImageProduct from './../../assets/images/product_image.png'

const ProductPage = () => {
  return (
    <div className='px-32'>
      <img src={ImageProduct} alt='product image' className='w-2/6'/>
      <div className='flex flex-col w-2/6'>
        <h1> Jaket Ngab </h1>
        <h2> Rp 35.000</h2>
        <p>
          XL
          <br/>
          Panjang : 58cm
          <br/>
          Lebar : 58cm
        </p>
        <div>
          <button className='bg-cream'>
            TAMBAHKAN KE KERANJANG
          </button>
          <button className='bg-grey'>
            DONASI
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage