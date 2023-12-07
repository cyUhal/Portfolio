import React from 'react'
import {Link} from 'react-router-dom'
import {ListWorks} from './ListWorks'
 export const Home = () => {
  return (
    <div className='home'>
      <h2>
      ¡Hola! Soy una entusiasta y dedicada aspirante a Desarrolladora Frontend.
       Mi pasión por la creación de experiencias digitales me ha llevado a embarcarme en un viaje de aprendizaje constante. 
       Compromiso, curiosidad y determinación son mis herramientas de cada dia para crecer en el campo del desarrollo web.


      </h2>
      <h2 className='title'> 
        
        
        <Link to='/contact'> Contacta conmigo.</Link>
      </h2>

      <section className='last-works'>
        <h2 className='heading'>Mis proyectos de aprendizaje</h2>
        

        <ListWorks limit='2'/>

      </section>
    </div>
  )
}


