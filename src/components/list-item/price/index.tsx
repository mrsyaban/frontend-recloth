interface CatProps {
  price: number;
  setPrice: (value: number) => void;
}

const Price = (props: CatProps) => {
  const { price, setPrice } = props;

  return (
    <div className="flex flex-col">
      Price
      <div className="flex space-x-2 mt-2">
        <span className="text-slate-500 font-bold self-center">Rp</span>
        <input
          type="number"
          onChange={(e) => {
            setPrice(Number(e.target.value));
            {price}
          }}
          value={price}
          className="border border-bold border-slate-400 rounded-sm p-1 pl-3"
        />
      </div>
    </div>
  );
};
export default Price;
