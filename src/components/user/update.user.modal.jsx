import { Input, Modal, notification} from "antd";
import {useEffect, useState} from "react";
import {createUserAPI, updateUserAPI} from "../../service/api.service.js";


const UpdateUserModal = (props) => {
    const [id, setID] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const {setIsModalUpdate,isModalUpdate,setDataUpdate,dataUpdate,loadUser}=props;

    useEffect(() => {
        // dataUpdate!==null?console.log("start",dataUpdate):console.log("nodata.",dataUpdate);
        // console.log(dataUpdate);
        if(dataUpdate){
            setID(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
        }


    },[dataUpdate]);


    const handleSubmit = async () => {
        const res =await updateUserAPI(id,fullName, phone)
        console.log(res)

        if(res.data){
            notification.success({
                    message: "update user",
                    description: "cập nhật user thành công"
                }
            )
            resetAndModal()
            await loadUser();
        }else {
            notification.error({
                message: "error user",
                description: JSON.stringify(res.message)
            })
        }

        console.log(res.data)

    }
    const resetAndModal=()=>{
        setIsModalUpdate(false);
        setFullName("");
        setPhone("");
        setID("");
        setDataUpdate(null)


    }


    return (

        <div className="user-form" style={{margin: "10px 0"}}>




            <Modal title="Upadate User"
                   open={isModalUpdate}
                   onOk={() => handleSubmit()}
                   onCancel={() => resetAndModal()}
                   maskClosable={false}
                   okText={"SAVE"}
            >
                <div style={{display: "flex", gap: "15px", flexDirection: "column"}}>
                    <div>
                        <span>Id</span>
                        <Input
                            value={id}
                            disabled
                        />
                    </div>
                    <div>
                        <span>FullName</span>
                        <Input
                            onChange={(event) => setFullName(event.target.value)}
                            value={fullName}
                        />
                    </div>

                    <div>
                        <span>Phone number</span>
                        <Input
                            onChange={(event) => setPhone(event.target.value)}
                            value={phone}/>
                    </div>
                </div>
            </Modal>

        </div>
    )
}
export default UpdateUserModal