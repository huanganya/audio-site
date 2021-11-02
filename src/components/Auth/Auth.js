import { Switch, Route, Redirect } from "react-router-dom";

import "./Auth.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import FourZeroFour from "../FourZeroFour/FourZeroFour";
import Login from "./Login";
import Signup from "./Signup";
import ForgetPassword from "./ForgetPassword";
import Carousel from "./Carousel";

const Auth = () => {
	return (
		<>
			<Switch>
				<Route path="/auth/:link">
					<section className="login-main-wrapper">
						<Container fluid className="pl-0 pr-0">
							<Row noGutters>
								<Switch>
									<Route
										path="/auth/login"
										component={Login}
									/>
									<Route
										path="/auth/register"
										component={Signup}
									/>
									<Route
										path="/auth/forget-password"
										component={ForgetPassword}
									/>
									<Redirect to="/auth/login" />
								</Switch>
								<Carousel />
							</Row>
						</Container>
					</section>
				</Route>
				<Route path="*" component={FourZeroFour} />
			</Switch>
		</>
	);
};

export default Auth;
