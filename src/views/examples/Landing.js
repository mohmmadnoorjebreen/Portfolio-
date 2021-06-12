/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import promo1 from "assets/img/theme/bookpic.PNG";
import ill2 from "assets/img/ill/ill-2.svg";
import hap from "assets/img/theme/hap.PNG"
import Pizza from "assets/img/theme/s1.PNG"
import bus from "assets/img/theme/s2.PNG"

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";


// index page sections


class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">

                        <span>Reaching a professional level in dealing with technology and programming is my ambition</span>
                      </h1>
                      <p className="lead text-white">
                        Here I will review some of the projects that I am proud to have worked on
                      </p>

                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0"  >
                        <CardBody className="py-5" >

                          <h6 className="text-primary text-uppercase">
                            HAPPICATION
                          </h6>
                          <p className="description mt-3">
                            Website was customers
                            can find cottage to rent, see their prices, and make a reservation.

                          </p>

                          <div>
                            <img onClick={e => {e.preventDefault() ; window.open('https://elegant-fermi-33e370.netlify.app/')}}  style={{ width: 260 }, { height: 130 }}
                              alt="..."
                              src={hap}
                            />

                          </div>

                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0" >
                        <CardBody className="py-5">

                          <h6 className="text-success text-uppercase">
                            Chocolate-Pizza
                          </h6>
                          <p className="description mt-3">
                            This project reflects the design ability
                            <br></br>
                            <br></br>
                            <br></br>
                          </p>
                          <img onClick={e => {e.preventDefault() ; window.open('https://quirky-heisenberg-c12ec9.netlify.app/') } } style={{ width: 260 }, { height: 130 }}
                            alt="..."
                            src={Pizza}

                          />

                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0" >
                        <CardBody className="py-5" >

                          <h6 className="text-warning text-uppercase">
                            bus-mall                          </h6>
                          <p className="description mt-3">
                            This project makes statistics for the favorite products of the site visitors by displaying what they liked .
                          </p>
                          <img onClick={e => {e.preventDefault() ; window.open('https://mohmmadnoorjebreen.github.io/bus-mall/') } }   style={{ width: 260 }, { height: 130 }}
                            alt="..."
                            src={bus}

                          />

                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={promo1}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>HAPPICATION</h3>
                    <p>
                      This is the biggest project I have worked on so far.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
            
                          <div>
                            <h6 className="mb-0">Problem domain:</h6>
                            <p>
                              People who want to rent a private cottage for their vacation, have a hard time asking and searching for one on social media.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                       
                          <div>
                            <h6 className="mb-0">
                              Solution:                            </h6>
                            <p>
                              Website was customers
                              can find cottage to rent, see their prices, and make a reservation.

                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={ill2}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">software developer </h4>
                      <p className="text-white">
                      I believe the strong drive to keep going, is the belief in the importance of taking this step at this stage of my life
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            about me
                          </h5>
                          <p>
                          learning and working on a programming language with the professionals is something that always excited me.
                          </p>
                        
                        </div>
                       
                      </div>
                    </CardBody>
                  </Card>
                 
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
         
       
         
         
        </main>
        
      </>
    );
  }
}

export default Landing;
