import React, { Component } from "react";

export default class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { player } = this.props;
    return <div>{player}</div>;
  }
}
