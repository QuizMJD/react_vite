import {Button, Drawer, Table} from "antd";

const UserDetail = (props) => {
    const {dataDetail,setDataDetail,isDetailOpen,setIsDetailOpen} = props;

    return (
        <>

            <Drawer title="Chi tiết User"
                    onClose={() => setIsDetailOpen(false)}
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