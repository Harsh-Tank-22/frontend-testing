// import React from 'react'

const SignupPage = () => {
  return (
    <div className="flex h-screen bg-white">

      <div className="flex-[1.2] flex flex-col justify-center items-center text-white p-8 bg-gradient-to-r from-purple-800 to-indigo-700 m-2 rounded-2xl">
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-white rounded-full mr-2"></div>
          <span className="text-xl font-semibold">CITADEL</span>
        </div>
        <h1 className="text-5xl font-bold mb-6 text-center">Insights Over Instincts</h1>
        <div className="flex flex-col space-y-2 mb-8">
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 py-2 px-4 rounded-full text-sm font-semibold">
            AI-Driven Portfolio Management System
          </button>
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 py-2 px-4 rounded-full text-sm font-semibold">
            Proprietary AI Copilot SOTERIA
          </button>
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 py-2 px-4 rounded-full text-sm font-semibold">
            Advanced R&D Platform
          </button>
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 py-2 px-4 rounded-full text-sm font-semibold">
            Bias Free Execution
          </button>
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 py-2 px-4 rounded-full text-sm font-semibold">
            End-to-End Process Automation
          </button>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-4 text-center">
          <p className="text-sm italic mb-2">Game changing PMS software that elevated my quants R&D capabilities and optimized my fund's profits.</p>
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gray-400 mr-2"></div>
            <div>
              <p className="text-sm font-semibold">Nicolas Carrier</p>
              <p className="text-xs">Pro Account</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex-[0.8] flex flex-col justify-center items-center bg-[#f4f4f4] p-8 m-2 rounded-2xl">
        <form>
            <div className="w-full max-w-md">
            <div className="mb-4">
                <div className="flex gap-5">
                <div className='flex flex-col w-1/2'>
                    <label htmlFor='FirstName'>First Name</label>  
                    <input type="text"  className="border rounded py-2 px-3 " id='FirstName'/>
                </div>
                <div className='flex flex-col  w-1/2'>
                    <label htmlFor='LastName'>Last Name</label>  
                    <input type="text"  className="border rounded py-2 px-3" id="LastName"/>
                </div>
                </div>
            </div>
            <div className="mb-4">
                <input type="email" placeholder="Email Address" className="border rounded py-2 px-3 w-full" />
            </div>
            <div className="mb-4">
                <input type="password" placeholder="Password" className="border rounded py-2 px-3 w-full" />
                <p className="text-xs text-gray-600 mt-1">At least 8 characters, with numbers and symbols</p>
            </div>
            <div className="flex items-center mb-4">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm">Remember this device</label>
            </div>
            <button className="bg-[#7723FF] text-white py-2 px-4 rounded-xl w-full mb-4">
                Create Account
            </button>
            <button className="border border-gray-400 py-2 px-4 rounded-full w-full flex items-center justify-center">
                <span className="mr-2">SSO Single Sign-On</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            </button>
            <p className="text-xs text-gray-600 mt-4 text-center">By logging in, you agree to follow our <a href="#" className="text-blue-600">terms of service</a></p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;