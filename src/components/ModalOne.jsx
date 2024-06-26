import React, { Component } from "react";
import ReactModal from "react-modal";
import "../index.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    top: "45%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "40px",
    width: "290px",
    height: "400px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    transform: "translate(-50%, -50%)",
  },
};

class ModalOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: "",
      Lastname: "",
      Gender: "Male",
      Check: "no",
      phone: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    this.setState({
      [name]: type === "checkbox" ? (checked ? "yes" : "no") : value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { Firstname, Lastname, Gender, Check, phone } = this.state;
    const user = { Firstname, Lastname, Gender, Check, phone };
    this.props.addUser(user);
    this.props.closeModal();
    toast.success("Muvaffaqqiyatli ro'yxatdan o'tdingiz");
    this.setState({
      Firstname: "",
      Lastname: "",
      Gender: "Male",
      Check: "no",
      phone: "",
    });
  };

  render() {
    const { isOpen, closeModal } = this.props;
    const { Firstname, Lastname, Gender, Check, phone } = this.state;
    ReactModal.setAppElement("#root");
    return (
      <>
        <ReactModal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStyles}>
          <form
            onSubmit={this.handleSubmit}
            style={{ marginTop: "10px" }}
            className="d-flex flex-column text-center">
            <input
              type="text"
              name="Firstname"
              placeholder="Firstname"
              value={Firstname}
              onChange={this.handleInputChange}
              className="modal_global"
              // required
            />
            <input
              type="text"
              name="Lastname"
              placeholder="Lastname"
              value={Lastname}
              onChange={this.handleInputChange}
              className="modal_global"
              // required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={phone}
              onChange={this.handleInputChange}
              className="modal_global"
              // required
            />
            <select
              name="Gender"
              value={Gender}
              onChange={this.handleInputChange}
              className="modal_global">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <button
              type="submit"
              style={{
                width: "210px",
                height: "40px",
                background: "aqua",
                borderRadius: "5px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              className="New">
              Add
            </button>
          </form>
          <ToastContainer />
        </ReactModal>
      </>
    );
  }
}

export default ModalOne;
