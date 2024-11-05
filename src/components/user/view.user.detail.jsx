import {Button, Drawer, Table} from "antd";
import {useEffect} from "react";

const UserDetail = (props) => {
    const {dataDetail,setDataDetail,isDetailOpen,setIsDetailOpen} = props;

    // useEffect(() => {
    //     if (dataDetail) {
    //         console.log("Updated Data Detail: ", dataDetail);  // Log khi `dataDetail` đã được cập nhật
    //     }
    // }, [dataDetail]);  // `useEffect` chạy mỗi khi `dataDetail` thay đổi


    return (
        <>

            <Drawer title="Chi tiết User"
                    onClose={() => {setIsDetailOpen(false)
                        setDataDetail(null)
                    }
                    }

                    open={isDetailOpen}
            >
                <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
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
                </div>
            </Drawer>
        </>
    )

}
export default UserDetail