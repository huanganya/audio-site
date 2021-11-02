import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function TopMobileSearch() {
	return (
		<>
			<div className="top-mobile-search">
				<Row>
					<Col md={12}>
						<Form className="mobile-search">
							<InputGroup>
								<FormControl
									type="text"
									placeholder="Search for..."
									className=""
								/>
								<InputGroup.Append>
									<Button variant="dark">
										<FontAwesomeIcon icon={faSearch} />
									</Button>
								</InputGroup.Append>
							</InputGroup>
						</Form>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default TopMobileSearch;
