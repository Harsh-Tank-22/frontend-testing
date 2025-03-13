import "./App.css";
// import AppLayout from "./components/Layout/AppLayout";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Soteria, LiveTrading, PortfolioManagement, ResearchHub, ErrorPage } from "./pages";
// import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import VerifyEmail from "./pages/AuthPages/VerifyEmail";
import AppLayout from "./components/Layout/AppLayout";

const router = createBrowserRouter([
  {
    path:"/",
    element: <SignInPage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path:"/dashboard",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:'/dashboard/soteria',
        element: <Soteria/>
      },
      {
        path:'/dashboard/portfolio',
        element: <PortfolioManagement/>
      },
      {
        path:'/dashboard/research',
        element: <ResearchHub/>
      },
      {
        path:'/dashboard/liveTrading',
        element: <LiveTrading/>
      }
    ]
  },
  {
    path:'/verify-email',
    element: <VerifyEmail/>
  },
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};

export default App;