import React from "react";
import {
  Table,
  SpinProps,
  TablePaginationConfig,
} from "antd";
//import { columns, data } from "../constants/mock";
import { LoadingOutlined } from "@ant-design/icons";
import ApiService from "../services/api.service";
import { API_URL } from "../constants/api";

interface IProps {}
const spin = <LoadingOutlined size={24} spin />;

interface IState extends TablePaginationConfig {
  loading: boolean | SpinProps;
  text: string;
  data: any[];
}
// const columns = [
//   {
//     title: "Tên dự án",
//     dataIndex: "name",
//     key: "name",
//   },
//   {
//     title: "Loại",
//     dataIndex: "p_type",
//     key: "p_type",
//   },
//   {
//     title: "Thời gian dự kiến",
//     dataIndex: "plan_time",
//     key: "plan_time",
//   },
//   {
//     title: "Tổng thời gian",
//     dataIndex: "total_time",
//     key: "total_time",
//   },
//   {
//     title: "Ngày tạo",
//     dataIndex: "createdAt",
//     key: "createdAt",
//   },
//   {
//     title: "Cập nhật lần cuối",
//     dataIndex: "updatedAt",
//     key: "updatedAt",
//   },
// ];

export default class Project extends React.Component<IProps, IState> {
  private service = new ApiService();
  constructor(props: IProps) {
    super(props);
    this.state = {
      loading: false,
      text: "",
      data: [],
      current: 1,
      pageSize: 10,
    };
  }

  componentDidMount() {
    //console.log('chuyen-trang')
    this.getData({
      current: this.state.current,
      pageSize: this.state.pageSize,
    });
  }

  changeHandle = (pagination: TablePaginationConfig) => {
    this.setState({
      ...pagination,
    });
    this.getData(pagination);
  };

  getData = (pag: any) => {
    const page = { page_index: pag.current, page_size: pag.pageSize };
    this.setState({ loading: { indicator: spin } });
    this.service
      .post(API_URL.PROJECT.LIST, { pagination: page })
      .subscribe((res) => {
        if (res.data !== undefined) {
          res.data = res.data.map((e: any) => {
            e.createdAt = Intl.DateTimeFormat("vi-VN").format(
              new Date(e.createdAt)
            );
            e.updatedAt = Intl.DateTimeFormat("vi-VN").format(
              new Date(e.updatedAt)
            );
            return e;
          });
          this.setState({ data: res.data, loading: false, total: res.total });
        } else {
          this.setState({ loading: false });
        }
      });
  };

  render() {
    const pagination = {
      current: this.state.current,
      pageSize: this.state.pageSize,
      total: this.state.total,
    };
    return (
      <>
        <p>This is project</p>
      </>
      // <Table
      //   columns={columns}
      //   dataSource={this.state.data}
      //   rowKey={(record) => record._id}
      //   loading={this.state.loading}
      //   onChange={this.changeHandle}
      //   pagination={pagination}
      //   bordered={true}
      // />
    );
  }
}
