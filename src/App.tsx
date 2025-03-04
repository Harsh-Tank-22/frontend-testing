import "./App.css";
import AppLayout from "./components/Layout/AppLayout";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Soteria, LiveTrading, PortfolioManagement, ResearchHub, ErrorPage } from "./pages";

const router = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:'/',
        element: <Soteria/>
      },
      {
        path:'/portfolio',
        element: <PortfolioManagement/>
      },
      {
        path:'/research',
        element: <ResearchHub/>
      },
      {
        path:'/liveTrading',
        element: <LiveTrading/>
      }
    ]
  },
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};

export default App;