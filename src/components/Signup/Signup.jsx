import googleLogo from "../../assets/google-logo.png";
import facebookLogo from "../../assets/facebook-logo.png";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useState } from "react";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [values, setValues] = useState({ email: "", password: "" });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="m-auto">
      <div className="flex flex-col flex-wrap space-y-10 justify-center items-center mb-10">
        <div className="flex justify-between md:items-center md:text-center h-full w-screen md:px-12 md:py-4 px-4 py-2">
          <button className="border rounded-lg px-2 bg-gray-300 w-fit">
            <svg
              fill="#000000"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 330 330"
              xmlSpace="preserve"
              stroke="#000000"
              transform="rotate(90)"
              className="md:h-[24px] md:w-[24px] h-[18px] w-[18px]"
            >
              <path
                id="XMLID_30_"
                d="M154.394,325.606C157.322,328.535,161.161,330,165,330s7.678-1.465,10.607-4.394l75-75 c5.858-5.857,5.858-15.355,0-21.213c-5.858-5.857-15.356-5.857-21.213,0L180,278.787V15c0-8.284-6.716-15-15-15 c-8.284,0-15,6.716-15,15v263.787l-49.394-49.394c-5.858-5.857-15.355-5.857-21.213,0c-5.858,5.857-5.858,15.355,0,21.213 L154.394,325.606z"
              />
            </svg>
          </button>
          <div className="flex justify-center items-center text-center w-full">
            <h1 className="md:text-3xl font-bold flex justify-between">
              {"Sign Up for free to enhance your business."}
            </h1>
          </div>
        </div>
        <button className="w-full max-w-sm h-11 rounded-full border-2 border-black flex justify-center items-center relative gap-2 font-semibold">
          <img
            className="absolute md:static left-[1rem]"
            src={googleLogo}
            height="30"
            width="30"
            alt="google logos"
          />
          Sign up with Google
        </button>
        <button className="w-96 h-11 rounded-full border-2 border-black flex justify-center items-center relative gap-2 font-semibold">
          <img
            className="absolute md:static left-[1rem]"
            src={facebookLogo}
            height="20"
            width="30"
            alt="facebook logo"
          />
          Sign up with Facebook
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
      <form
        className="md:flex hidden flex-col mt-10 items-center justify-center ml-8"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          id="Email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          className="border-2 border-[#E9E7E2] w-96 px-4 py-2 rounded-sm placeholder:text-[#393938] placeholder:text-base my-3"
        />
        <div className="relative w-96 my-3">
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            id="Password"
            placeholder="Create a Password"
            value={values.password}
            onChange={handleChange}
            className="border-2 border-[#E9E7E2] w-full px-4 py-2 rounded-sm placeholder:text-[#393938] placeholder:text-base"
          />
          <div
            className="absolute top-4 right-2 flex items-center pr-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <LuEyeOff /> : <LuEye />}
          </div>
        </div>
        <div className="flex items-center justify-center text-center md:py-10 w-full">
          <button className="w-1/4 p-1 border rounded-md bg-[#FF6600] text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
