import React, { Component } from "react";
import Payment from "./Components/paymentComponent";
import Newsletter from "./Components/newsletter";
import QuickContact from "./Components/quickContact";
import Terms from "./Components/termsAndContidions";
import Footer from "../../Assets/footer.png";
export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <section>
          <Payment />
        </section>

        <section
          style={{
            marginTop: "7%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div>
            <img src={Footer} alt="Footer" />
          </div>
          <footer id="footer">
            <Newsletter />
            <QuickContact />
            <Terms />
          </footer>
        </section>
        <div className="cpyright">
          <a href="https://github.com/lukaszmalec6">Author</a>
        </div>
      </div>
    );
  }
}
