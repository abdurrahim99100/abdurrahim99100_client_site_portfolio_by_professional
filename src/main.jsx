import ReactDOM from 'react-dom/client'
import './index.css'
import {
  BrowserRouter,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)
