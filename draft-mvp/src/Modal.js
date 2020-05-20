import React from "react";

//populate modal with api data
const Modal = ({ showModal, handleCloseModal, player }) => {
  const showModalClassName = showModal
    ? "modal display-block"
    : "modal display-none";
  return (
    <div className={showModalClassName}>
      <section className="modal-main">
        {/*player picture*/ "player picture"}
        {player}
        <button onClick={handleCloseModal}>Close</button>
      </section>
    </div>
  );
};

export default Modal;
