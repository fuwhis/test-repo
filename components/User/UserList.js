import { Component } from 'react';
import { Table } from 'antd';
import Link from 'next/link';
import { RoleType } from '../../constants/ConstTypes';

class UserList extends Component {
  constructor(props) {

    super(props);
    this.state = {
      dataSource: []
    };

    this.columns = [{
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      render: (text) => (
        <Link href={`/user/userDetail/${text}`}>
          <a>{text}</a>
        </Link>
      )
    }, {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (text) => <span>{RoleType[text]}</span>
    }];
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.list && nextProps.list !== prevState.dataSource) {
      return {
        dataSource: nextProps.list
      };
    }
    return null; 
  }

  componentDidMount() {
    // refresh page need reload data
    if(this.props.isServer) {
      this.props.fetchUserListData();
    }
  }

  render() {
    const { dataSource } = this.state;
    dataSource.map(item => {
      item.key = item.id;
      item.role = 10;
    });
    return (
      <Table
        style={{ minWidth: '600px' }}
        dataSource={dataSource}
        columns={this.columns}
        bordered
      />
    );
  }
}

export default UserList;
