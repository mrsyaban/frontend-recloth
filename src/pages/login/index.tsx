import { useState } from "react";

import Profile from "./../../assets/user_icon.svg";
import Lock from "./../../assets/lock_icon.svg";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex bg-grey h-screen">
      <div className="flex flex-col bg-cream w-[60vh] self-center mx-auto p-10 rounded-md space-y-7">
        <h1 className="flex font-bold text-black text-3xl self-center">
          Log in to ReCloth
        </h1>
        <div className="flex flex-col space-y-2">
          <div className="flex border-[1px] rounded border-black p-2 space-x-2">
            <img src={Profile} alt="user-icon" className="w-5" />
            <input
              placeholder="username"
              name="password"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-transparent outline-none"
            />
          </div>
          <div className="flex border-[1px] rounded border-black p-2 space-x-2">
            <img src={Lock} alt="user-icon" className="w-5" />
            <input
              placeholder="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="flex bg-black rounded justify-center py-2 text-cream font-bold">
          L O G I N
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
