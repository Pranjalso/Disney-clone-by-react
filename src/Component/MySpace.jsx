import { useState } from "react";

const MySpace = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  // Function to handle login
  const handleLogin = () => {
    if (phoneNumber.length === 10) {
      setMessage("Login successful! Redirecting...");
      setTimeout(() => {
        setIsLoggedIn(true);
        setModalOpen(false);
      }, 2000); // Simulates redirect delay
    } else {
      setMessage("Please enter a valid 10-digit mobile number.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Main Login Section */}
      {/* Login Screen (before login)
      Welcome Screen (after login) */}


      {!isLoggedIn ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold">Login to Disney+ Hotstar</h1>
          <p className="text-gray-400 mt-2">
            Start watching from where you left off, personalize for kids, and more.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Log In
          </button>
        </div>
      ) : (
        <h1 className="text-2xl font-bold text-green-500">Welcome to Disney+ Hotstar!</h1>
      )}

      {/* Login Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-gray-900 p-6 rounded-lg w-96 text-center relative">
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-3 text-gray-400 hover:text-white"
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4">
              Login or sign up to continue
            </h2>
            <p className="text-gray-400 mb-4">
              Scan QR code or enter phone number to login
            </p>

            {/* QR Code Login */}

            {/* Uses an API (qrserver.com) to generate a QR code dynamically. */}
            <div className="flex flex-col items-center">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.hotstar.com"
                alt="QR Code"
                className="w-40 h-40 mb-4"
              />
              <p className="text-gray-400">Use Camera App to Scan QR</p>
            </div>

            {/* Phone Number Login */}
            <div className="mt-4">
              <input
                type="tel"
                placeholder="Enter mobile number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-gray-800 border-gray-600 text-white"
              />
              <button
                onClick={handleLogin}
                className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
              >
                Continue
              </button>
              {/* Show message for validation or success */}
              {message && <p className="text-sm text-gray-300 mt-2">{message}</p>}
            </div>

            {/* Privacy Policy Notice */}
            <p className="text-gray-500 text-sm mt-2">
              By proceeding, you confirm that you are above 18 years of age and
              agree to the{" "}
              <span className="text-blue-400 cursor-pointer">Privacy Policy</span> &{" "}
              <span className="text-blue-400 cursor-pointer">Terms of Use</span>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MySpace;