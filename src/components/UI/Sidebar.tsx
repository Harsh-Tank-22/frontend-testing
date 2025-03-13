import { motion } from "framer-motion";
import { BsLayoutSidebar } from "react-icons/bs";
import { MdOutlineAddBox } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import userImg from "../../assets/afro-man.jpg";
import { NavLink } from "react-router-dom";

type SidebarProps = {
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  expanded: boolean;
};

const sidebarVariants = {
  open: {
    width: "25%",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  closed: {
    width: "0%",
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const Sidebar: React.FC<SidebarProps> = ({ setExpanded, expanded }) => {
  return (
    <motion.div
      className="h-screen m-6 rounded-2xl shadow-lg bg-white overflow-hidden"
      variants={sidebarVariants}
      initial="closed"
      animate={expanded ? "open" : "closed"}
      exit="closed"
    >
      <div className="flex justify-between mx-7 my-4">
        <button onClick={() => setExpanded((prev) => !prev)}>
          <BsLayoutSidebar size={25} />
        </button>
        <MdOutlineAddBox size={25} />
      </div>

      <div className="flex items-center bg-white rounded-md shadow-md px-4 py-2 mx-5">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      <div className="my-3 h-[60%] font-bold">
        <ul>
        <li className='hover:text-purple-700 hover:bg-purple-200 my-1'>
            <NavLink to="/dashboard/soteria" className="px-7">Soteria</NavLink>
          </li>
          <li className='hover:text-purple-700 hover:bg-purple-200 my-1'>
            <NavLink to="/dashboard/portfolio" className="px-7">Portfolio</NavLink>
          </li>
          <li className='hover:text-purple-700 hover:bg-purple-200 my-1'>
            <NavLink to="/dashboard/research" className="px-7">R&D Hub</NavLink>
          </li>
          <li className='hover:text-purple-700 hover:bg-purple-200 my-1'>
            <NavLink to="/dashboard/liveTrading" className="px-7">Live Market</NavLink>
          </li>
        </ul>
      </div>

      <div className="mx-5 border-b border-gray-200"></div>

      <div className="flex ml-8 my-3 gap-2 items-center">
        <IoIosHelpCircleOutline />
        <p>Help</p>
      </div>

      <div className="flex ml-8 my-3 gap-2 items-center">
        <img src={userImg} className="h-10 w-10 rounded-full" alt="Profile" />
        <p>Profile & Setting</p>
      </div>
    </motion.div>
  );
};

export default Sidebar;
