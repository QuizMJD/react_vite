import {Button, Drawer, Table} from "antd";
import {useEffect} from "react";

const UserDetail = (props) => {
    const {dataDetail,setDataDetail,isDetailOpen,setIsDetailOpen} = props;
console.log(">>>.",dataDetail);
    // useEffect(() => {
    //     if (dataDetail) {
    //         console.log("Updated Data Detail: ", dataDetail);  // Log khi `dataDetail` đã được cập nhật
    //     }
    // }, [dataDetail]);  // `useEffect` chạy mỗi khi `dataDetail` thay đổi


    return (
        <>

            <Drawer width={"40vw"}
                title="Chi tiết User"
                    onClose={() => {setIsDetailOpen(false)
                        setDataDetail(null)
                    }
                    }

                    open={isDetailOpen}

            >
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <div>
                        ID:{dataDetail?._id}
                    </div>
                    <div>
                        Full Name:{dataDetail?.fullName}
                    </div>
                    <div>
                        Email: {dataDetail?.email}
                    </div>
                    <div>
                        Phone: {dataDetail?.phone}
                    </div>
                    <div style={{fontWeight: 'bold'}}>
                        Avatar
                    </div>
                    <div>
                        <img style={{borderRadius: '10%', height: 150, width: 150}}
                             src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail?.avatar}`}/>
                    </div>
                    <div>
                        <label htmlFor="btnUpdate" style={{
                            display: 'block',
                            width:"fit-content",
                            marginTop: '15px',
                            padding: '5px 10px',
                            backgroundColor: 'orange',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}

                        >Update Avatar</label>
                        <input type="file" hidden id="btnUpdate"  />
                    </div>

                </div>
                {/*<Button type='primary'>Update Avatar</Button>*/}
            </Drawer>
        </>
    )

}
export default UserDetail