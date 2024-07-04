import googleLogo from "../../assets/google-logo.png";
import facebookLogo from "../../assets/facebook-logo.png";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useState } from "react";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="m-auto">
      <div className="flex flex-col flex-wrap space-y-10 justify-center items-center mb-10">
        <h1 className="text-black text-center text-3xl md:text-4xl font-bold">
          Sign Up for free to enhance your business.
        </h1>
        <button className="w-full max-w-sm h-11 rounded-full border-2 border-black flex justify-center items-center relative gap-2 font-semibold">
          <img
            className="absolute md:static left-[1rem]"
            src={googleLogo}
            height="30"
            width="30"
            alt="google logos"
          />
          sign up with Google
        </button>
        <button className="w-96 h-11 rounded-full border-2 border-black flex justify-center items-center relative gap-2 font-semibold">
          <img
            className="absolute md:static left-[1rem]"
            src={facebookLogo}
            height="20"
            width="30"
            alt="f3cebook logo"
          />
          sign up with Facebook
        </button>
      </div>
      <span className="block text-center font-semibold text-lg md:hidden mb-8">
        Register as a Consumer
      </span>
      <div className="flex justify-center items-center">
        <div className="h-[1px] w-64 bg-[#4f4f4f]"></div>
        <span className="mx-2">or</span>
        <div className="h-[1px] w-64 bg-[#4f4f4f]"></div>
      </div>
      <span className="block text-center font-semibold text-lg md:hidden mt-8">
        Register as a Logistic service provider
      </span>
      <div className="md:flex hidden flex-col mt-10 items-center justify-center">
        <input
          type="email"
          name="Email"
          id="Email"
          placeholder="Email"
          className="border-2 border-[#E9E7E2] w-96 px-4 py-2 rounded-sm placeholder:text-[#393938] placeholder:text-base my-3"
        />
        <div className="relative w-96 my-3">
          <input
            type={passwordVisible ? "text" : "password"}
            name="Password"
            id="Password"
            placeholder="Create a Password"
            className="border-2 border-[#E9E7E2] w-full px-4 py-2 rounded-sm placeholder:text-[#393938] placeholder:text-base"
          />
          <span
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <LuEyeOff /> : <LuEye />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
