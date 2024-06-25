import React, { Component } from "react";
import Notification from "./components/Notification";
import ModalOne from "./components/ModalOne";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: "",
      Lastname: "",
      Gender: "Male",
      Check: "no",
      data: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { Firstname, Lastname, Gender, Check } = this.state;
    const user = { Firstname, Lastname, Gender, Check };
    this.setState((prevState) => ({
      data: [...prevState.data, user],
      Firstname: "",
      Lastname: "",
      Gender: "Male",
      Check: "no",
    }));
  };

  deleteData = (id) => {
    const updatedData = this.state.data.filter((_, index) => index !== id);
    this.setState({ data: updatedData });
  };

  handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    this.setState({
      [name]: type === "checkbox" ? (checked ? "yes" : "no") : value,
    });
  };

  render() {
    const { Firstname, Lastname, Gender, Check, data } = this.state;

    return (
      <>
        <div className="container">
          <Notification />
          <div className="form">
            <button onClick={<ModalOne />} className="New">
              Open Modal
            </button>
            <div
              className="students-list d-flex g-20"
              style={{ marginTop: "10px", gap: "20px" }}>
              <div
                className="text-secondary-emphasis mb-3"
                style={{ fontWeight: "bolder", width: "200px" }}>
                Firstname
              </div>
              <div
                className="text-secondary-emphasis mb-3"
                style={{ fontWeight: "bolder", width: "200px" }}>
                Lastname
              </div>
              <div
                className="text-secondary-emphasis mb-3"
                style={{ fontWeight: "bolder", width: "200px" }}>
                Gender
              </div>
              <div
                className="text-secondary-emphasis mb-3"
                style={{ fontWeight: "bolder", width: "200px" }}>
                Does work?
              </div>
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
                <p style={{ width: "200px" }}>{el.Firstname}</p>
                <p style={{ width: "200px" }}>{el.Lastname}</p>
                <p style={{ width: "200px" }}>{el.Gender}</p>
                <p style={{ width: "200px" }}>{el.Check}</p>
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
        </div>
      </>
    );
  }
}

export default App;
