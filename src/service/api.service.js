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
const updateUserAPI =() => {
}
const fetchAllUserAPI =() => {
    const URL_BACKEND = "/api/v1/user";
    return axiosCustomize.get(URL_BACKEND)


}

export { createUserAPI, updateUserAPI, fetchAllUserAPI };
