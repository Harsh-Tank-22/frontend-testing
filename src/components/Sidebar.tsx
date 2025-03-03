import { BsLayoutSidebar } from "react-icons/bs";
import { MdOutlineAddBox } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import userImg from "../assets/afro-man.jpg"

const Sidebar = ({setExpanded}) => {
  return (
    <div className='w-[25%] h-screen m-6 rounded-2xl shadow-lg'>
        <div className='flex justify-between mx-7 my-4'>
            <button onClick={()=>setExpanded((prev)=>!prev)}>
                <BsLayoutSidebar size={25}/>
            </button>
             <MdOutlineAddBox size={25}/>
        </div>
        <div className="flex items-center bg-white rounded-md shadow-md px-4 py-2 mx-5">
        <FaSearch className="text-gray-500 mr-2" />
        <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
        </div>
        <div className='my-3 h-[60%] font-bold'>
            <ul>
                <li className='hover:text-purple-700 hover:bg-purple-200 my-1'>
                    <a href="/" className="px-7">Soteria</a>
                </li>
                <li className='hover:text-purple-700 hover:bg-purple-200 my-1'>
                    <a href="/" className="px-7">Research Hub</a>
                </li>
                <li className='hover:text-purple-700 hover:bg-purple-200 my-1'>
                    <a href="/" className="px-7">Portfolio Management</a>
                </li>
                <li className='hover:text-purple-700 hover:bg-purple-200 my-1'>
                    <a href="/" className="px-7">Live Trading</a>
                </li>
            </ul>
        </div>
        <div className="mx-5 border-b border-gray-200"></div>
        
        <div className='flex ml-8 my-3 gap-2 items-center'>
            <IoIosHelpCircleOutline />
            <p>Help</p>
        </div>
        <div className='flex ml-8 my-3 gap-2 items-center'>
            <img src={userImg} className='h-10 w-10 rounded-full'></img>
            <p>Profile & Setting</p>
        </div>
    </div>
  )
}

export default Sidebar