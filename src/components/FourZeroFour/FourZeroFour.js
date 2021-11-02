import { Link } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";

const fourZeroFour = () => {
	return (
		<ContentWrapper>
			<Container fluid>
				<Row>
					<Col md={8} className="mx-auto text-center pt-4 pb-5">
						<h1>
							<img
								alt="404"
								src="/img/404.png"
								className="img-fluid"
							/>
						</h1>
						<h1>Sorry! Page not found.</h1>
						<p className="land">
							Unfortunately the page you are looking for has been
							moved or deleted.
						</p>
						<div className="mt-5">
							<Link to="/">
								<Button as="a" variant="outline-primary">
									GO TO HOME PAGE
								</Button>
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</ContentWrapper>
	);
};

export default fourZeroFour;
