import "./App.css";
import Button from "./components/Button";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import { useState } from "react";
type AppProps = {};
const App: React.FC<AppProps> = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [rightexpanded, setRightexpanded] = useState<boolean>(false);

  return (
    <div className="flex justify-between">
      {expanded ? (
        <Sidebar setExpanded={setExpanded} />
      ) : (
        <Button setFun={setExpanded} flag={1} />
      )}
      <Dashboard />

      {rightexpanded ? (
        <RightSidebar setRightexpanded={setRightexpanded} />
      ) : (
        <Button setFun={setRightexpanded} flag={0} />
      )}
    </div>
  );
};

export default App;
