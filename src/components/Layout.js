import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Works from "./Works";
import Clients from "./Clients";
import Contact from "./Contact";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMounted: false,
      servicesMounted: false,
      worksMounted: false,
      clientsMounted: false,
      contactMounted: false
    };
  }

  logScroll = event => {
    this.setState({ scrollY: window.scrollY });
    if (window.scrollY > 100) {
      this.setState({ aboutMounted: true });
    }
    if (window.scrollY > 750) {
      this.setState({ servicesMounted: true });
    }
    if (window.scrollY > 1650) {
      this.setState({ worksMounted: true });
    }
    if (window.scrollY > 2975) {
      this.setState({ clientsMounted: true });
    }
    if (window.scrollY > 3650) {
      this.setState({ contactMounted: true });
    }
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.logScroll);
  };

  onNavOpen = e => {
    this.setState({ navOpen: true });
  };
  onNavClose = e => {
    this.setState({ navOpen: false });
  };

  render() {
    let {
      scrollY,
      aboutMounted,
      servicesMounted,
      worksMounted,
      clientsMounted,
      contactMounted
    } = this.state;
    let browserHeight = window.innerHeight;
    console.log(scrollY);
    console.log(browserHeight, scrollY);
    return (
      <div className={this.state.navOpen ? `menu-is-open` : null}>
        <Header
          open={this.state.navOpen}
          onNavOpen={this.onNavOpen}
          onNavClose={this.onNavClose}
        />
        <Home />
        {aboutMounted ? (
          <About show={true} />
        ) : (
          <div className="s-about" id="about" />
        )}
        {servicesMounted ? (
          <Services show={true} />
        ) : (
          <div className="s-services" id="services" />
        )}

        {worksMounted ? (
          <Works show={true} />
        ) : (
          <section className="s-works" id="works">
            <div className="intro-wrap" />
            <div className="col-full" />
          </section>
        )}
        {clientsMounted ? (
          <Clients show={true} />
        ) : (
          <div className="s-clients" id="clients" />
        )}
        {contactMounted ? (
          <Contact show={true} />
        ) : (
          <div className="s-contact" id="contact" />
        )}
      </div>
    );
  }
}

export default withRouter(Layout);
