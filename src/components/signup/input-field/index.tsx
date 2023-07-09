import { useState } from "react";

import Profile from "./../../../assets/user_icon.svg";
import Lock from "./../../../assets/lock_icon.svg";
import Mail from "./../../../assets/mail_icon.svg";

const InputField = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex border-[1px] rounded border-black p-2 pl-4 space-x-4">
        <img src={Mail} alt="user-icon" className="w-5" />
        <input
          placeholder="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent outline-none"
        />
      </div>
      <div className="flex border-[1px] rounded border-black p-2 pl-4 space-x-4">
        <img src={Profile} alt="user-icon" className="w-5" />
        <input
          placeholder="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-transparent outline-none"
        />
      </div>
      <div className="flex border-[1px] rounded border-black p-2 pl-4 space-x-4">
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
  );
};

export default InputField;
