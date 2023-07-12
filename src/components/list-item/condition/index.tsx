import Select, {ActionMeta} from "react-select";

interface CatProps {
  condition: string;
  setCondition: (value: string) => void;
}

const Condition = (props: CatProps) => {
  const { condition, setCondition } = props;

  const onHandleChange = (
    option: { value: string; label: string } | null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _actionMeta: ActionMeta<{ value: string; label: string }>
  ) => {
    if (option) {
      setCondition(option.value);
      {
        condition;
      }
    }
  };

  const options = [
    { value: 'excellent', label: 'excellent' },
    { value: 'very good', label: 'very good' },
    { value: 'good', label: 'good' },
    { value: 'average', label: 'average' },
    { value: 'below average', label: 'below average' },
    { value: 'poor', label: 'poor' },
  ];

  return (
    <div className="flex flex-col">
      Condition
      <Select
        options={options}
        className="pt-2"
        onChange={onHandleChange}
      />
    </div>
  );
};
export default Condition;
