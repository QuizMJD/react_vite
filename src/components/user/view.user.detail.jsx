import {Button, Drawer, notification} from "antd";
import { useState} from "react";
import {handleUploadFile, updateUserAvatarAPI} from "../../service/api.service.js";

const UserDetail = (props) => {
    const {dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen,loadUser} = props;
    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const handleOnChangeFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return;
        }
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))

        }

    }
    const handleUpdateUserAvatar = async () => {
        //1 update file
        const resUp = await handleUploadFile(selectedFile, "avatar");
        // setSelectedFile(preview)
        // console.log("me",resUp)
        if (resUp.data) {
            const newAvatar = resUp.data.fileUploaded;
            const resUpdateAvatar = await updateUserAvatarAPI(newAvatar,dataDetail._id,dataDetail.fullName,dataDetail.phone);
            if(resUpdateAvatar.data){
                notification.success({
                        message: "update user avater",
                        description: "cập nhật ảnh thành công"
                    }
                )
                setIsDetailOpen(false)
                setSelectedFile(null)
                setPreview(null)
                await loadUser();


            }else {
                notification.error({
                    message: "error update avatar",
                    description: JSON.stringify(resUpdateAvatar.message)
                })
            }

        } else {
            notification.error({
                message: "error upload",
                description: JSON.stringify(resUp.message)
            })

        }
    }

        return (


            <Drawer width={"40vw"}
                    title="Chi tiết User"
                    onClose={() => {
                        setIsDetailOpen(false)
                        setDataDetail(null)
                    }
                    }

                    open={isDetailOpen}

            >
                {dataDetail ?
                    <>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                            <div>
                                ID:{dataDetail._id}
                            </div>
                            <div>
                                Full Name:{dataDetail.fullName}
                            </div>
                            <div>
                                Email: {dataDetail.email}
                            </div>
                            <div>
                                Phone: {dataDetail.phone}
                            </div>

                            <div>
                                <div style={{fontWeight: 'bold'}}>
                                    Avatar
                                </div>
                                <div style={{
                                    marginLeft: '10px',
                                    height: "100px", width: "150px",
                                    border: "1px solid #ccc",
                                }}>
                                    <img style={{height: "100%", width: "100%"}}
                                        // src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail?.avatar}`}/>
                                         src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`}/>
                                </div>


                                <div>
                                    <label htmlFor="btnUpdate" style={{
                                        display: 'block',
                                        width: "fit-content",
                                        marginTop: '15px',
                                        padding: '5px 10px',
                                        backgroundColor: 'orange',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                    }}

                                    >Update Avatar</label>
                                    <input type="file" hidden id="btnUpdate"
                                           onChange={(e) => handleOnChangeFile(e)}
                                    />
                                </div>
                            </div>
                            {preview &&
                                <>
                                    <div style={{
                                        marginLeft: '10px',

                                        height: "100px", width: "150px",

                                    }}>
                                        <img style={{height: "100%", width: "100%", objectFit: "contain"}}
                                            // src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail?.avatar}`}/>
                                             src={preview}/>
                                    </div>
                                    <Button type='primary' style={{
                                        width: "fit-content",
                                        marginTop: '4px',
                                        padding: '5px 10px',
                                        backgroundColor: 'blue',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                    }}
                                            onClick={(preview) => handleUpdateUserAvatar(preview)}
                                    >Save</Button>
                                </>

                            }

                        </div>
                    </>
                    :
                    <>
                        <h1>Không có dữ liệu</h1>
                    </>


                }

            </Drawer>
        )


    }

export default UserDetail