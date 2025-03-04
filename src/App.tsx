import "./App.css";
import Button from "./components/Button";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";


const App: React.FC = () => {
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

      <Dashboard />

      <AnimatePresence> 
        {rightexpanded ? (
          <RightSidebar setRightexpanded={setRightexpanded} rightexpanded={rightexpanded} />
        ) : (
          <Button setFun={setRightexpanded} flag={0} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;