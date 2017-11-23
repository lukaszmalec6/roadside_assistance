import React, { Component } from "react";
import "../Layout/styles.css";
export default class QuickContact extends Component {
  render() {
    return (
      <section className="footer-section">
        <h5>Quick contact</h5>

        <div className="center">
          <h6>Email</h6>
          <input type="text" />
          <h6>Message</h6>
          <input type="text" />
          <button>Send</button>
        </div>
      </section>
    );
  }
}
