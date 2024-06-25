import React, { Component } from "react";
import ReactModal from "react-modal";
import "../index.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };
  render() {
    const { isOpen } = this.state;
    const { openModal, closeModal } = this;
    ReactModal.setAppElement("#root");
    return (
      <div>
        {/* <button onClick={openModal}>Open Modal</button> */}
        <ReactModal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStyles}>
          <form
            onSubmit={this.handleSubmit}
            className="d-flex"
            style={{ marginTop: "10px" }}>
            <input
              type="text"
              name="Firstname"
              placeholder="Firstname"
              value={Firstname}
              onChange={this.handleInputChange}
              className="p-1"
              style={{
                width: "200px",
                marginRight: "20px",
                padding: "5px",
                borderRadius: "4px",
                border: "1px solid #333",
              }}
              required
            />
            <input
              type="text"
              name="Lastname"
              placeholder="Lastname"
              value={Lastname}
              onChange={this.handleInputChange}
              style={{
                width: "200px",
                marginRight: "20px",
                padding: "5px",
                borderRadius: "4px",
                border: "1px solid #333",
              }}
              required
            />
            <select
              name="Gender"
              value={Gender}
              onChange={this.handleInputChange}
              style={{
                width: "200px",
                padding: "5px",
                borderRadius: "4px",
                border: "1px solid #333",
              }}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="checkbox"
              name="Check"
              checked={Check === "yes"}
              onChange={this.handleInputChange}
              style={{ width: "20px", marginLeft: "20px", cursor: "pointer" }}
            />
          </form>
          <button
            type="submit"
            onClick={openModal}
            style={{
              width: "100px",
              background: "aqua",
              borderRadius: "5px",
              marginLeft: "150px",
            }}>
            Add
          </button>
        </ReactModal>
      </div>
    );
  }
}
export default Modal;
