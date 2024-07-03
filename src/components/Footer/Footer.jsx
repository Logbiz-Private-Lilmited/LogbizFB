import PinterestIcon from "../../assets/footerAssets/pinterest.png";
import FrameIcon from "../../assets/footerAssets/Frame.png";
import FacebookIcon from "../../assets/footerAssets/facebook.png";
import InstagramIcon from "../../assets/footerAssets/instagram.png";
import LinkedinIcon from "../../assets/footerAssets/linkedin.png";
import YoutubeIcon from "../../assets/footerAssets/youtube.png";

const Footer = () => {
  return (
    <footer className="h-full px-6 py-4 w-full bg-[#dfdfdf]">
      <section className="flex flex-col gap-y-2 text-[#4F4F4F] justify-center items-start">
        <h1 className="font-bold text-3xl mb-4">Contact Us</h1>
        <h3 className="text-xl">Phone & Email</h3>
        <h5 className="text-lg font-semibold">Email us at</h5>
        <a href="#">info@logbizgroup.com</a>
        <h5 className="text-lg font-semibold">Phone number</h5>
        <ul className="">
          <li>+91 9620777650</li>
          <li>+91 9620777650</li>
          <li>+91 9620777650</li>
        </ul>
        <h5 className="text-lg font-semibold">Links</h5>
        <ul className="underline">
          <li>Pllet Guudie</li>
          <li>Contact Us</li>
          <li>Blogs</li>
          <li>Terms and Condition</li>
          <li>Privacy Policy</li>
          <li>Refund and Cancellation Policy</li>
          <li>Shipping and Delivery Policy</li>
        </ul>
        <div className="flex justify-between w-full items-center">
          <p className="text-xs w-3/5">
            Logbiz Pvt Ltd, THE ADDRESS, Building, Survey No 17/1,
            Kadubeesanahalli, Outer Ring Road, Marathahalli, Bangalore - 560103
            Branch Office: 1020, Sector 36, Chandigarh
          </p>
          <nav className="flex justify-center items-center gap-x-7">
            <img
              width={30}
              height={30}
              src={PinterestIcon}
              alt="pinterest_logo"
            />
            <img width={30} height={30} src={FrameIcon} alt="" />
            <img
              width={30}
              height={30}
              src={FacebookIcon}
              alt="facebook_logo"
            />
            <img
              width={30}
              height={30}
              src={InstagramIcon}
              alt="instagram_logo"
            />
            <img
              width={30}
              height={30}
              src={LinkedinIcon}
              alt="linkedin_logo"
            />
            <img width={30} height={30} src={YoutubeIcon} alt="youtube_logo" />
          </nav>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
