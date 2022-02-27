import React, { useEffect } from 'react'
import Announcment from '../components/Announcment'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import LogIn from './LogIn'
import Register from './Register'
import Cart from './Cart'
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Slider/>
      <Categories/>
      <Products/>
    </div>
  )
}

export default Home
