import "./FatFooter.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMobile,
	faGlobe,
	faEnvelope,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const FatFooter = () => {
	return (
		<>
			<footer className="sticky-footer">
				<section className="section-padding footer-list">
					<Container>
						<Row>
							<Col lg={3} md={3}>
								<div className="footer-logo">
									<a className="logo" href="index.html">
										<img
											alt=""
											src="img/logo.png"
											className="img-fluid"
										/>
									</a>
								</div>
								<p>
									86 Petersham town, New South wales Waedll
									Steet, Australia
								</p>
								<p className="mb-0">
									<a href="#" className="text-dark">
										<FontAwesomeIcon
											icon={faMobile}
											fixedWidth
										/>{" "}
										+61 525 240 310
									</a>
								</p>
								<p className="mb-0">
									<a href="#" className="text-dark">
										<FontAwesomeIcon
											icon={faEnvelope}
											fixedWidth
										/>{" "}
										iamosahan@gmail.com
									</a>
								</p>
								<p className="mb-0">
									<a href="#" className="text-dark">
										<FontAwesomeIcon
											icon={faGlobe}
											fixedWidth
										/>{" "}
										www.askbootstrap.com
									</a>
								</p>
							</Col>

							<Col lg={2} md={2}>
								<h6 className="mb-4">Company</h6>
								<ul>
									<li>
										<a href="#">About us</a>
									</li>
									<li>
										<a href="#">Careers</a>
									</li>
									<li>
										<a href="#">Legal</a>
									</li>
									<li>
										<a href="#">FAQ</a>
									</li>
									<li>
										<a href="#">Privacy</a>
									</li>
									<li>
										<a href="#">Terms</a>
									</li>
									<li>
										<a href="#">Contact us</a>
									</li>
								</ul>
							</Col>

							<Col lg={2} md={2}>
								<h6 className="mb-4">Features</h6>
								<ul>
									<li>
										<a href="#">Retention</a>
									</li>
									<li>
										<a href="#">People</a>
									</li>
									<li>
										<a href="#">Messages</a>
									</li>
									<li>
										<a href="#">Infrastructure</a>
									</li>
									<li>
										<a href="#">Platform</a>
									</li>
									<li>
										<a href="#">Funnels</a>
									</li>
									<li>
										<a href="#">Live</a>
									</li>
								</ul>
							</Col>
							<Col lg={2} md={2}>
								<h6 className="mb-4">Solutions</h6>
								<ul>
									<li>
										<a href="#">Enterprise</a>
									</li>
									<li>
										<a href="#">Financial Services</a>
									</li>
									<li>
										<a href="#">Consumer Tech</a>
									</li>
									<li>
										<a href="#">Entertainment</a>
									</li>
									<li>
										<a href="#">Product</a>
									</li>
									<li>
										<a href="#">Marketing</a>
									</li>
									<li>
										<a href="#">Analytics</a>
									</li>
								</ul>
							</Col>

							<Col lg={3} md={3}>
								<h6 className="mb-4">NEWSLETTER</h6>
								<InputGroup>
									<FormControl
										type="text"
										placeholder="Email Address..."
									/>
									<InputGroup.Append>
										<Button className="py-0">
											<FontAwesomeIcon
												icon={faArrowRight}
											/>
										</Button>
									</InputGroup.Append>
								</InputGroup>
								<small>
									It is a long established fact that a reader
									will be distracted by..
								</small>
								<h6 className="mb-2 mt-4">DOWNLOAD APP</h6>
								<div className="app">
									<a href="#" className="mr-1">
										<img alt="" src="img/google.png" />
									</a>
									<a href="#">
										<img alt="" src="img/apple.png" />
									</a>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</footer>
		</>
	);
};

export default FatFooter;
