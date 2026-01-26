import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App1 from './App1.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage.jsx';
import Restaurant from './Restaurant.jsx';
import London from './London.jsx';
import Burgers from './Burgers.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App1 /> */}
    {/* <Homepage/> */}
    <Restaurant/>
    <London/>
    <Burgers/>
  </StrictMode>,
)
