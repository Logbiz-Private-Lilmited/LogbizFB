import PinterestIcon from "../../assets/footerAssets/pinterest.png";
import FrameIcon from "../../assets/footerAssets/Frame.png";
import FacebookIcon from "../../assets/footerAssets/facebook.png";
import InstagramIcon from "../../assets/footerAssets/instagram.png";
import LinkedinIcon from "../../assets/footerAssets/linkedin.png";
import YoutubeIcon from "../../assets/footerAssets/youtube.png";
import BackToTopButton from "../BackButtonModule/BackToTopButton";
// Added hover effect for links
import "../../../src/index.css";

const Footer = () => {
  return (
    <footer className="h-full p-4 md:p-8 w-[98%] rounded-md bg-[#dfdfdf] m-auto mb-4">
      <h3 className="font-bold text-2xl mb-2">Contact Us</h3>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#515151]">
        {/* Contact Information */}
        <div className="flex flex-col gap-y-2">
          <h5 className="text-lg font-semibold">Email</h5>
          <span>
            <a href="mailto:info@logbizgroup.com" className="footer-link">
              info@logbizgroup.com
            </a>
          </span>
          <h5 className="text-lg font-semibold">Phone </h5>
          <ul>
            <li>
              <a href="tel:+919620777650" className="footer-link">
                +91 9620777650
              </a>
            </li>
            <li>
              <a href="tel:+919620777650" className="footer-link">
                +91 9620777650
              </a>
            </li>
            <li>
              <a href="tel:+919620777650" className="footer-link">
                +91 9620777650
              </a>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-y-2">
          <h5 className="text-lg font-semibold">Links</h5>
          <ul>
            <li>
              <a href="/pallet-guide" className="footer-link">
                Pallet Guide
              </a>
            </li>
            <li>
              <a href="/contact-us" className="footer-link">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/blogs" className="footer-link">
                Blogs
              </a>
            </li>
            <li>
              <a href="/terms-and-conditions" className="footer-link">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="footer-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/refund-cancellation-policy" className="footer-link">
                Refund and Cancellation Policy
              </a>
            </li>
            <li>
              <a href="/shipping-delivery-policy" className="footer-link">
                Shipping and Delivery Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Address and Social Media */}
        <div className="flex flex-col gap-y-4">
          <p className="text-md">
            Logbiz Pvt Ltd,
            <br />
            Building, Survey No 17/1, Kadubeesanahalli,
            <br />
            Outer Ring Road, Marathahalli,
            <br />
            Bangalore - 560103 Branch Office: 1020, Sector 36,
            <br /> Chandigarh
          </p>
          <nav className="flex justify-start items-center gap-x-4 flex-wrap">
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width={30}
                height={30}
                src={PinterestIcon}
                alt="pinterest_logo"
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width={30} height={30} src={FrameIcon} alt="" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width={30}
                height={30}
                src={FacebookIcon}
                alt="facebook_logo"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width={30}
                height={30}
                src={InstagramIcon}
                alt="instagram_logo"
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width={30}
                height={30}
                src={LinkedinIcon}
                alt="linkedin_logo"
              />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width={30}
                height={30}
                src={YoutubeIcon}
                alt="youtube_logo"
              />
            </a>
          </nav>
          <BackToTopButton />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
