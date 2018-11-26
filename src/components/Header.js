import React, { Component } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <header className="s-header">
        {/* <div className="header-logo">
          <span className="site-logo" href="/#home">
            <img src="images/logo.png" alt="Homepage" />
          </span>
        </div> */}

        <nav
          className={
            this.props.navOpen
              ? `header-nav menu-is-open`
              : "header-nav menu-is-open"
          }
        >
          <div
            className="header-nav__close"
            title="close"
            onClick={this.props.onNavClose}
          >
            <span>Close</span>
          </div>

          <div className="header-nav__content">
            <h3>Navigation</h3>

            <ul className="header-nav__list">
              <NavLink
                smooth
                to="/#home"
                scroll={element =>
                  element.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                  })
                }
                className="smoothscroll"
                title="home"
              >
                <li>
                  <span className="smoothscroll" href="#home" title="homes">
                    Home
                  </span>
                </li>
              </NavLink>

              <NavLink
                smooth
                to="/#about"
                scroll={element =>
                  element.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                  })
                }
                className="smoothscroll"
                title="about"
              >
                <li>
                  <span className="smoothscroll" href="#about" title="about">
                    About
                  </span>
                </li>
              </NavLink>

              <NavLink
                smooth
                to="/#services"
                scroll={element =>
                  element.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                  })
                }
                className="smoothscroll"
                title="services"
              >
                <li>
                  <span
                    className="smoothscroll"
                    href="#services"
                    title="services"
                  >
                    Services
                  </span>
                </li>
              </NavLink>

              <NavLink
                smooth
                to="/#works"
                scroll={element =>
                  element.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                  })
                }
                className="smoothscroll"
                title="works"
              >
                <li>
                  <span className="smoothscroll" href="#works" title="works">
                    Works
                  </span>
                </li>
              </NavLink>

              <NavLink
                smooth
                to="/#clients"
                scroll={element =>
                  element.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                  })
                }
                className="smoothscroll"
                title="clients"
              >
                <li>
                  <span className="smoothscroll" title="clients">
                    Clients
                  </span>
                </li>
              </NavLink>
              <NavLink
                smooth
                to="/#contact"
                scroll={element =>
                  element.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                  })
                }
                id="contactlink"
                className="smoothscroll"
                title="contact"
              >
                <li>
                  <span className="smoothscroll" title="contact">
                    Contact
                  </span>
                </li>
              </NavLink>
            </ul>

            <p>
              Perspiciatis hic praesentium nesciunt. Et neque a dolorum{" "}
              <a href="#0">voluptatem</a> porro iusto sequi veritatis libero
              enim. Iusto id suscipit veritatis neque reprehenderit.
            </p>

            <ul className="header-nav__social">
              <li>
                <a href="/#">
                  <i class="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="/#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="/#">
                  <i class="fab fa-medium-m" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="/#">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a href="/#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
              {/* <li>
                <a href="/#">
                  <i className="fab fa-dribbble" />
                </a>
              </li> */}
            </ul>
          </div>
        </nav>

        <div
          className="header-menu-toggle"
          onClick={this.props.onNavOpen}
          href="/#"
        >
          <span className="header-menu-text">Menu</span>
          <span className="header-menu-icon" />
        </div>
      </header>
    );
  }
}

export default Header;
