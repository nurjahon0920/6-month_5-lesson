import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

class Notification extends Component {
  notify = () => {
    toast("🦄 Muvaffaqqiyatli ro'yxatdan o'tdingiz");
  };

  render() {
    return (
      <div>
        <button onClick={this.notify}></button>
        <ToastContainer />
      </div>
    );
  }
}

export default Notification;
