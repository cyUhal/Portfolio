import React from 'react'
import { jobs } from '../data/jobs.js';
import { Link } from 'react-router-dom';


export const ListWorks = () => {
  return (
   
      <section className='works'>
        {
          jobs.map(jobs => (

            <article key={jobs.id} className='work-item'>
              <div className='mask'>
                <img src={'/images/' + jobs.id + '.png'} alt='img' />
              </div>
              <span>{jobs.category}</span>
              <h2><Link to={'/project/' + jobs.id}>{jobs.name}</Link></h2>
              <h3>{jobs.technologies}</h3>
            </article>
          )
          )
        }

      </section>

  
  )
}