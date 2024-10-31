import {Button, Input} from "antd";
import {useState} from "react";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const handleSubmit = ()=>{
        alert(fullName+email+password+phone);
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
                       // value={fullName}
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