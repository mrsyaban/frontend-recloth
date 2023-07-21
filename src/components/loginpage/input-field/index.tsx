import Profile from "./../../../assets/user_icon.svg";
import Lock from "./../../../assets/lock_icon.svg";

interface InputFieldProps {
  username: string;
  password: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}
const InputField = (props: InputFieldProps) => {
  return (
    <div className="flex flex-col space-y-5">
          <div className="flex border-[1px] rounded border-black p-2 space-x-2">
            <img src={Profile} alt="user-icon" className="w-5" />
            <input
              placeholder="username"
              name="password"
              value={props.username}
              onChange={(e) => props.setUsername(e.target.value)}
              className="w-full bg-transparent outline-none"
            />
          </div>
          <div className="flex border-[1px] rounded border-black p-2 space-x-2">
            <img src={Lock} alt="user-icon" className="w-5" />
            <input
              placeholder="password"
              name="password"
              type="password"
              value={props.password}
              onChange={(e) => props.setPassword(e.target.value)}
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>
  )
}

export default InputField;