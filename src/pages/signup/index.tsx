import { Link, useNavigate } from "react-router-dom";
import InputField from "./../../components/signup/register/index";
import { useState } from "react";
import axios from "axios";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSignUp = async () => {
    try {
      const response = await axios.post("https://reclothserver.azurewebsites.net/auth/register", {
        // const response = await axios.post("http://localhost:8080/auth/register", {
        email,
        username,
        password,
        balance: 100000,
        withCredentials: true,
      })

      console.log(response.data);
      navigate("/login");
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
        <Link className="text-black self-center round" to="/login">
          <button className="bg-cream rounded p-3 text-black font-bold">
            LOG IN
          </button>
        </Link>
      </div>
      <div className="flex flex-col bg-cream w-[60vh] my-auto mx-auto p-10 rounded-md space-y-10">
        <h1 className="flex font-bold text-black text-3xl self-center">
          CREATE ACCOUNT
        </h1>
        <InputField 
          email= {email}
          username= {username}
          password= {password}
          setEmail= {setEmail}
          setUsername= {setUsername}
          setPassword= {setPassword}
        />
        <button className="flex bg-black rounded justify-center py-2 text-cream font-bold" onClick={handleSignUp}>
          S I G N &nbsp; U P
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
