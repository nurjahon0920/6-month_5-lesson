import React, { Component } from "react";
import Notification from "./components/Notification";
import ModalOne from "./components/ModalOne";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      data: [],
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  addUser = (user) => {
    this.setState((prevState) => ({
      data: [...prevState.data, user],
    }));
  };

  deleteData = (id) => {
    const updatedData = this.state.data.filter((_, index) => index !== id);
    this.setState({ data: updatedData });
  };

  render() {
    const { isOpen, data } = this.state;

    return (
      <>
        <div className="container">
          <div className="top">
            <Notification />
          </div>
          <div
            className="students-list d-flex"
            style={{ marginTop: "10px", gap: "20px", marginBottom: "10px" }}>
            <div
              className="text-secondary-emphasis mb-3"
              style={{ fontWeight: "bolder", width: "190px" }}>
              Firstname
            </div>
            <div
              className="text-secondary-emphasis mb-3"
              style={{ fontWeight: "bolder", width: "190px" }}>
              Lastname
            </div>
            <div
              className="text-secondary-emphasis mb-3"
              style={{ fontWeight: "bolder", width: "190px" }}>
              Gender
            </div>
            <div
              className="text-secondary-emphasis mb-3"
              style={{ fontWeight: "bolder", width: "190px" }}>
              Phone
            </div>
            <button onClick={this.openModal} className="New">
              Open Modal
            </button>
            <ModalOne
              isOpen={isOpen}
              closeModal={this.closeModal}
              addUser={this.addUser}
            />
          </div>
          {data.map((el, id) => (
            <div
              key={id}
              style={{
                display: "flex",
                alignItems: "start",
                gap: "20px",
                marginBottom: "10px",
              }}>
              <p style={{ width: "190px" }}>{el.Firstname}</p>
              <p style={{ width: "190px" }}>{el.Lastname}</p>
              <p style={{ width: "190px" }}>{el.Gender}</p>
              <p style={{ width: "190px" }}>{el.phone}</p>
              <button
                onClick={() => this.deleteData(id)}
                style={{
                  background: "#ff0000",
                  width: "100px",
                  height: "40px",
                  color: "#fff",
                  cursor: "pointer",
                  borderRadius: "5px",
                  marginLeft: "-50px",
                }}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
