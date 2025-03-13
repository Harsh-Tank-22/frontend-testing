import logo from '/logo.svg'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative">
      {/* Background Shapes */}
      <div className="absolute inset-0 w-full h-full">
        
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
      <div className="text-center mb-2">
        <h1 className="text-4xl font-semibold text-gray-800">Verify Your Email</h1>
        <p className="text-gray-600 text-center mb-2 w-112">The verification link has been sent. If you don't have it in your inbox, check spam/junk box</p>
        <button className="text-blue-500 block mx-auto mb-2 underline">Resend link</button>
      </div>

      
      <div className="mb-4 w-full max-w-sm flex items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
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
    </div>
  );
};

export default VerifyEmail;