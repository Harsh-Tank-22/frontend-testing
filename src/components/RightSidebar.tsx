import { FaPlus } from "react-icons/fa";
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";
import TradingImg from "../assets/trading.png";

type RightSidebarProps = {
  setRightexpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

const RightSidebar: React.FC<RightSidebarProps> = ({ setRightexpanded }) => {
  return (
    <div className='w-[25%] h-screen m-6 rounded-2xl shadow-lg bg-gray-100 flex flex-col gap-4'>
      <div className='flex justify-between mx-7 my-4'>
        <div className='flex text-purple-700 gap-2'>
          <FaPlus size={25} className='text-purple-700' />
          <p>Add</p>
        </div>
        <div>
          <button onClick={() => setRightexpanded((prev) => !prev)}>
            <BsReverseLayoutSidebarReverse size={25} />
          </button>
        </div>
      </div>
      <div className='h-[40%] bg-white mx-4 rounded-md'></div>
      <div className='h-[40%] bg-white mx-4 rounded-md'>
        <img src={TradingImg} className='w-full h-full object-contain' alt="Trading" />
      </div>
    </div>
  );
};

export default RightSidebar;
