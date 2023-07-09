const ProductDesc = () => {
  return (
    <div className="flex flex-col w-full space-y-10">
      <table className="table-fixed w-full space-y-2">
        <tr className="flex justify-between">
          <th scope="row"> Size </th>
          <td>L</td>
        </tr>
        <hr className="h-0.5 bg-grey"/>
        <tr className="flex justify-between">
          <th scope="row"> P x L </th>
          <td>35 x 70 cm</td>
        </tr>
        <hr className="h-0.5 bg-grey"/>
        <tr className="flex justify-between">
          <th scope="row"> Brand </th>
          <td>UMKM</td>
        </tr>
        <hr className="h-0.5 bg-grey"/>
        <tr className="flex justify-between">
          <th scope="row"> Condition </th>
          <td>good</td>
        </tr>
        <hr className="h-0.5 bg-grey"/>
      </table>
      <p className="text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};
export default ProductDesc;
