import { Space, Table, Tag } from 'antd';
import {fetchAllUserAPI} from "../../service/api.service.js";
import {useState} from "react";
const UserTable = () => {
    const [user, setUser] = useState([{
        // _id:"12",
        // fullName:"qui",
        // email:"chuon@hmail"

    }]);




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
debugger
        // setUser(res.data)
        console.log(res)

    }

    loadUsers();

    return (<Table columns={columns} dataSource={user} />)
}
export default UserTable;