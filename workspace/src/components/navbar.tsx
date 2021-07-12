import { useEffect, useState } from "react";
import { MENU } from "../constants/menu";
import { Link, useLocation } from "react-router-dom";
import { faProjectDiagram, faSignOutAlt, faUser, faPlusCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BASE, PROFILE } from "../constants/url";
import { Badge, Space } from "antd";
import { useCookies } from "react-cookie";
import { APP_URL } from "../constants/api";
export default function NavBar() {
  const location = useLocation().pathname;
  const [key, setKey] = useState("");
  const [cookie, setCookie, removeCookie] = useCookies([''])
  useEffect(() => {
    setKey(location.slice(1))
  },[location])

  const logOut = () =>{
      removeCookie('session_token')
      document.location.href=APP_URL
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to='/dashboard' className="navbar-brand" >
              <FontAwesomeIcon icon={faProjectDiagram} />
              Workspace
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* {
                MENU.map(e => {
                  const x = (e.key === key) ? ' active' : ''
                  return(<li className="nav-item">
                  <Link className={`nav-link${x}`} to={`/${e.key}`} aria-current='page'>{e.title}</Link>
                </li>)
                })
                
              } */}
            </ul>
            <div className='navbar-nav d-flex'>
              <Space>
              <Badge count={100} title='xxx' >
                <Link to='/message' className='btn btn-primary'><FontAwesomeIcon icon={faEnvelope} /></Link>
                
              </Badge>
              <Link to={`${BASE.PROFILE}`} className='btn btn-success' data-bs-toggle="tooltip" title='Add project'><FontAwesomeIcon icon={faPlusCircle}/> Add Project</Link>
              <Link to={`${BASE.PROFILE}`} className='btn btn-secondary' data-bs-toggle="tooltip" title='Profile'><FontAwesomeIcon icon={faUser}/></Link>
              <button className='btn btn-light' data-bs-toggle="tooltip" title='Sign out'><FontAwesomeIcon icon={faSignOutAlt} onClick={logOut} /></button>
              </Space>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}
