import React from 'react'
import { Routes, Route, BrowserRouter, NavLinkn, Navigate } from 'react-router-dom';
import { Home } from '../components/Home'

import { Services } from '../components/Service'
import { Curriculum } from '../components/Curriculum'
import { Contact } from '../components/Contact'
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Project } from '../components/Projects';
import { ListWorks } from '../components/ListWorks';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      {/**HEADER Y NAVIGATION */}
      <HeaderNav />
      {/**MAIN CONTENT */}
      <section className='content'>

        <Routes>

          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
         
          <Route path='/services' element={<Services />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project/:id' element={<Project />} />
          <Route path='/listWorks' element={<ListWorks/>} />
          <Route path='*' element={
            <div className='page'>
              <h1 className='heading'> Error 404</h1>
            </div>
          } />

        </Routes>

      </section>

      {/**FOOTER */}
      <Footer />
    </BrowserRouter>
  )
}


