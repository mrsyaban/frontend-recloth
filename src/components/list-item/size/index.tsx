import Select, {ActionMeta} from "react-select";

interface SizeProps {
  size: string;
  setSize: (value: string) => void;
}


const Size = (props: SizeProps) => {
  const { size, setSize } = props;

  const options = [
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' },
    { value: 'XXXL', label: 'XXXL' },
  ];

  const onHandleChange = (
    option: { value: string; label: string } | null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _actionMeta: ActionMeta<{ value: string; label: string }>
  ) => {
    if (option) {
      setSize(option.value);
      {
        size;
      }
    }
  };

  return (
    <div className="flex flex-col">
      Size
      <Select
        options={options}
        className="pt-2"
        onChange={onHandleChange}
      />
    </div>
  );
};
export default Size;