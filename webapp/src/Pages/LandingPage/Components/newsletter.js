import React, { Component } from "react";
import "../../../Layout/styles.css";

export default class Newsletter extends Component {
  render() {
    return (
      <section className="footer-section">
        <h5>Stay up to date</h5>
        <div className="center">
          <h6>Email</h6>
          <input type="text" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Subscribe</button>
        </div>
      </section>
    );
  }
}
