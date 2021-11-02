import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ForgetPassword() {
	return (
		<>
			<Col md={5} className=" p-5 bg-white full-height">
				<div className="login-main-left">
					<div className="text-center mb-5 login-main-left-header pt-4">
						<img
							src="/img/favicon.png"
							className="img-fluid"
							alt="LOGO"
						/>
						<h5 className="mt-3 mb-3">Welcome to our website</h5>
						<p>
							It is a long established fact that a reader <br />{" "}
							will be distracted by the readable.
						</p>
					</div>
					<Form>
						<Form.Group>
							<Form.Label>Enter Email / Mobile number</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Email / Mobile number"
							/>
						</Form.Group>

						<div className="mt-4">
							<Row>
								<Col>
									<Button
										variant="outline-primary"
										size="lg"
										block
									>
										Reset Password
									</Button>
								</Col>
							</Row>
						</div>
					</Form>

					<div className="text-center mt-5">
						<p className="light-gray">
							Don't have an account?{" "}
							<Link to="/auth/register">Sign up</Link>
						</p>
					</div>
				</div>
			</Col>
		</>
	);
}

export default ForgetPassword;
