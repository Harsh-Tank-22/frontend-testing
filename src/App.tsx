import "./App.css";
// import AppLayout from "./components/Layout/AppLayout";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Soteria, LiveTrading, PortfolioManagement, ResearchHub, ErrorPage } from "./pages";
// import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

const router = createBrowserRouter([
  {
    path:"/",
    element: <SignInPage/>,
    errorElement: <ErrorPage/>,
    children: [
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
  {
    path:'/soteria',
    element: <Soteria/>
  },
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};

export default App;