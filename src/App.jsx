import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';

import HomePage from './Pages/HomePage'
import Reservations from './Pages/Reservations';
import Menus from './Pages/Menus'
import Gallery from './Pages/Gallery';
import NotFoundPage from './Pages/NotFoundPage';
import About_us from './Pages/About_us';
import Help_Privacy from './Pages/Help_Privacy';
import Carreers from './Pages/Carreers';
import Hotel from './Pages/Hotel';
import Resort from './Pages/Resort';
import Restaurant from './Pages/Restaurant';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Support from './Pages/Support';

function App() {

  return (
    <>
    <Router>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
              <Route path='/' element={<HomePage />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/hotel' element={<Hotel />} />
              <Route path='/resort' element={<Resort />} />
              <Route path='/restaurant' element={<Restaurant />} />
              <Route path='/menus' element={<Menus />} />
              <Route path='/reservations' element={<Reservations />} />
              <Route path='/gallery' element={<Gallery />} />
              <Route path='/about_us' element={<About_us />} />
              <Route path='/carreers' element={<Carreers />} />
              <Route path='/help_privacy' element={<Help_Privacy />} />
              <Route path='/support' element={<Support />} />
              <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
