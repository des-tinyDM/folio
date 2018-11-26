import React, { Component } from "react";

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="clients" class="s-clients">
        <div class="row section-header has-bottom-sep">
          <div class="col-full">
            <h3 class="subhead">My Technology</h3>
            <h1 class="display-2">
              With a multitude of technologies and frameworks available, it can
              be confusing to get started. I'll use what's best for your
              project.
            </h1>
          </div>
        </div>

        <div class="row clients-outer">
          <div class="col-full">
            <div class="clients">
              <span href="#0" title="" class="clients__slide">
                <i className="devicon-html5-plain-wordmark colored" />
              </span>
              <span href="#0" title="" class="clients__slide">
                <i className="devicon-css3-plain-wordmark colored" />
              </span>
              <span href="#0" title="" class="clients__slide">
                <i className="devicon-javascript-plain colored" />
              </span>
              <span href="#0" title="" class="clients__slide">
                <i className="devicon-react-original-wordmark colored" />
              </span>
              <span href="#0" title="" class="clients__slide">
                <i className="devicon-vuejs-plain-wordmark colored" />
              </span>
              <span href="#0" title="" class="clients__slide">
                <i className="devicon-webpack-plain-wordmark colored" />
              </span>
              <span href="#0" title="" class="clients__slide">
                <i className="devicon-nodejs-plain-wordmark colored" />
              </span>
              <span href="#0" title="" class="clients__slide">
                <i className="devicon-express-original-wordmark colored" />
              </span>
              <span href="#0" title="" class="clients__slide">
                <i className="devicon-postgresql-plain-wordmark colored" />
              </span>
              <span href="#0" title="" class="clients__slide">
                <i className="devicon-d3js-plain colored" />
              </span>
              <span href="#0" title="" class="clients__slide">
                <i className="devicon-sass-original colored" />
              </span>
              <span href="#0" title="" class="clients__slide">
                <i className="devicon-git-plain-wordmark colored" />
              </span>
              <span href="#0" title="" class="clients__slide">
                <i className="devicon-nginx-plain-wordmark colored" />
              </span>
              <span href="#0" title="" class="clients__slide">
                <i className="devicon-heroku-plain-wordmark colored" />
              </span>
              <span href="#0" title="" class="clients__slide">
                <i class="devicon-csharp-plain-wordmark colored" />
              </span>
              <span href="#0" title="" class="clients__slide">
                <i class="devicon-dot-net-plain-wordmark colored" />
              </span>
              <span href="#0" title="" class="clients__slide">
                <i class="devicon-visualstudio-plain-wordmark colored" />
              </span>
              <span href="#0" title="" class="clients__slide">
                <i class="devicon-jquery-plain-wordmark colored" />
              </span>
              <span href="#0" title="" class="clients__slide">
                <i class="devicon-ubuntu-plain-wordmark colored" />
              </span>
              <span href="#0" title="" class="clients__slide">
                <i class="devicon-jasmine-plain-wordmark colored" />
              </span>
            </div>
          </div>
        </div>

        {/* <div class="row clients-testimonials" data-aos="fade-up">
          <div class="col-full">
            <div class="testimonials">
              <div class="testimonials__slide">
                <p>
                  Qui ipsam temporibus quisquam vel. Maiores eos cumque
                  distinctio nam accusantium ipsum. Laudantium quia consequatur
                  molestias delectus culpa facere hic dolores aperiam.
                  Accusantium quos qui praesentium corpori. Excepturi nam
                  cupiditate culpa doloremque deleniti repellat.
                </p>

                <img
                  src="images/avatars/user-01.jpg"
                  alt="Author image"
                  class="testimonials__avatar"
                />
                <div class="testimonials__info">
                  <span class="testimonials__name">Tim Cook</span>
                  <span class="testimonials__pos">CEO, Apple</span>
                </div>
              </div>

              <div class="testimonials__slide">
                <p>
                  Excepturi nam cupiditate culpa doloremque deleniti repellat.
                  Veniam quos repellat voluptas animi adipisci. Nisi eaque
                  consequatur. Quasi voluptas eius distinctio. Atque eos maxime.
                  Qui ipsam temporibus quisquam vel.
                </p>

                <img
                  src="images/avatars/user-05.jpg"
                  alt="Author image"
                  class="testimonials__avatar"
                />
                <div class="testimonials__info">
                  <span class="testimonials__name">Sundar Pichai</span>
                  <span class="testimonials__pos">CEO, Google</span>
                </div>
              </div>

              <div class="testimonials__slide">
                <p>
                  Repellat dignissimos libero. Qui sed at corrupti expedita
                  voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                  Autem eaque officia cum exercitationem sunt voluptatum
                  accusamus. Quasi voluptas eius distinctio.
                </p>

                <img
                  src="images/avatars/user-02.jpg"
                  alt="Author image"
                  class="testimonials__avatar"
                />
                <div class="testimonials__info">
                  <span class="testimonials__name">Satya Nadella</span>
                  <span class="testimonials__pos">CEO, Microsoft</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    );
  }
}

export default Clients;
