import {notification, Popconfirm, Space, Table, Tag} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import UpdateUserModal from "./update.user.modal.jsx";
import {useState} from "react";
import UserDetail from "./view.user.detail.jsx";
import {deleteUserAPI} from "../../service/api.service.js";


const UserTable = (props) => {
    const {user,loadUser} = props;
    const [isModalUpdate, setIsModalUpdate] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    //show
    const [dataDetail, setDataDetail] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const handleDelete = async (_id) => {
        const res =await deleteUserAPI(_id)
        // console.log(_id)
        if(res.data){
            notification.success({
                    message: "update user",
                    description: "đã xoá thành công"
                }
            )
            await loadUser();
        }else {
            notification.error({
                message: "xoá user thất bại",
                description: JSON.stringify(res.message)
            })
        }

        // console.log(res.data)

    }


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
                            //    console.log(dataDetail)
                            // console.log(record._id);


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
                    <Popconfirm
                        title="Xoá người dùng"
                        description="Bạn chắc chắn xoá user này ?"
                        onConfirm={()=>handleDelete(record._id)
                        }

                        okText="Yes"
                        cancelText="No"
                        placement="left"

                    >
                    <DeleteOutlined style={{cursor:"pointer" ,color:"red"}}/>
                    </Popconfirm>




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
                loadUser={loadUser}



            />



        </>
    )
}
export default UserTable;