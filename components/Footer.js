import React from 'react';
import Link from 'next/link';
import { PiGithubLogoBold } from "react-icons/pi";
import { ImLinkedin2 } from "react-icons/im";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-gray-900 text-white flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-10 gap-6'>
      <div className='flex flex-col items-center md:items-start gap-2 md:gap-6'>
        <div className='flex flex-col items-center md:items-start gap-2'>
          <div className='text-sm md:text-base'>Copyright &copy; {currentYear} Fuel My Work! | All rights reserved!</div>
          <div className='text-xs md:text-sm text-gray-500'>Made by Jai Singh with ❤</div>
        </div>
        <div className='flex flex-col md:flex-row gap-3 md:gap-5 text-center'>
          <Link href='/about' className='text-sm md:text-base hover:underline transition-colors'>About Us</Link>
          <Link href='/contact' className='text-sm md:text-base hover:underline transition-colors'>Contact Us</Link>
          <Link href='/privacy-policy' className='text-sm md:text-base hover:underline transition-colors'>Privacy Policy</Link>
          <Link href='/terms&conditions' className='text-sm md:text-base hover:underline transition-colors'>Terms & Conditions</Link>
          <Link href='/cancellation&refund' className='text-sm md:text-base hover:underline transition-colors'>Cancellation/Refund Policies</Link>
        </div>
      </div>

      <div className='flex flex-col items-center gap-3'>
        <div className='text-sm md:text-base'>Follow me on</div>
        <div className='flex gap-4 items-center'>
          <a href="https://github.com/jai-singh5" target='_blank' className='border border-zinc-400 py-2 px-3 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2'>
            <PiGithubLogoBold className='w-5 h-5'/>
            <span className='hidden md:inline'>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/jai-singh-24b24a298" target='_blank' className='border border-zinc-400 py-2 px-3 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2'>
            <ImLinkedin2 className='w-5 h-5'/>
            <span className='hidden md:inline'>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;