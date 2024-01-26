import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import AboutUs from './Screens/AboutUs'
import NotFound from './Screens/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />}></Route>
      <Route path='/about-us' element={<AboutUs />}></Route>
      {/* <Route path='/about-us' element={<AboutUs />}></Route>
      <Route path='/about-us' element={<AboutUs />}></Route>
      <Route path='/about-us' element={<AboutUs />}></Route>
      <Route path='/about-us' element={<AboutUs />}></Route> */}
      <Route path='*' exact element={<NotFound />}></Route>
    </Routes>
  )
}

export default App
