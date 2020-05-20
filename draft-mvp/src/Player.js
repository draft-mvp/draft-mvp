import React, { Component } from "react";
import Modal from "./Modal.js";

export default class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      drag: false
    };
  }

  handleModal = () => {
    console.log(`handlemodal ${this.props.player}`);
    this.setState({
      showModal: true
    });
  };

  handleCloseModal = () => {
    console.log("close modal");
    this.setState({
      showModal: false
    });
  };

  render() {
    const { player } = this.props;
    const { handleModal, handleCloseModal } = this;
    const { showModal } = this.state;
    if (showModal) {
      return (
        <div className="player">
          {player}
          <Modal showModal={showModal} handleCloseModal={handleCloseModal} />
        </div>
      );
    } else {
      return (
        <div className="player" onClick={handleModal}>
          {player}
          {/* <Modal showModal={showModal} handleCloseModal={handleCloseModal} /> */}
        </div>
      );
    }
  }
}
