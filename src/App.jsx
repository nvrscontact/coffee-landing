import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';

import HomePage from './Pages/HomePage'
import Menus from './Pages/Menus'
import Faqs from './Pages/Faqs'
import Quotes from './Pages/Reservations';
import NotFoundPage from './Pages/NotFoundPage';
import Gallery from './Pages/Gallery';

function App() {

  return (
    <>
    <section className='bg-black'>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
           <Route index element={<HomePage />} />
           <Route path='/menus' element={<Menus />} />
           <Route path='/faqs' element={<Faqs />} />
           <Route path='/quotes' element={<Quotes />} />
           <Route path='/gallery' element={<Gallery />} />
           <Route path='/' element={<HomePage />} />
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
