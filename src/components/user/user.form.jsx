import {Button, Input, Modal, notification} from "antd";
import {useState} from "react";
import {createUserAPI} from "../../service/api.service.js";

const UserForm = (props) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {loadUser}=props;
    // const [handleOk, setHandleOk] = useState(false);
    // const [handleCancel, setHandleCancel] = useState(false);

    const handleSubmit = async () => {
       const res =await createUserAPI(fullName, email, password, phone)
        console.log(res)

        if(res.data){
            notification.success({
                message: "create user",
                description: "tạo user thành công"
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
        setIsModalOpen(false);
        setFullName("");
        setEmail("");
        setPassword("");
        setPhone("");

    }

        return (
            <div className="user-form" style={{margin: "10px 0"}}>


                    <div style={{display: "flex", gap: "10px", justifyContent: "space-between"}}>
                        <h3>Table User</h3>
                        <Button type="primary" onClick={()=>setIsModalOpen(true)}>Create user</Button>
                    </div>

                <Modal title="Create User"
                       open={isModalOpen}
                       onOk={() => handleSubmit()}
                       onCancel={() => resetAndModal()}
                       maskClosable={false}
                       okText={"CREATE"}
                >
                    <div style={{display: "flex", gap: "15px", flexDirection: "column"}}>
                        <div>
                            <span>FullName</span>
                            <Input
                                onChange={(event) => setFullName(event.target.value)}
                                value={fullName}
                            />
                        </div>
                        <div>
                            <span>Email</span>
                            <Input
                                onChange={(event) => setEmail(event.target.value)}
                                value={email}
                            />
                        </div>
                        <div>
                            <span>Password</span>
                            <Input.Password
                                onChange={(event) => setPassword(event.target.value)}
                            value={password}/>
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
export default UserForm