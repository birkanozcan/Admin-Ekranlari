import React from 'react'
import { useParams } from 'react-router'
import RolesEditPage from '../components/RolesEditPage'

function RolesEdit() {
    const params = useParams()
    return (
        <div>
            <RolesEditPage/>
        </div>
    )
}

export default RolesEdit
