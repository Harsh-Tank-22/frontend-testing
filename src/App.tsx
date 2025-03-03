import './App.css'
import Button from './components/Button';
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import RightSidebar from './components/rightSidebar';
import {useState} from 'react'
function App() {
  const [expanded, setExpanded] = useState(false);
  const [rightexpanded, setRightexpanded] = useState(false)
  return (
      <div className='flex justify-between'>
        {expanded?<Sidebar setExpanded={setExpanded}/>:<Button setFun={setExpanded} flag={1}/>}
        <Dashboard/>
        {rightexpanded?<RightSidebar setRightexpanded={setRightexpanded}/>:<Button setFun={setRightexpanded} flag={0}/>}
      </div>
  )
}

export default App
