import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";

const Blank = () => {
	const alerts = [
		"primary",
		"secondary",
		"success",
		"danger",
		"warning",
		"info",
		"light",
		"dark",
	].map((variant, idx) => (
		<Alert key={idx} variant={variant}>
			This is a {variant} alert—check it out!
		</Alert>
	));

	return (
		<>
			<ContentWrapper>
				<Container fluid>
					<div className="video-block section-padding">
						<Row>
							<Col md={12}>
								<SectionHeader heading="Blank Page" />
							</Col>
							<Col md={12}>
								<Button variant="primary" className="mr-1">
									Primary
								</Button>
								<Button variant="secondary" className="mr-1">
									Secondary
								</Button>
								<Button variant="success" className="mr-1">
									Success
								</Button>
								<Button variant="danger">Danger</Button>
								<Button variant="warning" className="mr-1">
									Warning
								</Button>
								<Button variant="info" className="mr-1">
									Info
								</Button>
								<Button variant="light" className="mr-1">
									Light
								</Button>
								<Button variant="dark" className="mr-1">
									Dark
								</Button>
								<Button variant="link">Link</Button>
								<hr />
								<Button
									variant="outline-primary"
									className="mr-1"
								>
									Primary
								</Button>
								<Button
									variant="outline-secondary"
									className="mr-1"
								>
									Secondary
								</Button>
								<Button
									variant="outline-success"
									className="mr-1"
								>
									Success
								</Button>
								<Button
									variant="outline-danger"
									className="mr-1"
								>
									Danger
								</Button>
								<Button
									variant="outline-warning"
									className="mr-1"
								>
									Warning
								</Button>
								<Button variant="outline-info" className="mr-1">
									Info
								</Button>
								<Button
									variant="outline-light"
									className="mr-1"
								>
									Light
								</Button>
								<Button variant="outline-dark">Dark</Button>
								<hr />

								<Button
									variant="primary"
									size="lg"
									className="mr-1"
								>
									Large Button
								</Button>
								<Button variant="secondary" size="lg">
									Large Button
								</Button>
								<hr />

								<Button
									variant="primary"
									size="sm"
									className="mr-1"
								>
									Small Button
								</Button>
								<Button variant="secondary" size="sm">
									Small Button
								</Button>
								<hr />

								<Button variant="primary" size="lg" block>
									Block level button
								</Button>
								<Button variant="secondary" size="lg" block>
									Block level button
								</Button>

								<hr />
								{alerts}
							</Col>
						</Row>
					</div>
				</Container>
			</ContentWrapper>
		</>
	);
};

export default Blank;
