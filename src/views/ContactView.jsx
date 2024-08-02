import { input } from "@testing-library/user-event/dist/cjs/event/input.js";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const ContactView = () => {
  const inputCSS =
    "border rounded-sm p-2 md:w-fit w-full placeholder:text-sm mt-2 placeholder:text-gray-800";

  return (
    <>
      <div className="flex justify-between md:items-center md:text-center h-full w-screen md:px-12 md:py-4 px-4 py-2">
        <a
          href="/registerCarousel"
          className="border rounded-lg px-2 bg-gray-300 w-fit"
        >
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
        </a>
        <div className="flex justify-center items-center text-center w-fit">
          <h1 className="md:text-xl font-bold flex justify-between">
            Contact us
          </h1>
        </div>
        <div className="w-fit">Request ID:{123}</div>
      </div>
      <form
        action=""
        className="md:w-full flex flex-col lg:px-24 gap-24 my-2 mx-8 text-xl"
      >
        <div className="w-full flex md:flex-row flex-col md:justify-around md:gap-24 gap-6 ">
          <label htmlFor="firstName" className="flex flex-col gap-2">
            Phone
            <span>+91 9620777650</span>
          </label>

          <label htmlFor="lastName" className="flex flex-col gap-2">
            E-mail
            <span>info@logbizgroup.com</span>
          </label>
          <label htmlFor="email" className="flex flex-col gap-2">
            Social Media
            <div className="flex items-end justify-center gap-3 w-fit">
              <FaFacebookF />
              <FaXTwitter />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
          </label>
        </div>
        <div className="w-full flex md:justify-around md:flex-row flex-col">
          <label htmlFor="firstName" className="flex flex-col">
            First Name{" "}
            <input type="text" className={inputCSS} placeholder="First Name" />
          </label>

          <label htmlFor="lastName" className="flex flex-col">
            Last Name
            <input type="text" className={inputCSS} placeholder="Last Name" />
          </label>
          <label htmlFor="email" className="flex flex-col">
            Email
            <input type="email" className={inputCSS} placeholder="Email" />
          </label>
        </div>
        <div className="md:mx-24">
          <label htmlFor="message" className="flex flex-col">
            Message
            <textarea
              name="message"
              id="message"
              className="border-black border rounded-sm p-2 w-full placeholder:text-sm mt-2 placeholder:text-gray-800"
              cols={114}
              rows={6}
            ></textarea>
          </label>
        </div>
        <div className="md:col-span-2 lg:col-span-4 flex justify-end w-full">
          <button
            type="submit"
            className="border rounded-md px-8 py-1 text-sm bg-gray-200"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
