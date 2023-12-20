import React from 'react'
import {NavLink} from 'react-router-dom'

 export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
        <span>.C</span>
        
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to='/home' className={({isActive}) =>( isActive ? 'active' : '')} > Home </NavLink>
                </li>
                
                
                <li>
                    <NavLink to='/curriculum' className={({isActive}) => (isActive ? 'active' : '')}>Curriculum</NavLink>
                </li>
                <li>
                    <NavLink to='/listWorks' className={({isActive}) =>( isActive ? 'active' : '')}>Proyectos</NavLink>
                </li>

                <li>
                    <NavLink to='/contact' className={({isActive}) =>( isActive ? 'active' : '')}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}


