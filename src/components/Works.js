import React, { Component } from "react";
import portfolio from "./portfolio";
import Masonry from "./Masonry";
import Brick from "./Brick";

class Works extends Component {
  constructor(props) {
    super(props);
    this.state = { site: null };
  }
  onClickBrick = site => {
    console.log("clicked");
    this.setState({ site: site });
  };
  render() {
    let { site } = this.state;
    let { show } = this.props;
    console.log(this.state);
    return (
      <section id="works" className={show && "s-works"}>
        {show && (
          <div className="intro-wrap">
            <div
              className="row section-header has-bottom-sep light-sep"
              data-aos="fade-up"
            >
              <div className="col-full">
                <h3 className="subhead">Recent Works</h3>
                <h1 className="display-2 display-2--light">
                  Check out some of my latest works.
                </h1>
              </div>
            </div>
          </div>
        )}
        {show && (
          <Masonry>
            {portfolio.map(brick => (
              <Brick site={brick} click={this.onClickBrick} />
            ))}
          </Masonry>
        )}
        {site && (
          <div className="site-fullscreen">
            <div
              className="site-fullscreen__close"
              title="close"
              onClick={() => this.setState({ site: null })}
            >
              <span>Close</span>
            </div>
            <img src={site.fulldisplay} />
            <h1>{site.name}</h1>
            <p>{site.description}</p>
          </div>
        )}
      </section>
    );
  }
}

export default Works;
