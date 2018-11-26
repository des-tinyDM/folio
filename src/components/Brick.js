import React, { Component } from "react";

class Brick extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="masonry__brick" data-aos="fade-up">
        <div
          class="item-folio"
          onClick={e => this.props.click(this.props.site)}
        >
          <div class="item-folio__thumb">
            <a class="thumb-link" title="The Beetle Car" data-size="1050x700">
              <img
                src={this.props.site.one}
                srcset={`${this.props.site.one} 1x, ${this.props.site.two} 2x`}
                alt=""
              />
            </a>
          </div>

          <div class="item-folio__text">
            <h3 class="item-folio__title">{this.props.site.name}</h3>
            <p class="item-folio__cat">{this.props.site.technology}</p>
          </div>
          <span onClick={e => e.stopPropagation()}>
            <a
              href={this.props.site.github}
              class="item-folio__project-link"
              title="Project link"
              target="_blank"
            >
              <i class="icon-link" />
            </a>
          </span>

          <div class="item-folio__caption">
            <p>
              Vero molestiae sed aut natus excepturi. Et tempora numquam.
              Temporibus iusto quo.Unde dolorem corrupti neque nisi.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Brick;
