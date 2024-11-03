import { Space, Table, Tag } from 'antd';

const UserTable = (props) => {
    const {user} = props;

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id'

        },
        {
            title: 'Full Name',
            dataIndex: 'fullName'

        },
        {
            title: 'Email',
            dataIndex: 'email'

        }
    ];






    return (<Table columns={columns}
                   dataSource={user}
                   rowKey={"_id"}

    />)
}
export default UserTable;