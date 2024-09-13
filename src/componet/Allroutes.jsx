import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './Product'
import Brands from '../page/Brands'
import Used from '../page/Used'
import Deals from '../page/Deals'
import Topdeals from '../page/Topdeals'
import VIPrewards from '../page/VIPrewards'
import Program from '../page/Program'
import Giftcard from '../page/Giftcard'
import Events from '../page/Events'
import Sponser from './Sponser'
import Camera from '../page/Camera'
import Home from './Home'
import { Slider } from './Slider'
import Card from './Card'
import Footer from './Footer'
import Lense from '../page/Lense'
import Signin from '../page/Signin'
import Lighting from '../page/Lighting'
import Optic from '../page/Optic'
import Computer from '../page/Computer'
import Drones from '../page/Drones'
import Gaming from '../page/Gaming'
import Music from '../page/Music'
import Audio from '../page/Audio'
import Shop from './Shop'
import Edit from './Edit'
import Addpage from '../page/Addpage'
import Dec from './Dec'
import PrivatePage from './PrivatePage'
import SignUp from '../page/SignUp'
import AddtoCart from './AddtoCart'
import Logobrand from './Logobrand'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/slider' element={<Slider />} />
        <Route path='/card' element={<Card/>} />
        <Route path='/product' element={<Product />} />
        <Route path='/brands' element={<Brands />} />
        <Route path='/used' element={<PrivatePage><Used /></PrivatePage>} />
        <Route path='/Cart' element={<AddtoCart/>}></Route>
        <Route path='/topdeals' element={<Topdeals />} />
        <Route path='/viprewards' element={<VIPrewards />} />
        <Route path='/program' element={<Program />} />
        <Route path='/giftcard' element={<Giftcard />} />
        <Route path='/events' element={<Events />} />
        <Route path='/sponser' element={<Sponser />} />
        <Route path='/camera' element={<Camera />} />
        <Route path='/lense' element={<Lense />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/lighting' element={<Lighting />} />
        <Route path='/optic' element={<Optic />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/computer' element={<Computer />} />
        <Route path='/audio' element={<Audio />} />
        <Route path='/drones' element={<Drones />} />
        <Route path='/gaming' element={<Gaming />} />
        <Route path='/music' element={<Music />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/singlepage/:id' element={<Dec />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/addpage' element={<Addpage />} />
        <Route path='/Logobrand' element={<Logobrand/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
