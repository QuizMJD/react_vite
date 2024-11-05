import { Space, Table, Tag } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import {red} from "@ant-design/colors";
import UpdateUserModal from "./update.user.modal.jsx";
import {useState} from "react";
import UserDetail from "./view.user.detail.jsx";

const UserTable = (props) => {
    const {user,loadUser} = props;
    const [isModalUpdate, setIsModalUpdate] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    //show
    const [dataDetail, setDataDetail] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {

                return(
                    <>
                        <a href="#"
                           onClick={()=>{
                            setDataDetail(record);
                            setIsDetailOpen(true);
                            console.log(record._id);

                        }}>Invite {record._id}</a>
                    </>


                )
            },

        },

        {
            title: 'Full Name',
            dataIndex: 'fullName'

        },
        {
            title: 'Email',
            dataIndex: 'email'

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                < div style={{cursor:"pointer" , display: "flex", gap : "20px"}} >
                    <EditOutlined style={{color:"orange"}}
                                  onClick={()=>{
                                      setDataUpdate(record);
                                      setIsModalUpdate(true)

                                  }}/>
                    <DeleteOutlined style={{color:"red"}} />
                </div>

            ),
        },
    ];


    return (<>
            <Table columns={columns}
                   dataSource={user}
                   rowKey={"_id"}
            />
            <UpdateUserModal
                isModalUpdate={isModalUpdate}
                setIsModalUpdate={setIsModalUpdate}
                setDataUpdate={setDataUpdate}
                dataUpdate={dataUpdate}
                loadUser={loadUser}

            />
            <UserDetail
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
                isDetailOpen={isDetailOpen}
                setIsDetailOpen={setIsDetailOpen}



            />

        </>
    )
}
export default UserTable;