import Select, { ActionMeta } from "react-select";

interface QuantProps {
  quantity: number;
  setQuantity: (value: number) => void;
}

const Quantity = (props: QuantProps) => {
  const { quantity, setQuantity } = props;

  const onHandleChange = (
    option: { value: number; label: string } | null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _actionMeta: ActionMeta<{ value: number; label: string }>
  ) => {
    if (option) {
      setQuantity(option.value);
      {
        quantity;
      }
    }
  };

  const options = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
  ];

  return (
    <div className="flex flex-col">
      Quantity
      <Select
        name="Quantity"
        defaultValue={options[0]}
        options={options}
        className="pt-2"
        onChange={onHandleChange}
      />
    </div>
  );
};

export default Quantity;
