import styles from './Project.module.css'

import { useParams } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import { useEffect } from 'react'

function Project() {
    const { id } = useParams()

    const [project, setProject] = useState([])

    useEffect(() => {
        fetch(`http://localhost:222/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
            })
            .catch((err) => console.log)
    }, [id])

    return <p>{project.name}</p>
}

export default Project