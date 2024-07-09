import googleLogo from "../../assets/google-logo.png";
import facebookLogo from "../../assets/facebook-logo.png";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="flex flex-col flex-wrap space-y-5 justify-center items-center mb-10">
        <div className="flex md:items-center md:text-center h-full w-screen md:px-12 md:py-4 px-4 py-2">
          <Link to={"/"} className="border rounded px-2 bg-gray-300 w-fit">
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
          </Link>
        </div>
        <div className="">
          <svg
            width="267"
            height="70"
            viewBox="0 0 267 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M233 52H246" stroke="white" stroke-width="3" />
            <path
              d="M52.77 32.0761L19.1002 57.4647"
              stroke="#918F8E"
              stroke-opacity="0.6"
              stroke-width="3"
            />
            <path d="M69 20L119.97 56.6333" stroke="#1E1E1E" stroke-width="3" />
            <circle
              cx="68.2482"
              cy="20.2481"
              r="20"
              transform="rotate(-42.1065 68.2482 20.2481)"
              fill="black"
            />
            <ellipse
              cx="247.99"
              cy="57.027"
              rx="12.5"
              ry="13"
              transform="rotate(-42.1065 247.99 57.027)"
              fill="#1E1E1E"
            />
            <line
              x1="246.004"
              y1="56.5"
              x2="119"
              y2="55.5"
              stroke="black"
              stroke-opacity="0.4"
              stroke-width="3"
            />
            <path
              d="M234.981 56.4453L248.019 56.554"
              stroke="white"
              stroke-width="3"
            />
            <ellipse
              cx="172.99"
              cy="57.027"
              rx="12.5"
              ry="13"
              transform="rotate(-42.1065 172.99 57.027)"
              fill="#FF6600"
            />
            <path
              d="M68.1035 20.0742L52.3651 32.3524"
              stroke="white"
              stroke-width="3"
            />
            <path
              d="M41.7998 39H0.90625V3.96582H15.6035V30.333H41.7998V39ZM118.899 39.7568C110.241 39.7568 103.868 37.9746 99.7832 34.4102C96.1699 31.2526 94.3633 26.9557 94.3633 21.5195C94.3633 16.0671 96.1699 11.762 99.7832 8.60449C103.868 5.04004 110.241 3.25781 118.899 3.25781C123.831 3.25781 127.933 3.8112 131.204 4.91797C134.476 6.02474 137.039 7.53841 138.895 9.45898C140.766 11.3633 142.044 13.5605 142.728 16.0508H127.005C125.361 13.7884 122.659 12.6572 118.899 12.6572C115.351 12.6572 112.739 13.6745 111.062 15.709C109.728 17.3529 109.061 19.2897 109.061 21.5195C109.061 23.7493 109.728 25.6781 111.062 27.3057C112.739 29.3402 115.351 30.3574 118.899 30.3574C121.764 30.3574 123.912 30.1133 125.345 29.625C126.793 29.1204 127.851 28.4694 128.519 27.6719H122.781V21.5195H142.728V39.0244H136.624L135.379 35.6309C131.489 38.3815 125.996 39.7568 118.899 39.7568Z"
              fill="black"
            />
            <path
              d="M174.71 39H149.588V3.99023H175.247C179.804 3.99023 183.556 4.20182 186.502 4.625C189.448 5.0319 191.718 5.68294 193.313 6.57812C194.909 7.45703 195.991 8.58008 196.561 9.94727C197.13 11.3145 197.415 12.9502 197.415 14.8545C197.366 16.3519 196.951 17.597 196.17 18.5898C195.405 19.5664 194.502 20.2988 193.46 20.7871C192.435 21.2591 191.531 21.4951 190.75 21.4951C191.515 21.4951 192.41 21.6497 193.436 21.959C194.461 22.252 195.454 22.6833 196.414 23.2529C197.391 23.8226 198.196 24.5143 198.831 25.3281C199.482 26.1419 199.808 27.0697 199.808 28.1113C199.808 29.4785 199.645 30.7318 199.319 31.8711C199.01 33.0104 198.375 34.0195 197.415 34.8984C196.471 35.7773 195.071 36.526 193.216 37.1445C191.36 37.7467 188.927 38.2106 185.916 38.5361C182.921 38.8454 179.186 39 174.71 39ZM173.88 18.4922C176.028 18.4922 177.688 18.3864 178.86 18.1748C180.049 17.9632 180.87 17.6458 181.326 17.2227C181.782 16.7832 182.01 16.2298 182.01 15.5625C182.01 14.8789 181.782 14.3255 181.326 13.9023C180.87 13.4629 180.049 13.1455 178.86 12.9502C177.688 12.7386 176.028 12.6328 173.88 12.6328H164.285V18.4922H173.88ZM173.88 30.3574C176.077 30.3574 177.859 30.3005 179.227 30.1865C180.594 30.0726 181.595 29.8122 182.229 29.4053C182.864 28.9984 183.182 28.3392 183.182 27.4277C183.182 26.5163 182.864 25.8571 182.229 25.4502C181.595 25.027 180.594 24.7666 179.227 24.6689C177.859 24.555 176.077 24.498 173.88 24.498H164.285V30.3574H173.88ZM220.389 39H205.691V3.96582H220.389V39ZM266.971 39H226.492V30.3574L249.661 12.6328H226.492V3.99023H266.971V12.6328L243.777 30.3574H266.971V39Z"
              fill="#FF6600"
            />
            <path
              d="M27.9289 48.2747C32.5578 53.3964 32.1583 61.3009 27.0365 65.9298C21.9148 70.5587 14.0103 70.1592 9.38138 65.0374C4.75247 59.9157 5.152 52.0112 10.2737 47.3823C15.3955 42.7534 23.3 43.1529 27.9289 48.2747Z"
              fill="#FF6600"
            />
          </svg>
        </div>
        <div className="flex justify-center items-center text-center w-full">
          <h1 className="md:text-3xl font-bold flex justify-between">
            {"Sign Up for free to enhance your business."}
          </h1>
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
        <div className="flex items-center justify-center text-center md:py-10">
          <button className="p-1 border px-10 rounded-md bg-[#FF6600] text-white hover:bg-black">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
