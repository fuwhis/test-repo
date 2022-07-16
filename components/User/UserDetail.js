import { Component, Fragment } from 'react';

class UserDetail extends Component {
  constructor(props) {
    super(props);
    const { router: { query } } = props;
    this.state = { username: query.username };
  }

  render() {
    return (
      <Fragment>
        <h1>User info：{this.state.username}</h1>
      </Fragment>
    );
  }
}

export default UserDetail;
