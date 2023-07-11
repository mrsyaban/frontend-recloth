import { Link } from "react-router-dom";
import InputField from "../../components/loginpage/InputField";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const printHeaders = (headers) => {
    for (const [key, value] of Object.entries(headers)) {
      console.log(`${key}: ${value}`);
    }
  };
  
  const handleLogin = async() => {
    try {
      console.log("eee");
      // axios.defaults.withCredentials=true;
      const response = await axios.post(
        "https://reclothserver.azurewebsites.net/auth/login",
        {
          username,
          password,
        },
      )
      
      console.log(response.data);
      console.log(response.headers);
      printHeaders(response.headers);
      // Mengakses cookie dari respons
      const cookie = await response.headers['Set-Cookie'];
      console.log(cookie);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col bg-grey h-screen">
      <div className="flex justify-end mr-16 mt-10 space-x-5">
      <Link className="text-black self-center round" to="/">
          HOME
        </Link>
        <Link className="text-black self-center round" to="/registry">
          <button className="bg-cream rounded p-3 text-black font-bold">
            SIGN UP
          </button>
        </Link>
      </div>
      <div className="flex flex-col bg-cream w-[60vh] my-auto mx-auto p-10 rounded-md space-y-10">
        <h1 className="flex font-bold text-black text-3xl self-center">
          Log in to ReCloth
        </h1>
        <InputField 
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
        <button 
          className="flex bg-black rounded justify-center py-2 text-cream font-bold"
          onClick={handleLogin}
        >
          L O G I N
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
