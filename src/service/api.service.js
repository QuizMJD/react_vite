// import axios from "axios";
import axiosCustomize from "./axios.customize.js";

const createUserAPI =(fullName,email,password,phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        phone: phone,
        password: password,
    }
    return axiosCustomize.post(URL_BACKEND,data)
}
const updateUserAPI =(_id,fullName,phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        _id:_id,
        fullName: fullName,
        phone: phone
    }
    return axiosCustomize.put(URL_BACKEND,data)

}
const handleUploadFile =(file,folder) => {
    const URL_BACKEND = `/api/v1/file/upload`;
   let config={
       headers:{
           "upload-type":folder,
           "Content-Type": "multipart/form-data"
       }
   }
    const bodyFormData = new FormData();
   bodyFormData.append('fileImg', file);
    return axiosCustomize.post(URL_BACKEND,bodyFormData,config);
    }



const fetchAllUserAPI =() => {
    const URL_BACKEND = "/api/v1/user";
    return axiosCustomize.get(URL_BACKEND)


}
const deleteUserAPI =(_id) => {
    const URL_BACKEND = `/api/v1/user/${_id}`;
    return axiosCustomize.delete(URL_BACKEND)
}
const updateUserAvatarAPI =(avatar,_id,fullName,phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        avatar:avatar,
        _id:_id,
        fullName: fullName,
        phone: phone,
    }
    return axiosCustomize.put(URL_BACKEND,data)

}

export { createUserAPI, updateUserAPI, fetchAllUserAPI, deleteUserAPI,handleUploadFile,updateUserAvatarAPI };
