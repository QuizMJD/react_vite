import {Button, Input} from "antd";
import {useState} from "react";
import axios from "axios";


const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = ()=>{
        const URL_BACKEND = "http://localhost:8080/api/v1/user";
        const data = {
            fullName: fullName,
            email: email,
            phone: phone,
            password: password,
        }
        axios.post(URL_BACKEND,data)

        // alert(`${fullName}\n${email}\n${password}\n${phone}`);
    }

   return (
       <div className="user-form" style={{margin:"20px 0",width:"20%"}}>
           <div style={{display:"flex",gap:"10px",flexDirection:"column"}}>
               <div>
                   <div>
                       <p>Full Name: {fullName}</p>
                       <p>Email: {email}</p>
                       <p>Password: {password}</p>
                       <p>Phone: {phone}</p>
                   </div>
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