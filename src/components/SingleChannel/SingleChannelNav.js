import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import { VerifiedTooltip } from "../Atomics/CustomCheckTooltips/CustomCheckTooltips";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SingleChannelNav() {
	return (
		<>
			<div className="single-channel-nav">
				<Navbar expand="lg">
					<Navbar.Brand className="channel-brand">
						Osahan Channel <VerifiedTooltip />
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="navbarSupportedContent" />

					<Navbar.Collapse id="navbarSupportedContent">
						<Nav as="ul" className="mr-auto">
							<li className="nav-item active">
								<Link className="nav-link " to="index">
									Videos
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="index">Playlists</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="index">Channels</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="index">Discussion</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="index">About</Link>
							</li>

							<NavDropdown title="Donate" id="basic-nav-dropdown">
								<NavDropdown.Item href="#">
									Action
								</NavDropdown.Item>
								<NavDropdown.Item href="#">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#">
									Something
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Form inline className=" my-2 my-lg-0">
							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-1"
								size="sm"
							/>
							<Button
								variant="outline-success"
								size="sm"
								className="my-2 my-sm-0"
							>
								<FontAwesomeIcon icon={faSearch} />
							</Button>
							&nbsp;&nbsp;&nbsp;
							<Button variant="outline-danger" size="sm">
								Subscribe <strong>1.4M</strong>
							</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</>
	);
}
