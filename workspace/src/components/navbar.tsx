import { Menu } from "antd";
import { useEffect, useState } from "react";
import {MENU} from '../constants/menu';
import { Link, useHistory, useLocation } from "react-router-dom";

export default function NavBar(){
    const history = useHistory();
    const location = useLocation().pathname;
    const [key, setKey] = useState('');

    const handleClick = (e : any) => {
        setKey(e.key);
    }

        return(
            <Menu onClick={handleClick} selectedKeys={[key]} mode='horizontal' theme='dark'>
                {MENU.map(e => 
                <Menu.Item key={e.key} icon={e.icon}>
                    <Link to={e.key}>{e.title}</Link>
                </Menu.Item>
                   )
                }
            </Menu>
        );
}