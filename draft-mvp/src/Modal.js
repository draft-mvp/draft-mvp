import React from "react";

const Modal = ({ showModal, handleCloseModal }) => {
  const showModalClassName = showModal
    ? "modal display-block"
    : "modal display-none";
  return (
    <div className={showModalClassName}>
      <section className="modal-main">
        <h3>hello from modal</h3>
        <button onClick={handleCloseModal}>Close</button>
      </section>
    </div>
  );
};

export default Modal;
