import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './home files/Home';
import Landing from './landing file/Landing';
import About from './about file/About';
import Gallery from './gallery file/Gallery';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root> ,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path: "/lan",
        element:  <Landing></Landing>  ,
      },
      {
        path: "/about",
        element:   <About></About>  ,
      },
      {
        path: "/gallery",
        element:  <Gallery></Gallery>  ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
