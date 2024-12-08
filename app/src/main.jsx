import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Home, CountryCard} from './components'
import CountryInfo from './components/CountryInfo.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='country/:countryName' element={<CountryInfo />}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
