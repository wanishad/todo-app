import Link from 'next/link'
import React from 'react'

const header = () => {
    return (
 <>
 <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-3xl">Todos </span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
      <Link href="/About" className="mr-5 hover:text-gray-900">About</Link>
      <Link href="/Todo" className="mr-5 hover:text-gray-900">Todo List</Link>
    </nav>

  </div>
</header>
    </div>
    </>
  )
}

export default header
