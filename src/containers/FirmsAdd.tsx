import React from 'react'
import { useParams } from 'react-router';
import FirmsAddForm from '../components/FirmsAddForm';

function FirmsAdd() {
    const params = useParams()
    return (
        <div>
            <FirmsAddForm/>
        </div>
    )
}

export default FirmsAdd
