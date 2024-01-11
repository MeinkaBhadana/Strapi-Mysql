import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-gray-300">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image width={50} height={50} src="/logo.png" alt="logo" />
    <span className="ml-3 text-xl">S3B GLOBAL</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Home</a>
      <a className="mr-5 hover:text-gray-900">About Us</a>
      <a className="mr-5 hover:text-gray-900">Blogs</a>
      <a className="mr-5 hover:text-gray-900">Contact</a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Enquiry
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </div>
  )
}

export default Header
