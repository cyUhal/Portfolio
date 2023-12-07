import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { jobs } from '../data/jobs'

export const Project = () => {
    const [project, setProject] = useState({})
    const params = useParams()

    useEffect(() => {
        let project = jobs.filter(jobs => jobs.id === params.id)
        setProject(project[0])
    }, []);


    return (
        <div className='page page-work'>

            <div className='mask'>
                <img src={'/images/' + project.id + '.png'} alt='img' />
            </div>
            <h1 className='heading'>{project.name}</h1>
            <p>{project.technologies}</p>
            <p>{project.description}</p>

            <a href={'http://' + project.url} target='_blank' rel='noreferrer'> Go to project </a>


        </div>
    )
}

