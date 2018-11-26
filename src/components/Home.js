import React, { Component } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { Parallax, Background } from "react-parallax";
import background from "../images/bluewallpaper.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Parallax
        id="home"
        class="s-home target-section"
        bgImg="images/bluewallpaper.png"
        strength={300}
        blur={{ min: -15, max: 15 }}
      >
        <Background className="custom-bg">
          <img src={background} alt="fill murray" className="custom-bg" />
        </Background>
        <div class="overlay" />
        <div class="shadow-overlay" />
        <div class="home-content">
          <div class="row home-content__main">
            <h3>Hey there!</h3>

            <h1>
              I'm Destiny, a dedicated <br />
              developer and creator of content. <br />
              Let's work to modernize <br />
              your NGO or business solution.
            </h1>

            <div class="home-content__buttons">
              <a href="#contact" class="smoothscroll btn btn--stroke">
                Start a Project
              </a>
              {/* <a href="#about" class="smoothscroll btn btn--stroke">
                More About Me
              </a> */}

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
                <span href="#about" class="smoothscroll btn btn--stroke">
                  More About Me
                </span>
              </NavLink>
            </div>
          </div>

          <div class="home-content__scroll">
            <a href="#about" class="scroll-link smoothscroll">
              <span>Scroll Down</span>
            </a>
          </div>

          <div class="home-content__line" />
        </div>

        <ul class="home-social">
          <li>
            <a href="#0">
              <i class="fab fa-facebook-f" aria-hidden="true" />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i class="fab fa-twitter" aria-hidden="true" />
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i class="fab fa-medium-m" aria-hidden="true" />
              <span>Medium</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/des-tinyDM">
              <i class="fab fa-github-alt" aria-hidden="true" />
              <span>Github</span>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/destiny-ross">
              <i class="fab fa-linkedin-in" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </Parallax>
    );
  }
}

export default Home;
