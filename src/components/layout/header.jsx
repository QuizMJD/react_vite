import {Menu} from "antd";

import { UsergroupAddOutlined, HomeOutlined, BookOutlined } from '@ant-design/icons';
import {useState} from "react";
import {Link,} from "react-router-dom";

const Header = () => {

    const [current, setCurrent] = useState(() => {
        return localStorage.getItem("currentMenu") || "";

    });
    const onClick = (e) => {
        localStorage.setItem("currentMenu", e.key);

        console.log('click ', e);
        setCurrent(e.key);
    };
        const items = [
            {
                label: <Link to='/'>Home</Link>,
                key: 'user',
                icon: <HomeOutlined />,

            },
            {
                label: <Link to='/users'>Users</Link>,
                key: 'home',
                icon: <UsergroupAddOutlined/>,


            },
            {
                label: <Link to={'/products'}>Products</Link>,
                key: 'product',
                icon: <BookOutlined />,
            },

        ];
        return (

            <Menu onClick={onClick}
                  selectedKeys={[current]}
                  mode="horizontal"
                  items={items}/>

        )

}
export default Header