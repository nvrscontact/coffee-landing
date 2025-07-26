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

function App() {

  return (
    <>
    <section className=''>
    <Router>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
              <Route path='/' element={<HomePage />} />
              <Route path='/reservations' element={<Reservations />} />
              <Route path='/menus' element={<Menus />} />
              <Route path='/gallery' element={<Gallery />} />
              <Route path='/about_us' element={<About_us />} />
              <Route path='/carreers' element={<Carreers />} />
              <Route path='/help_privacy' element={<Help_Privacy />} />
              <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>

    </section>
    </>
  )
}

export default App
