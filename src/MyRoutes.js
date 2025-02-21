import React from 'react'
import { BrowserRouter as Routes,Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import Homepage from './pages/Homepage'
import Product from './pages/Product'
import NotFound from './pages/NotFound'

const MyRoutes = () => {
  return (
    <>
     
        <Routes>
          <Route path='/' element={<Layouts/>}>
          <Route index element={<Homepage/>}/>
          <Route path='product' element={<Product/>}/>
          </Route>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      
    </>
  )
}

export default MyRoutes
