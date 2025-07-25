import { FaFacebookF } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import googleplay from '../assets/Google-Play-.png'
const Footer = () => {
  return (
    <footer className="bg-[#16181F] text-gray-400 py-8 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        {/* Company Section */}
        <div>
          <h3 className="text-white font-semibold mb-2">Company</h3>
          <ul>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>

        {/* Language Selection */}
        <div>
          <h3 className="text-white font-semibold mb-2">View Website in</h3>
          <p className="flex items-center">
            <span className="text-white mr-2">✔</span> English
          </p>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-white font-semibold mb-2">Need Help?</h3>
          <ul>
            <li><a href="#" className="hover:text-white">Visit Help Center</a></li>
            <li><a href="#" className="hover:text-white">Share Feedback</a></li>
          </ul>
        </div>

        {/* Social Media and App Links */}
        <div>
          <h3 className="text-white font-semibold mb-2">Connect with Us</h3>
          <div className="flex space-x-4 mb-4">
            <FaFacebookF className="text-white text-xl cursor-pointer" />
            <RxCross2 className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex space-x-4 items-center justify-center">
            <img src={googleplay} alt="Google Play" className="h-20 cursor-pointer" />
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10 cursor-pointer" />
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="text-left text-gray-500 text-l mt-6  pt-4">
        <p>© 2025 STAR. All Rights Reserved.</p>
        <p className="mt-2">
          <a href="#" className="hover:text-white">Terms Of Use</a> •
          <a href="#" className="hover:text-white mx-2">Privacy Policy</a> •
          <a href="#" className="hover:text-white">FAQ</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
