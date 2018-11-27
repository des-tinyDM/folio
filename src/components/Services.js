import React, { Component } from "react";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="services" className={this.props.show && `s-services`}>
        {this.props.show && (
          <div className="row section-header has-bottom-sep">
            <div className="col-full">
              <h3 className="subhead">What I Do</h3>
              <h1 className="display-2">
                I've got everything you need to grow your company. Here are some
                of the skills that I can bring to the table.
              </h1>
            </div>
          </div>
        )}

        {this.props.show && (
          <div className="row services-list block-1-2 block-tab-full">
            <div className="col-block service-item">
              <div className="service-icon">
                <i class="fas fa-code" />
              </div>
              <div className="service-text">
                <h3 className="h2">Web Development</h3>
                <p>
                  Proven track record with multiple published fullstack
                  applications under my belt, I have experience with every step
                  of the development life cycle, ranging from market research to
                  implementation to maintenance and support.
                </p>
              </div>
            </div>

            <div className="col-block service-item">
              <div className="service-icon">
                <i class="fa fa-bug" />
              </div>
              <div className="service-text">
                <h3 className="h2">Test Driven Development</h3>
                <p>
                  Practicing TDD makes code easier to maintain and understand.
                  Using testing libraries like Enzyme, Jest, Jasmine, Chai, and
                  Cypress, my code is ready for when the next developer joins
                  the project.
                </p>
              </div>
            </div>

            <div className="col-block service-item">
              <div className="service-icon">
                <i class="fas fa-bullhorn" />
              </div>
              <div className="service-text">
                <h3 className="h2">Communication</h3>
                <p>
                  I've worked in cross-cultural and cross-displinary teams and
                  will bring my cultural competence and articulate and
                  accessible communication styles onto the job or into the
                  workplace insuring a smooth flow of information between all
                  parties and steps of the Agile workflow.
                </p>
              </div>
            </div>

            <div className="col-block service-item">
              <div className="service-icon">
                <i class="fas fa-code-branch" />
              </div>
              <div className="service-text">
                <h3 className="h2">Version Control/Git</h3>
                <p>
                  Git is a distributed version control system that makes it easy
                  to track changes throughout the development process. I have
                  ample experience using git and github solo and with a team.
                </p>
              </div>
            </div>

            <div className="col-block service-item">
              <div className="service-icon">
                <i class="fas fa-mobile-alt" />
              </div>
              <div className="service-text">
                <h3 className="h2">Responsive Design</h3>
                <p>
                  Whether you're building an app or website, my UI development
                  skills will be beneficial in constructing beautiful and
                  interactive pages.
                </p>
              </div>
            </div>

            <div className="col-block service-item">
              <div className="service-icon">
                <i class="fa fa-bug" />
              </div>
              <div className="service-text">
                <h3 className="h2">APIs and Databases</h3>
                <p>
                  I've designed, documented, and maintained complex backends
                  using Node with both relational and non-relational databases.
                  Experienced with PostgreSQL, SQL Server, MongoDB, and Prisma.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Services;
