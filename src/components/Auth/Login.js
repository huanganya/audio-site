import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import GoogleLoginComponent  from "./GoogleButton";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import { useState, useEffect } from "react";

import * as globalVars from "../shared/global";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		if(localStorage.getItem("videoapp_token") != "") {
			gotoHome();
		}
	}, [])

	const onLoginClicked = () => {
		const api = globalVars.apiUrl + "auth/signin";
		const auth = {
			email: email,
			password: password
		}

		axios.post(api, auth).then(response => {
			if(response.data == "All inputs are required") {
				globalVars.showToastr(response.data, "warning");
			} else if(response.data == "Invalid credentials") {
				globalVars.showToastr(response.data, "error");
			} else {
				globalVars.showToastr("Login successfully", "info");
				localStorage.setItem("videoapp_token", response.data);
				gotoHome();
			}
		}, error => {
			globalVars.showToastr("Server Error Occurred", "error");
		});
	}

	const gotoHome = () => {
		history.push("/");
	}

	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
			/>
			<Col md={5} className=" p-5 bg-white full-height">
				<div className="login-main-left">
					<div className="text-center mb-5 login-main-left-header pt-4">
						<img
							src="/img/favicon.png"
							className="img-fluid"
							alt="LOGO"
							onClick={gotoHome}
						/>
						<h5 className="mt-3 mb-3">Welcome to our website</h5>
						<p>
							It is a long established fact that a reader <br />{" "}
							will be distracted by the readable.
						</p>
					</div>
					<Form>
						<Form.Group>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter email address"
								defaultValue={email}
								onChange={(event) => setEmail(event.target.value)}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								defaultValue={password}
								onChange={(event) => setPassword(event.target.value)}
							/>
						</Form.Group>

						<div className="mt-4">
							<Row>
								<Col>
									<Button
										variant="outline-primary"
										size="lg"
										block
										onClick={onLoginClicked}
									>
										Sign In
									</Button>
									<GoogleLoginComponent handler={gotoHome}/>
								</Col>
							</Row>
						</div>
					</Form>

					<div className="text-center mt-5">
						<p className="light-gray">
							Don’t have an account?{" "}
							<Link to="/auth/register">Sign Up</Link>
						</p>
					</div>
				</div>
			</Col>
		</>
	);
}

export default Login;
