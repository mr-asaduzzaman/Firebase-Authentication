import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import SignUp from './Pages/Signup.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Orders from './Components/Orders.jsx';
import PrivetRouts from './Routs/PrivetRouts.jsx';
import Profile from './Components/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/orders',
        element: <PrivetRouts><Orders></Orders></PrivetRouts>
      },
      {
        path: '/profile',
        element: <PrivetRouts><Profile></Profile></PrivetRouts>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
