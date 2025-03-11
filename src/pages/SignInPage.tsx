import logo from '/logo.svg'
import leftArt from '/leftArt.svg'
import rightArt from '/rightArt.svg'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative">
      {/* Background Shapes */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 h-1/2 bg-gradient-to-r from-gray-100 to-transparent opacity-50">
          <img src={leftArt} alt="Left Shape" className="w-full h-full object-contain" />
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 h-1/2 bg-gradient-to-l from-gray-100 to-transparent opacity-50">
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
        <p className="text-gray-600 mt-2">Artificial Intelligence Meets Institutional-Level Trading Technology</p>
      </div>

      {/* Email Input */}
      <div className="mb-4 w-full max-w-sm">
        <input
          type="email"
          placeholder="Type your email address here..."
          className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>

      {/* Sign In Buttons */}
      <div className="space-y-2 mb-6 w-full max-w-sm flex flex-col justify-center items-center">
       
        
      <GoogleLogin  text='signin_with' size='large' onSuccess={(credentialResponse)=>{
            console.log(jwtDecode(credentialResponse.credential!));
            navigate("/soteria")
        }}
        onError={() => {
            console.error("Google Sign-In Failed");
          }}
        />
       
        
        
       
      </div>

      <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600">
        Let's Get Started
      </button>
    </div>
  );
};

export default SignInPage;