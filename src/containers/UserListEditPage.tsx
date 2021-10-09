import React from 'react'
import UserListEdit from '../components/UserListEdit'
import { useParams } from 'react-router';

function UserListEditPage() {
    const params = useParams()
    return (
        <div>
            <UserListEdit/>
        </div>
    )
}

export default UserListEditPage
