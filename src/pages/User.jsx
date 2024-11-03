import React, {useEffect, useState} from "react";
import UserTable from "../components/user/user.table.jsx";
import UserForm from "../components/user/user.form.jsx";
import {fetchAllUserAPI} from "../service/api.service.js";

const UserPage = () => {

    const [user, setUser] = useState([{}]);
    useEffect(() => {
        loadUsers();

    }, [])
    const loadUsers = async () => {

        const res = await fetchAllUserAPI()

        setUser(res.data)
        console.log(res)

    }


    return (
        <div style={{padding:'20px'}}>
            <UserForm
                loadUsers={loadUsers}
            />
            <UserTable
                user={user}
            />
        </div>




    )
}
export default UserPage