import Select, {ActionMeta} from "react-select";

interface GenderProps {
  gender: string;
  setGender: (value: string) => void;
}

const GenderCategory = (props: GenderProps) => {
  const { gender, setGender } = props;

  const onHandleChange = (
    option: { value: string; label: string } | null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _actionMeta: ActionMeta<{ value: string; label: string }>
  ) => {
    if (option) {
      setGender(option.value);
      {
        gender;
      }
    }
  };

  const genderOptions = [
    { value: "men", label: "Men" },
    { value: "women", label: "Women" },
    { value: "unisex", label: "Unisex" },
  ];

  return (
    <div className="flex flex-col">
      Category by Gender
      <Select
        className="pt-2"
        options={genderOptions}
        onChange={onHandleChange}
      />
    </div>
  );
};
export default GenderCategory;
