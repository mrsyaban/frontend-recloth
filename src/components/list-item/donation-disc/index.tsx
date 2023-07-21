import { useState, useEffect, useRef } from "react";
import Select, { ActionMeta } from "react-select";

import InfoIcon from "./../../../assets/info_icon.svg";
import "./style.css";

interface Props {
  donationDisc: number;
  setDonationDisc: (value: number) => void;
}

const DonationDisc = (props: Props) => {
  const { donationDisc, setDonationDisc } = props;
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const infoRef = useRef<HTMLDivElement>(null);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      infoRef.current &&
      event.target &&
      !infoRef.current.contains(event.target as Node)
    ) {
      setShowInfo(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [showInfo]);

  const onHandleChange = (
    option: { value: number; label: string } | null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _actionMeta: ActionMeta<{ value: number; label: string }>
  ) => {
    if (option) {
      setDonationDisc(option.value);
      {
        donationDisc;
      }
    }
  };

  const options = [];

  for (let i = 0; i <= 100; i++) {
    options.push({ value: i, label: i.toString() });
  }

  return (
    <div className="flex pb-10 flex-col">
      <div className="flex">
        Donation Discount
        <button className="info-button pl-2 pt-1" onClick={toggleInfo}>
          <img src={InfoIcon} alt="" className="w-5" />
        </button>
      </div>
      <div className="flex space-x-2 ">
        <Select
          name="DonationDisc"
          defaultValue={options[0]}
          options={options}
          className="pt-2"
          onChange={onHandleChange}
        />
        <span className="text-slate-500 font-bold text-2xl self-center pt-2">%</span>
      </div>
      <div className={`info-popout ${showInfo ? "info-popout-show" : ""}`}>
        contribute to charity by give a special discount to customers who wish
        to donating your item to charity
      </div>
    </div>
  );
};

export default DonationDisc;
