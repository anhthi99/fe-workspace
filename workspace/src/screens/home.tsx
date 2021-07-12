import React from "react";
import ApiService from "../services/api.service";
import { Link } from "react-router-dom";
import { Divider, Space, Typography } from "antd";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar,faNewspaper, faAngleDoubleRight, faBookReader} from '@fortawesome/free-solid-svg-icons'
import Skeleton from '@material-ui/lab/Skeleton';
import { VERSION } from "../constants/api";
import { BASE } from "../constants/url";

interface IProps {}

interface IState {
  value: any;
}

const {Text } = Typography
export default class Home extends React.Component<{}, IState> {
  private xx = new ApiService();
  constructor(props: any) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  componentDidMount() {
    // this.xx.get(API_URL.HOME.TEMP).subscribe(res => {
    //     console.log(res);
    // })
  }

  render() {
     const space = '    '
    return (
      <div className="container">
        <div className="row g-3">
          <div className="col-4">
          <Divider orientation='left' >DỰ ÁN</Divider>
            <div className="shadow rounded p-3 bg-light">
                <ul className='list-unstyled'>
                    <li className='h5'>
                        <Link to='x1'><FontAwesomeIcon icon={faStar} color='#ffe32b' /> Dự án tháng 1</Link>
                    </li>
                    <li className='h5'>
                        <Link to='x1'><FontAwesomeIcon icon={faStar} color='#ffe32b' /> Dự án tháng 1</Link>
                    </li>
                    <li className='h5'>
                        <Link to='x1'><FontAwesomeIcon icon={faStar} color='#ffe32b' /> Dự án tháng 1</Link>
                    </li>
                    <li className='h5'>
                        <Link to='x1'><FontAwesomeIcon icon={faStar} color='#ffe32b' /> Dự án tháng 1</Link>
                    </li>
                    <li className='h5'>
                        <Link to='x1'><FontAwesomeIcon icon={faStar} color='#ffe32b' /> Dự án tháng 1</Link>
                    </li>

                </ul>
                <div className='row-12 text-end'>
                  <Link to={`${BASE.PROJECT}`}>Xem tất cả  <FontAwesomeIcon icon={faAngleDoubleRight} /></Link>
                </div>  
            </div>
          </div>
          <div className="col-4">
          <Divider orientation='left' >BẢN TIN</Divider>
            <div className="shadow rounded p-3 bg-light">
            <ul className='list-unstyled'>
                    <li className='h6'>
                    
                        <Link to='x1'><FontAwesomeIcon icon={faNewspaper} color='#1b2340' />{space}Thông báo một số vấn đề liên quan đến dịch covid-19</Link>
                    </li>
                    <li>
                        {/* <FontAwesomeIcon icon={faStar} color='#ffe32b' />
                        <Link to='x1'>x1</Link> */}
                    </li>
                    <li>
                        <Link to='x1'>x1</Link>
                    </li>
                    <li>
                        <Link to='x1'>x1</Link>
                    </li>
                    <li>
                        <Link to='x1'>x1</Link>
                    </li>
                    <li>
                        <Link to='x1'>x1</Link>
                    </li>
                    <li>
                        <Link to='x1'>x1</Link>
                    </li>
                    <li>
                        <Link to='x1'>x1</Link>
                    </li>
                    <li>
                        <Link to='x1'>x1</Link>
                    </li>
                    <li>
                        <Link to='x1'>x1</Link>
                    </li>
                    <li>
                        <Link to='x1'>x1</Link>
                    </li>
                    <li>
                        <Link to='x1'>x1</Link>
                    </li>
                </ul>
                <div className='row-12 text-end'>
                  <Link to={`${BASE.NEWS}`}>Xem tất cả  <FontAwesomeIcon icon={faAngleDoubleRight} /></Link>
                </div>  
            </div>
          </div>
         <div className='col-4'>
         <Divider orientation='left' >WIKI</Divider>
             <div className='shadow rounded p-3 bg-light'>
             <ul className='list-unstyled'>
                    <li className='h6'>
                    
                        <Link to='x1'><FontAwesomeIcon icon={faBookReader} color='#1b2340' />{space}Hướng dẫn sử dụng Git</Link>
                    </li>
                    <li>
                        {/* <FontAwesomeIcon icon={faStar} color='#ffe32b' />
                        <Link to='x1'>x1</Link> */}
                    </li>
                    <li>
                        <Link to='x1'>x1</Link>
                    </li>
                    <li>
                        <Link to='x1'>x1</Link>
                    </li>
                    <li>
                        <Link to='x1'>x1</Link>
                    </li>
                    <li>
                        <Link to='x1'>x1</Link>
                    </li>
                </ul>
                <div className='row-12 text-end'>
                  <Link to={`${BASE.WIKI}`}>Xem tất cả  <FontAwesomeIcon icon={faAngleDoubleRight} /></Link>
                </div>  
             </div>
         </div>
        </div>
        <div className='row pt-5'>
              <div className='col-12 text-center img-content'>
              <Text>Bạn có thể tải ứng dụng <b>Workspace</b> trên nền tảng di động:</Text><br/>
                {/* <Link></Link> */}
                <Link to='#' title='Android'>
                <img src="./images/download-android.png" alt="text" width='150' height='75' />
                </Link>
                <Link to='#' title='IOS'>
                <img src="./images/download-ios.png" alt="text" width='150' height='75' />
                </Link>
              </div>
        </div>
        <div className='row pt-2'>
                <div className='col-12 text-center'>
                  <p className='text-primary'>©Anh Thi. Phiên bản {VERSION}</p>
                </div>
        </div>
      </div>
    );
  }
}
