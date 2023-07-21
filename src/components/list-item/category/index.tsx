import Select, {ActionMeta} from "react-select";

interface CatProps {
  category: string;
  setCategory: (value: string) => void;
}

const Category = (props: CatProps) => {
  const { category, setCategory } = props;

  const onHandleChange = (
    option: { value: string; label: string } | null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _actionMeta: ActionMeta<{ value: string; label: string }>
  ) => {
    if (option) {
      setCategory(option.value);
      {
        category;
      }
    }
  };

  const options = [
    { value: 't-shirt', label: 't-shirt' },
    { value: 'shirt', label: 'shirt' },
    { value: 'outerwear', label: 'outerwear' },
  ];

  return (
    <div className="flex flex-col">
      Category
      <Select
        options={options}
        className="pt-2"
        onChange={onHandleChange}
      />
    </div>
  );
};
export default Category;
