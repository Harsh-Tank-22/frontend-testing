import Button from "../UI/Button";
import Sidebar from "../UI/Sidebar";
import RightSidebar from "../UI/RightSidebar";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  
  const [expanded, setExpanded] = useState<boolean>(false);
  const [rightexpanded, setRightexpanded] = useState<boolean>(false);

  return (
    <div className="flex justify-between">
      <AnimatePresence> 
        {expanded ? (
          <Sidebar setExpanded={setExpanded} expanded={expanded} />
        ) : (
          <Button setFun={setExpanded} flag={1} />
        )}
      </AnimatePresence>

      <Outlet/>
      <AnimatePresence> 
        {rightexpanded ? (
          <RightSidebar setRightexpanded={setRightexpanded} rightexpanded={rightexpanded} />
        ) : (
          <Button setFun={setRightexpanded} flag={0} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default AppLayout