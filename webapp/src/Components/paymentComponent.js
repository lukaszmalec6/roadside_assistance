import React, { Component } from "react";
import "../Layout/styles.css";
import VisaLogo from "../Assets/visa-logo.png";
import PayPalLogo from "../Assets/paypal-logo.png";
import BitcoinLogo from "../Assets/bitcoin-logo.png";
import Locked from "../Assets/locked.png";
import Payment from "../Assets/payment.png";
export default class LandingPage extends Component {
  render() {
    return (
      <section id="payment">
        <img src={Payment} alt="Payment" className="ico" />
        <section id="payment-form">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <img src={VisaLogo} alt="Visa" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src={PayPalLogo} alt="Paypal" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src={BitcoinLogo} alt="Bitcoin" />
              </a>
            </li>
          </ul>
          <div className="form">
            <div>
              <select>
                <option>Premium Plan</option>
                <option>Standard Plan</option>
                <option>Basic Plan</option>
              </select>
              <h6>Card number</h6>
              <div className="input">
                <input type="text" />
                <img src={Locked} />
              </div>
              <div className="expiry-date">
                <h6>Expiry date</h6>
                <select>
                  <option disabled selected hidden>
                    Month
                  </option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                </select>
                <select>
                  <option disabled selected hidden>
                    Year
                  </option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                </select>
              </div>
              <h6>Security Code</h6>
              <div className="input">
                <input type="text" />
                <img src={Locked} />
              </div>
            </div>
            <div className="info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.Lorem ipsum dolor sit amet.
              </p>
              <button className="proceed">Proceed</button>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
