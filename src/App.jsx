import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: "",
      Lastname: "",
      Group: "React N58",
      Check: "no",
      data: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      Firstname: this.state.Firstname,
      Lastname: this.state.Lastname,
      Group: this.state.Group,
      Check: this.state.Check,
    };
    this.setState((prevState) => ({
      data: [...prevState.data, user],
      Firstname: "",
      Lastname: "",
      Group: "React N58",
      Check: "no",
    }));
  };

  deleteData = (id) => {
    let dataCard = this.state.data.filter((_, i) => i !== id);
    this.setState({ data: dataCard });
  };

  render() {
    let dataItem = this.state.data.map((el, id) => (
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
        <p style={{ width: "200px" }}>{el.Group}</p>
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
    ));

    return (
      <>
        <div className="container">
          <div className="form">
            <form
              onSubmit={this.handleSubmit}
              className="d-flex"
              style={{ marginTop: "10px" }}>
              <input
                type="text"
                placeholder="Firstname"
                className={"p-1"}
                style={{
                  width: "200px",
                  marginRight: "20px",
                  padding: "5px",
                  borderRadius: "4px",
                  border: "1px solid #333",
                }}
                value={this.state.Firstname}
                onChange={(e) => this.setState({ Firstname: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Lastname"
                value={this.state.Lastname}
                onChange={(e) => this.setState({ Lastname: e.target.value })}
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
                className=""
                style={{
                  width: "200px",
                  padding: "5px",
                  borderRadius: "4px",
                  border: "1px solid #333",
                }}
                value={this.state.Group}
                onChange={(e) => this.setState({ Group: e.target.value })}>
                <option value="React N58" id="1">
                  React N58
                </option>
                <option value="React N53" id="2">
                  React N53
                </option>
                <option value="React N50" id="3">
                  React N50
                </option>
                <option value="React N45" id="4">
                  React N45
                </option>
              </select>
              <input
                type="checkbox"
                checked={this.state.Check === "yes"}
                onChange={(e) =>
                  this.setState({ Check: e.target.checked ? "yes" : "no" })
                }
                style={{ width: "20px", marginLeft: "20px", cursor: "pointer" }}
              />
              <button
                style={{
                  width: "100px",
                  background: "aqua",
                  borderRadius: "5px",
                  marginLeft: "150px",
                }}>
                Add
              </button>
            </form>
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
                Group
              </div>
              <div
                className="text-secondary-emphasis mb-3"
                style={{ fontWeight: "bolder", width: "200px" }}>
                Does work?
              </div>
            </div>
            {dataItem}
          </div>
        </div>
      </>
    );
  }
}

export default App;
