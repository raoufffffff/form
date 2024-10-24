import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import CreateRest from './CreateRest.jsx';
import MainPage from './MainPage.jsx';
import Createliv from './Createliv.jsx';
import Liv from './Liv.jsx';
import Adds from './Adds.jsx';
import CreatAdds from './CreatAdds.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<MainPage />} />
    <Route path='create' element={<CreateRest />} />
    <Route path='createliv' element={<Createliv />} />
    <Route path='liv' element={<Liv />} />
    <Route path='adds' element={<Adds />} />
    <Route path='createadds' element={<CreatAdds />} />


  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

