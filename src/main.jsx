import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App1 from './App1.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bannersection from './Bannersection.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App1 /> */}
    <Bannersection/>
  </StrictMode>,
)
