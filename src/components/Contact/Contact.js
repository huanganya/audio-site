import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";

const Contact = () => {
	return (
		<ContentWrapper>
			<Container fluid>
				<section className="section-padding">
					<div>
						<Row>
							<Col lg={4} md={4}>
								<h3 className="mt-1 mb-4">Get In Touch</h3>
								<h6 className="text-dark">Address :</h6>
								<p>
									86 Petersham town, New South wales Waedll
									Steet, Australia PA 6550
								</p>
								<h6 className="text-dark">Phone :</h6>
								<p>+91 12345-67890, (+91) 123 456 7890</p>
								<h6 className="text-dark">Mobile :</h6>
								<p>(+20) 220 145 6589, +91 12345-67890</p>
								<h6 className="text-dark">Email :</h6>
								<p>iamosahan@gmail.com, info@gmail.com</p>
								<h6 className="text-dark">Website :</h6>
								<p>www.askbootstrap.com</p>
							</Col>

							<Col lg={8} md={8}>
								<div className="card">
									<div className="card-body">
										<iframe
											src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109552.19658195564!2d75.78663251672796!3d30.900473637371658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sLudhiana%2C+Punjab!5e0!3m2!1sen!2sin!4v1530462134939"
											width="100%"
											height="340"
											frameborder="0"
											style={{ border: 0 }}
											allowfullscreen
											title="single-vidoe"
										></iframe>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</section>

				<hr />

				<section className="section-padding">
					<div>
						<Row>
							<Col
								lg={12}
								md={12}
								className="section-title text-left mb-4"
							>
								<h2>Contact Us</h2>
							</Col>

							<Form className="col-lg-12 col-md-12" noValidate>
								<Form.Row>
									<Form.Group as={Col} controlId="full-name">
										<Form.Label>
											Full Name
											<span className="text-danger">
												*
											</span>
										</Form.Label>
										<Form.Control
											type="text"
											placeholder="Full Name"
											required
										/>
									</Form.Group>
								</Form.Row>

								<Form.Row>
									<Form.Group
										as={Col}
										controlId="phone-number"
									>
										<Form.Label>
											Phone Number
											<span className="text-danger">
												*
											</span>
										</Form.Label>
										<Form.Control
											type="text"
											placeholder="Phone Number"
											required
										/>
									</Form.Group>
									<Form.Group as={Col} controlId="email">
										<Form.Label>
											Email Address
											<span className="text-danger">
												*
											</span>
										</Form.Label>
										<Form.Control
											type="email"
											placeholder="Email Address"
											required
										/>
									</Form.Group>
								</Form.Row>

								<Form.Row>
									<Form.Group as={Col} controlId="message">
										<Form.Label>
											Message
											<span className="text-danger">
												*
											</span>
										</Form.Label>
										<Form.Control
											as="textarea"
											rows={4}
											cols={100}
											placeholder="Message"
											required
										/>
									</Form.Group>
								</Form.Row>
								<Button variant="success">Send Message</Button>
							</Form>
						</Row>
					</div>
				</section>
			</Container>
			<ThinFooter />
		</ContentWrapper>
	);
};

export default Contact;
