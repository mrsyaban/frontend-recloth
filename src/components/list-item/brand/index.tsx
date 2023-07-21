import Select, {ActionMeta} from "react-select";

interface BrandProps {
  brand: string;
  setBrand: (value: string) => void;
}

const Brand = (props: BrandProps) => {
  const { brand, setBrand } = props;

  const onHandleChange = (
    option: { value: string; label: string } | null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _actionMeta: ActionMeta<{ value: string; label: string }>
  ) => {
    if (option) {
      setBrand(option.value);
      {
        brand;
      }
    }
  };

  const options = [
    { value: 'erigo', label: 'erigo' },
    { value: 'roughneck', label: 'roughneck' },
    { value: 'house and smith', label: 'house and smith' },
    { value: 'russco', label: 'russco' },
    { value: '4.20 society', label: '4.20 society' },
    { value: 'nevada', label: 'nevada' },
    { value: 'others', label: 'others' },
  ];

  return (
    <div className="flex flex-col">
      Brand
      <Select
        options={options}
        className="pt-2"
        onChange={onHandleChange}
      />
    </div>
  );
};
export default Brand;
