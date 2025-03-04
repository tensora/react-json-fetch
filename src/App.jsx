import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header1 from './Header1'
import BooksComponent from './BooksComponent'
import Currency from './Currency'
import Testimonials from './Testimonials'

function App() {


  return (
    <>
      <Header1/>
      <Currency/>
      {/* <BooksComponent/> */}
      <Testimonials/>
    </>
  )
}

export default App
