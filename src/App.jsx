import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import AboutUs from './Screens/AboutUs'
import NotFound from './Screens/NotFound'
import ContactUs from './Screens/ContactUs'
import MoviesPage from './Screens/Movies'
import SingleMovie from './Screens/SingleMovie'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />}></Route>
      <Route path='/about-us' element={<AboutUs />}></Route>
      <Route path='/contact-us' element={<ContactUs />}></Route>
      <Route path='/movies' element={<MoviesPage />}></Route>
      <Route path='/movie/:id' element={<SingleMovie />}></Route>

      <Route path='*' exact element={<NotFound />}></Route>
    </Routes>
  )
}

export default App
