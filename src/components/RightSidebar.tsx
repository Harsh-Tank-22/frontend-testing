import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";
import TradingImg from "../assets/trading.png";

type RightSidebarProps = {
  setRightexpanded: React.Dispatch<React.SetStateAction<boolean>>;
  rightexpanded: boolean;
};


const rightSidebarVariants = {
  open: { width: "25%", opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
  closed: { width: "0%", opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

const RightSidebar: React.FC<RightSidebarProps> = ({ setRightexpanded, rightexpanded }) => {
  return (
    <motion.div
      className="h-screen m-6 rounded-2xl shadow-lg bg-gray-100 flex flex-col gap-4 overflow-hidden"
      variants={rightSidebarVariants}
      initial="closed" 
      animate={rightexpanded ? "open" : "closed"}
      exit="closed" 
    >
    
      <div className="flex justify-between mx-7 my-4">
        <div className="flex text-purple-700 gap-2">
          <FaPlus size={25} className="text-purple-700" />
          <p>Add</p>
        </div>
        <div>
          <button onClick={() => setRightexpanded((prev) => !prev)}>
            <BsReverseLayoutSidebarReverse size={25} />
          </button>
        </div>
      </div>

      <div className="h-[40%] bg-white mx-4 rounded-md"></div>
      <div className="h-[40%] bg-white mx-4 rounded-md">
        <img src={TradingImg} className="w-full h-full object-contain" alt="Trading" />
      </div>
    </motion.div>
  );
};

export default RightSidebar;