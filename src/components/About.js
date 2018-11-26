import React, { Component } from "react";
import CountUp from "react-countup";

class About extends Component {
  state = {};

  render() {
    return (
      <section
        id="about"
        className={this.props.show ? `s-about mounted` : `s-about unmounted`}
      >
        {this.props.show && (
          <div className="row section-header has-bottom-sep" data-aos="fade-up">
            <div className="col-full">
              <h3 className="subhead subhead--dark">Hello There</h3>
              <h1 className="display-1 display-1--light">I am Destiny</h1>
            </div>
          </div>
        )}

        {this.props.show && (
          <div className="row about-desc" data-aos="fade-up">
            <div className="col-full">
              <p>
                I'm a once campaign manager and Returned Peace Corps Volunteer.
                I spent a year living and working with the wonderful people of
                Tanzania, and am fluent in Kiswahili. Na ninapamisi mno
                Tanzania! My journey into web development began in the village
                while I was serving. I turned on my solar-powered phone, opened
                SoloLearn and was hooked!
              </p>
            </div>
          </div>
        )}

        {this.props.show && (
          <div
            className="row about-stats stats block-1-4 block-m-1-2 block-mob-full"
            data-aos="fade-up"
          >
            <div className="col-block stats__col">
              <div className="stats__count">
                <CountUp end={1505} duration={4} delay={2} useEasing={true} />
              </div>
              <h5>Cups of Coffee</h5>
            </div>
            <div className="col-block stats__col">
              <div className="stats__count">
                <CountUp end={7} duration={4} delay={2} useEasing={true} />
              </div>
              <h5>Fullstack Applications</h5>
            </div>
            <div className="col-block stats__col ">
              <div className="stats__count">
                <CountUp end={90} duration={4} delay={2} useEasing={true} />
              </div>
              <h5>Github Repos</h5>
            </div>
            <div className="col-block stats__col">
              <div className="stats__count">
                <CountUp end={11} duration={4} delay={2} useEasing={true} />
              </div>
              <h5>Happy Clients</h5>
            </div>
          </div>
        )}

        <div className="about__line" />
      </section>
    );
  }
}

export default About;
