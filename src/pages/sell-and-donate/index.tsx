import Wearable from "./../../assets/images/wear.png";
import NonWearable from "./../../assets/images/non_wear.png";

const SellDonate = () => {
  return (
    <div className="flex flex-col w-[80%]  mx-auto space-y-10 mt-10 mb-10 font-bold text-xl">
      <h1 className="text-3xl ">SELL AND DONATE</h1>
      <div className="flex space-x-10">
        <button>
          <img src={Wearable} className="w-[450px]" />
        </button>
        <button>
          <img src={NonWearable} className="w-[450px]" />
        </button>
      </div>
    </div>
  );
};
export default SellDonate;
