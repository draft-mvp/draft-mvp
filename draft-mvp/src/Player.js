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
      showModal: !this.state.showModal
    });
  };

  //fix so that don't need to render player again, simply render modal if clicked, otherwise need to rerender whole player
  //list to render modal
  render() {
    const { player } = this.props;
    const { handleModal } = this;
    const { showModal } = this.state;
    if (showModal) {
      return (
        <div className="player">
          {/* player number*/ 12 + "  "}
          {player}
          <Modal
            showModal={showModal}
            handleCloseModal={handleModal}
            player={player}
          />
        </div>
      );
    } else {
      return (
        <div className="player" onClick={handleModal}>
          {/* player number*/ 12 + "  "}
          {player}
        </div>
      );
    }
  }
}
