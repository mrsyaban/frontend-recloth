import { useState } from "react";
import { Link } from "react-router-dom";
import Register from "../../components/signup/register";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    const item = { email, username, password };
    console.warn(item);
  };

  return (
    <div className="flex flex-col bg-grey h-screen">
      <div className="flex justify-end mr-16 mt-10 space-x-5">
        <Link className="text-black self-center round" to="/">
          HOME
        </Link>
        <button className="bg-cream rounded p-3 text-black font-bold">
          LOG IN
        </button>
      </div>
      <div className="flex flex-col bg-cream w-[60vh] my-auto mx-auto p-10 rounded-md space-y-10">
        <h1 className="flex font-bold text-black text-3xl self-center">
          CREATE ACCOUNT
        </h1>
        <Register
          email={email}
          username={username}
          password={password}
          setEmail={setEmail}
          setUsername={setUsername}
          setPassword={setPassword}
        />
        <button
          onClick={signUp}
          className="flex bg-black rounded justify-center py-2 text-cream font-bold"
        >
          S I G N &nbsp; U P
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
