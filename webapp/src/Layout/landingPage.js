import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Umbrella from "../Assets/umbrella.png";
import Scroll from "../Assets/scroll.png";
import Purchase from "../Assets/purchase.png";
import Accident from "../Assets/accident.png";
import Mobile from "../Assets/mobile.png";
import Tools from "../Assets/tools.png";
import Payment from "../Assets/payment.png";
import Login from "../Pages/LandingPage/Components/login";
import "./styles.css";
import $ from "jquery";
export const LandingPageLayout = ({ component: Component, ...rest }) => {
  return (
    <div>
      <header className="header">
        <div className="menu">
          <Login />
          <ul>
            <li>
              <a href="#about">Company</a>
            </li>
            <li>
              <a href="#purchase">Find plan</a>
            </li>
            <li>
              <a href="#payment">Payment</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <span />
          <span />
          <span />
        </div>
        <div className="wrapper-header">
          <nav className="landing-nav">
            <ul>
              <li>
                <span />
              </li>
              <li>
                <a href="#about">Company</a>
              </li>
              <li>
                <a href="#purchase">Find plan</a>
              </li>
              <li>
                <a href="#payment">Payment</a>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
              <li>
                <a href="https://github.com/lukaszmalec6">Author</a>
              </li>
              <li>
                <span />
              </li>
            </ul>
          </nav>
          <span className="login-lg">
            <Login />
          </span>
        </div>
        <div>
          <div className="logotype">
            <div>
              <img src={Umbrella} alt="Roadside Assistance" />
            </div>
            <div>
              <h1>Roadside</h1>
              <h1 className="yellow">Assistance</h1>
            </div>
            <a href="#purchase">Purchase</a>
          </div>
        </div>
        <img src={Scroll} alt="Scroll down" className="scroll-icon" />
      </header>
      <article id="about">
        <section>
          <h2>Accident?</h2>
          <figure>
            <img src={Accident} alt="Accident" />
          </figure>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam.
          </p>
        </section>
        <section>
          <h2>We already know it</h2>
          <figure>
            <img src={Mobile} alt="Mobile" />
          </figure>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam.
          </p>
        </section>
        <section>
          <h2>Help is on the way</h2>
          <figure>
            <img src={Tools} alt="Tools" />
          </figure>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam.
          </p>
        </section>
      </article>

      <section id="purchase">
        <div>
          <img src={Purchase} alt="purchase" />
        </div>
        <div className="plans">
          <section>
            <h3> Lorem ipsum dolor sit</h3>
            <span className="premium">Premium</span>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor sed do
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                consectetur adipiscing elit, sed do eiusmod tempor sed do
              </li>
            </ul>
            <hr />
            <a href="#payment">
              <h5>$199 per month</h5>
              <span>Cancel anytime</span>
            </a>
          </section>
          <section>
            <h3> Lorem ipsum dolor sit</h3>
            <span className="premium">Premium</span>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor sed do
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                consectetur adipiscing elit, sed do eiusmod tempor sed do
              </li>
            </ul>
            <hr />
            <a href="#payment">
              <h5>$199 per month</h5>
              <span>Cancel anytime</span>
            </a>
          </section>
          <section>
            <h3> Lorem ipsum dolor sit</h3>
            <span className="premium">Premium</span>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor sed do
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                consectetur adipiscing elit, sed do eiusmod tempor sed do
              </li>
            </ul>
            <hr />
            <a href="#payment">
              <h5>$199 per month</h5>
              <span>Cancel anytime</span>
            </a>
          </section>
        </div>
      </section>
      <Route
        {...rest}
        render={matchProps => (
          <div>
            <Component {...matchProps} />
          </div>
        )}
      />
    </div>
  );
};

$(document).ready(function() {
  $(".menu").hide();
  $(".hamburger").click(function() {
    $(this).toggleClass("open");
    $(".menu").slideToggle("slow");
  });

  $(".menu a").click(function() {
    $(".menu").slideToggle("slow");
    if ($(".hamburger").hasClass("open")) {
      $(".hamburger").toggleClass("open");
    }
  });
});

export default LandingPageLayout;
