import React from 'react'
import {categories} from "../constants"
import NavLink from './NavLink'
function NavLinks() {
  return (
    <nav className='grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b'>
        {categories.map((category) => (
            <NavLink key={category} category={category} isActive={true} />
        ))}
    </nav>
  )
}

export default NavLinks