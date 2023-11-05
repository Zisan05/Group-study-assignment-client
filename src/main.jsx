import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Errorpage from './components/Errorpage/Errorpage';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AuthProvider from './components/Provider/AuthProvider';
import CreateAssignment from './components/CreateAssignment/CreateAssignment';
import Assignment from './components/Assignments/Assignment';
import DetailsPage from './components/DetailsPage/DetailsPage';
import Privet from './components/Privat/Privat';
import Update from './components/Update/Update';
import SubmissionFrom from './components/SubmissionFrom/SubmissionFrom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/createassignment",
        element:<Privet><CreateAssignment></CreateAssignment></Privet>    
      },
      {
        path: "/assignment",
        element:<Assignment></Assignment>,
        loader: () => fetch('http://localhost:5000/assignment') 
      },
      {
       path: "/details/:_id",
       element: <Privet><DetailsPage></DetailsPage></Privet>,
       loader: ({params}) => fetch(`http://localhost:5000/assignment/${params._id}`)
      },
      {
       path: "/update/:_id",
       element: <Update></Update>,
       loader: ({params}) => fetch(`http://localhost:5000/assignment/${params._id}`)
      },
      {
        path: '/subfrom/:_id',
        element: <SubmissionFrom></SubmissionFrom>,
        loader: ({params}) => fetch(`http://localhost:5000/assignment/${params._id}`)
      },
      {
        path: "/register",
        element:<Register></Register>
      },
      {
        path: "/login",
        element:<Login></Login>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
