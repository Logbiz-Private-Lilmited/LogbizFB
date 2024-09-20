import { input } from "@testing-library/user-event/dist/cjs/event/input.js";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import BackButton from "../components/BackButtonModule/BackButton";

export const ContactView = () => {
  const inputCSS =
    "border rounded-sm p-2 md:w-fit w-full placeholder:text-sm mt-2 placeholder:text-gray-800";

  return (
    <>
      <div className="w-full flex flex-start items-center md:text-center sm:py-0 md:py-0">
        <BackButton />
        <div className="flex justify-center items-center m-auto">
          <h1 className="font-bold mb-0">
            Contact us
          </h1>
        </div>
      </div>
      <form
        action=""
        className="md:w-full flex flex-col lg:px-24 gap-24 my-2 text-xl"
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
