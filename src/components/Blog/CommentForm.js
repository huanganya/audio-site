import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CommentForm() {
	return (
		<>
			<div className="card blog">
				<div className="card-body">
					<h5 className="card-title mb-4">Leave a Comment</h5>
					<Form>
						<Row>
							<Col lg={6} md={6}>
								<Form.Group controlId="comment-author-name">
									<Form.Label>
										Your Name
										<span className="text-danger">*</span>
									</Form.Label>
									<Form.Control type="text" required />
								</Form.Group>
							</Col>
							<Col lg={6} md={6}>
								<Form.Group controlId="comment-author-email">
									<Form.Label>
										Your Email
										<span className="text-danger">*</span>
									</Form.Label>
									<Form.Control
										type="email"
										placeholder=""
										required
									/>
								</Form.Group>
							</Col>
						</Row>

						<Form.Group controlId="comment-author-email">
							<Form.Label>
								Review <span className="text-danger">*</span>
							</Form.Label>
							<Form.Control as="textarea" rows={10} cols={100} />
						</Form.Group>
						<Button variant="success">Post Comment</Button>
					</Form>
				</div>
			</div>
		</>
	);
}
