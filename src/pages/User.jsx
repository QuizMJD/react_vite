import {useEffect, useState} from "react";
import UserTable from "../components/user/user.table.jsx";
import UserForm from "../components/user/user.form.jsx";
import {fetchAllUserAPI} from "../service/api.service.js";


const UserPage = () => {

    const [user, setUser] = useState([]);
    useEffect(() => {
        loadUser();
        }, []);
    const loadUser = async () => {

        const res = await fetchAllUserAPI()

        setUser(res.data)
        // console.log(res)

    }


    return (
        <div style={{padding:'20px'}}>
            <UserForm
                loadUser={loadUser}
            />
            <UserTable
                user={user}
                loadUser={loadUser}
            />

        </div>


    )
}
export default UserPage