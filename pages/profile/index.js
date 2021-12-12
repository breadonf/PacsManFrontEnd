import React from "react";
import {getUserProfile} from "../../lib/auth"

export default class Profile extends React.component {
  state = {
    UserName: null
  }

  componentDidMount() {
      getUserProfile().then(UserName => this.setState({UserName}));
  }

  render() {
    return <pre>{JSON.stringify(this.state.UserName, null, 2)}</pre>;
  }
}
