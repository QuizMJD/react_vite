import { Space, Table, Tag } from 'antd';
import {fetchAllUserAPI} from "../../service/api.service.js";
import {useEffect, useState} from "react";
const UserTable = () => {
    const [user, setUser] = useState([{
        _id:"12",
        fullName:"qui",
        email:"chuon@hmail"
    }]);
    useEffect(()=>{
        loadUsers();

    },[])




    const columns = [
        {
            title: 'Id',
            dataIndex: '_id'

        },
        {
            title: 'Full Name',
            dataIndex: 'fullName'

        },
        {
            title: 'Email',
            dataIndex: 'email'

        }
    ];

    const loadUsers = async () => {

    const res=await fetchAllUserAPI()

        setUser(res.data)
        console.log(res)

    }



    return (<Table columns={columns}
                   dataSource={user}
                   rowKey={"_id"}

    />)
}
export default UserTable;