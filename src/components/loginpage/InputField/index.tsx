import { useState } from "react";

import Profile from "./../../../assets/user_icon.svg";
import Lock from "./../../../assets/lock_icon.svg";

const InputField = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col space-y-5">
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
  )
}

export default InputField;