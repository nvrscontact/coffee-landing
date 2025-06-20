import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';

import HomePage from './Pages/HomePage'
import Reservations from './Pages/Reservations';
import Menus from './Pages/Menus'
import Faqs from './Pages/Faqs'
import Gallery from './Pages/Gallery';
import NotFoundPage from './Pages/NotFoundPage';

function App() {

  return (
    <>
    <section className='bg-black'>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
           <Route index element={<HomePage />} />
           <Route path='/' element={<HomePage />} />
           <Route path='/reservations' element={<Reservations />} />
           <Route path='/menus' element={<Menus />} />
           <Route path='/faqs' element={<Faqs />} />
           <Route path='/gallery' element={<Gallery />} />
           <Route path='*' element={<NotFoundPage />} />

        <Route/>
        </Route>
      </Routes>
    </Router>

    </section>
    </>
  )
}

export default App
