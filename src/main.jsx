import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App1 from './App1.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bannersection from './Bannersection.jsx';
import Deals from './Deals.jsx';
import Popularcatagry from './Popularcatagry.jsx';
import Popularrestaurant from './Popularrestaurant.jsx';
import Ordermore from './Ordermore.jsx';
import Partner from './Partner.jsx';
import Knowmore from './Knowmore.jsx';
import TotalItems from './TotalItems.jsx';
import Footer from './Footer.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App1 /> */}
    <Bannersection/>
    <Deals />
    <Popularcatagry/>
    <Popularrestaurant/>
    <Ordermore/>
    <Partner/>
    <Knowmore/>
    <TotalItems />
    <Footer />
  </StrictMode>,
)
