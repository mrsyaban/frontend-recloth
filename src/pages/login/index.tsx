import { Link } from "react-router-dom";
import InputField from "../../components/loginpage/InputField";

const LoginPage = () => {

  return (
    <div className="flex flex-col bg-grey h-screen">
      <div className="flex justify-end mr-16 mt-10 space-x-5">
        <Link className="text-black self-center round" to="/">
          HOME
        </Link>
        <button className="bg-cream rounded p-3 text-black font-bold">
          SIGN UP
        </button>
      </div>
      <div className="flex flex-col bg-cream w-[60vh] my-auto mx-auto p-10 rounded-md space-y-10">
        <h1 className="flex font-bold text-black text-3xl self-center">
          Log in to ReCloth
        </h1>
        <InputField/>
        <div className="flex bg-black rounded justify-center py-2 text-cream font-bold">
          L O G I N
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
