import ImageProduct from './../../../assets/images/product_image.png'

const ProductItem = () => {
  return (
    <div className="flex flex-col bg-cream drop-shadow-md">
      <img src={ImageProduct} alt="" className='w-full'/>
      <div className="flex px-8">
        <div className="flex flex-col">
          XL
        </div>
        <div className="flex flex-col">

        </div>
      </div>
    </div>
  )
}

export default ProductItem