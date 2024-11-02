import {Button, Input, notification} from "antd";
import {useState} from "react";
import {createUserAPI} from "../../service/api.service.js";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async () => {
       const res =await createUserAPI(fullName, email, password, phone)
        console.log(res)


        if(res.data){
            notification.success({
                message: "create user",
                description: "tạo user thành công"
            })
        }else {
            notification.error({
                message: "error user",
                description: JSON.stringify(res.message)
            })
        }

        console.log(res.data)
    }
        return (
            <div className="user-form" style={{margin: "20px 0", width: "20%"}}>
                <div style={{display: "flex", gap: "10px", flexDirection: "column"}}>
                    <div>
                        <span>FullName</span>
                        <Input
                            onChange={(event) => setFullName(event.target.value)}
                        />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input
                            onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div>
                        <span>Password</span>
                        <Input.Password
                            onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    <div>
                        <span>Phone number</span>
                        <Input
                            onChange={(event) => setPhone(event.target.value)}/>
                    </div>
                    <div>
                        <Button type="primary" onClick={handleSubmit}>Create user</Button>
                    </div>
                </div>
            </div>
        )

}
export default UserForm