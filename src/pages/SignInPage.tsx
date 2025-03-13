import logo from '/logo.svg';
import leftArt from '/leftArt.svg';
import rightArt from '/rightArt.svg';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();
  const loginwithgoogle = () => {
    console.log('clicked');
    window.open(`${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/google/callback`, '_self');
  };
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative">
      {/* Background Shapes (Moved Behind Content) */}
      <div className="absolute inset-0 w-full h-full z-[-1]">
        <div className="absolute left-0 top-2/5 transform-translate-y-1/2 h-1/2 bg-gradient-to-r from-gray-100 to-transparent opacity-50">
          <img src={leftArt} alt="Left Shape" className="w-full h-full object-contain" />
        </div>
        <div className="absolute right-0 top-2/5 transform-translate-y-1/2 h-1/2 bg-gradient-to-l from-gray-100 to-transparent opacity-50">
          <img src={rightArt} alt="Right Shape" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Back Link */}
      <div className="absolute top-4 left-4 text-gray-600">
        <a href="/" className="text-sm">
          &lt; Back to Main Site
        </a>
      </div>

      {/* Logo */}
      <div className="mb-8">
        <img src={logo} alt="BiaSafe Logo" className="w-20 h-20" />
      </div>

      {/* Title and Subtitle */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-semibold text-gray-800">Welcome to BiaSafe</h1>
        <p className="text-gray-600 mt-2">
          Artificial Intelligence Meets Institutional-Level Trading Technology
        </p>
      </div>

      {/* Email Input */}
      <div className="mb-4 w-full max-w-sm">
        <input
          type="email"
          placeholder="Type your email address here..."
          className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
      <div className="mb-4 w-full max-w-sm">
        <input
          type="password"
          placeholder="Enter your password"
          className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
      <div className="mb-4 w-full max-w-sm flex items-center">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="px-4 text-gray-500">or</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Sign In Buttons */}
      <div className="space-y-2 mb-6 w-full max-w-sm flex flex-col justify-center items-center">
        <GoogleLogin
          text="signin_with"
          size="large"
          onSuccess={(credentialResponse) => {
            console.log(jwtDecode(credentialResponse.credential!));
            navigate('/soteria');
          }}
          onError={() => {
            console.error('Google Sign-In Failed');
          }}
        />
        <button
          onClick={loginwithgoogle}
          className="flex items-center justify-start w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" className="mr-2" />
          <span className="flex-grow text-center">Sign in via Google</span>
        </button>
      </div>

      <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600">
        Let's Get Started
      </button>
    </div>
  );
};

export default SignInPage;