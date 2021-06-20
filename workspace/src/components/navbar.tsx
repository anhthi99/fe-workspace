import { Menu } from "antd";
import { useState } from "react";
import {MENU} from '../constants/menu';
import { useHistory } from "react-router-dom";

export default function NavBar(){
    const history = useHistory();
    const [key, setKey] = useState('');
    const handleClick = (e : any) => {
        setKey(e.key);
        history.push(`/${e.key}`);
    }

        return(
            <Menu onClick={handleClick} selectedKeys={[key]} mode='horizontal' theme='dark'>
                {MENU.map(e => 
                <Menu.Item key={e.key} icon={e.icon}>
                    {e.title}
                </Menu.Item>
                   )
                }
            </Menu>
        );
}