import { data } from 'autoprefixer'
import React from 'react'

const footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-gray-900 text-white flex justify-center items-center px-5 h-16'>
        <p className='text-center'>Copyright &copy; {currentYear} Fuel My Work - All Rights Reserved</p>
    </footer>
  )
}

export default footer
