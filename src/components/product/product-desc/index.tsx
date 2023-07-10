interface ProductDescProps {
  size: string,
  condition: string,
  brand: string,
  description: string,
}
const ProductDesc = (props: ProductDescProps) => {
  const { size, condition, brand, description } = props;

  return (
    <div className="flex flex-col w-full space-y-10">
      <table className="table-fixed w-full space-y-2">
        <tr className="flex justify-between">
          <th scope="row"> Size </th>
          <td>{size}</td>
        </tr>
        <hr className="h-0.5 bg-grey"/>
        <tr className="flex justify-between">
          <th scope="row"> Brand </th>
          <td>{brand}</td>
        </tr>
        <hr className="h-0.5 bg-grey"/>
        <tr className="flex justify-between">
          <th scope="row"> Condition </th>
          <td>{condition}</td>
        </tr>
        <hr className="h-0.5 bg-grey"/>
      </table>
      <p className="text-black">
        {description}
      </p>
    </div>
  );
};
export default ProductDesc;
