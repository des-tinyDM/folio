import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      emailAddress: "",
      subject: "",
      message: "",
      err: null
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onMessageSubmit = e => {
    e.preventDefault();
    let emailBody = {
      name: this.state.name,
      emailAddress: this.state.emailAddress,
      subject: this.state.subject,
      message: this.state.message
    };
    console.log("emailing:", emailBody);
    axios
      .post("/email", { emailBody })
      .then(res => {
        console.log(res);
        this.setState({ success: "Your email was sent successfully!" });
      })
      .catch(err => this.setState({ err: "There was an error." }));
  };
  render() {
    let { show } = this.props;
    return (
      <section className="s-contact">
        <div className="overlay" />
        <div className="contact__line" />

        <div className="row section-header" id="contact">
          <div className="col-full contact-header">
            <h3 className="subhead">Contact Me</h3>
            <h1 className="display-2 display-2--light">
              Reach out to start a new project
            </h1>
          </div>
        </div>

        <div className="row contact-content">
          <div className="contact-primary">
            <h3 className="h6">Send Me A Message</h3>

            <form name="contactForm" id="contactForm">
              <fieldset>
                <div className="form-field">
                  <input
                    name="name"
                    type="text"
                    id="contactName"
                    placeholder="Your Name"
                    value={this.state.name}
                    minlength="2"
                    required=""
                    aria-required="true"
                    className="full-width"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-field">
                  <input
                    name="emailAddress"
                    type="email"
                    id="contactEmail"
                    placeholder="Your Email"
                    value={this.state.emailAddress}
                    required=""
                    aria-required="true"
                    className="full-width"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-field">
                  <input
                    name="subject"
                    type="text"
                    id="contactSubject"
                    placeholder="Subject"
                    value={this.state.subject}
                    className="full-width"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-field">
                  <textarea
                    name="message"
                    id="contactMessage"
                    placeholder="Your Message"
                    value={this.state.message}
                    rows="10"
                    cols="50"
                    required=""
                    aria-required="true"
                    className="full-width"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-field">
                  <button
                    className="full-width btn--primary"
                    onClick={this.onMessageSubmit}
                  >
                    Submit
                  </button>
                  <div className="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1" />
                      <div className="bounce2" />
                      <div className="bounce3" />
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>

            {this.state.err && (
              <div className="message-warning">{this.state.err}</div>
            )}

            {this.state.success && (
              <div className="message-success">
                {this.state.success}
                <br />
              </div>
            )}
          </div>

          <div className="contact-secondary">
            <div className="contact-info">
              <h3 className="h6 hide-on-fullwidth">Contact Info</h3>

              <div className="cinfo">
                <h5>Where to Find Me</h5>
                <p>
                  102 Maple Hill Ln
                  <br />
                  Akron, OH
                  <br />
                  44312 US
                </p>
              </div>

              <div className="cinfo">
                <h5>Email Us At</h5>
                <p>
                  destinyleaross@gmail.com
                  <br />
                </p>
              </div>

              <div className="cinfo">
                <h5>Call Us At</h5>
                <p>
                  Phone: (+1) 234 303 8079
                  <br />
                </p>
              </div>

              <ul className="contact-social">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-behance" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-dribbble" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
