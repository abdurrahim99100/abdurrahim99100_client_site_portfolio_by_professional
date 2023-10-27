import ReactDOM from 'react-dom/client'
import './index.css'
import {
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import BlogHome from './Pages/Blog/BlogHome/BlogHome';
import CssDetails from './Pages/Blog/Css/CssDetails';
import BlogLayout from './Layout/BlogLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>error</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  },
  {
    path: "/",
    element: <BlogLayout></BlogLayout>,
    errorElement: <div>error</div>,
    children: [
      {
        path: "blog",
        element: <BlogHome></BlogHome>
      },
      {
        path: "cssDetails",
        element: <CssDetails></CssDetails>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <RouterProvider router={router} />
  </div>
)
