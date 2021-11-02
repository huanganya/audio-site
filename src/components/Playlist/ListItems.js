import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useRef, useState, useEffect } from "react";

import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import PlaylistCard from "../Atomics/PlaylistCard/PlaylistCard";
import Paginate from "../Atomics/Paginate/Paginate";
import * as globalVars from "../shared/global";

const ListItems = () => {

	const [selectedId, setSelectedId] = useState(-1);
	const [loadState, setLoadState] = useState(0);
	const [plusModal, showPlusModal] = useState(false);
	const [minusModal, showMinusModal] = useState(false);
	const [cogModal, showCogModal] = useState(false);
	const [playlist, setPlaylist] = useState([]);
	const refTitle = useRef();
	const refVisibility = useRef();
	const lstVisible = ['Public', 'Private', 'Unlisted'];

	const handlePlus = (id) => {
		setSelectedId(id);
		showPlusModal(true);
	}

	const handleMinus = (id) => {
		setSelectedId(id);
		showMinusModal(true);
	}

	const handleCog = (id) => {
		setSelectedId(id);
		showCogModal(true);
	}

	useEffect(() => {
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Authorization': `Bearer ${localStorage.getItem("videoapp_token")}`	
			}
		}

		const api = globalVars.apiUrl + "main/loadplaylist";
		axios.post(api, {}, config).then(res => {
			setPlaylist(res.data);
		}, error => {
			globalVars.showToastr("Server Error Occurred", "error");
		});
	}, [loadState]);

	const handlePReject = (e) => {
		showPlusModal(false);
	}

	const handlePAccept = (e) => {
		const title = refTitle.current.value;
		const visibility = refVisibility.current.value;
		if(title == "") {
			globalVars.showToastr("Please input title.","warning");
			return;
		}

		const data = new FormData();
		data.append('title', title);
		data.append('visibility', visibility);

		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Authorization': `Bearer ${localStorage.getItem("videoapp_token")}`	
			}
		}

		const api = globalVars.apiUrl + "main/saveplaylist";
		axios.post(api, data, config).then(response => {
			refTitle.current.value = "";
			refVisibility.current.value = "";
			showPlusModal(false);
			setLoadState(loadState + 1);
			globalVars.showToastr("New playlist saved successfully", "info");
		}, error => {
			globalVars.showToastr("Server Error Occurred", "error");
		});
	}
	
	const handleMReject = (e) => {
		showMinusModal(false);
	}

	const handleMAccept = (e) => {
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Authorization': `Bearer ${localStorage.getItem("videoapp_token")}`	
			}
		}

		const api = globalVars.apiUrl + "main/deleteplaylist";
		const data = new FormData();
		data.append("id", selectedId);
		axios.post(api, data, config).then(res => {
			showMinusModal(false);
			setLoadState(loadState + 1);
			globalVars.showToastr("New playlist saved successfully", "info");
		}, error => {
			globalVars.showToastr("Server Error Occurred", "error");
		});
	}

	return (
		<>
			<div className="video-block section-padding ">
				<Modal show={plusModal} onHide={handlePReject} centered size="lg">
					<Modal.Header closeButton>
						<Modal.Title>Add Playlist</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Group as={Col} controlId="country">
							<Form.Label>
								Title
							</Form.Label>
							<Form.Control type="text"
								placeholder="Title here..."
								ref={refTitle}
								required>
							</Form.Control>
						</Form.Group>
						<Form.Group as={Col} controlId="visibility">
							<Form.Label>
								Visibility
							</Form.Label>
							<Form.Control as="select" custom ref={refVisibility}>
								<option value="0">Public</option>
								<option value="1">Private</option>
								<option value="2">Unlisted</option>
							</Form.Control>
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handlePReject}>
							CANCEL
						</Button>
						<Button variant="primary" onClick={handlePAccept}>
							SAVE
						</Button>
					</Modal.Footer>
				</Modal>

				<Modal show={minusModal} onHide={handleMReject} centered size="md">
					<Modal.Header closeButton>
						<Modal.Title>Delete Playlist</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Group as={Col} controlId="country">
							<Form.Label>
								Are you delete this playlist?
							</Form.Label>
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleMReject}>
							CANCEL
						</Button>
						<Button variant="primary" onClick={handleMAccept}>
							DELETE
						</Button>
					</Modal.Footer>
				</Modal>
				<Row>
					<Col md={12}>
						<SectionHeader heading="Playlist" />
					</Col>
					{
						playlist.map(item=>
							<Col xl={3} sm={6} className="mb-3">
								<PlaylistCard
									id={item.id}
									imgSrc="img/s1.png"
									views="1.4M"
									channelName={item.title}
									folderType={lstVisible[item.visibility]}
									outline
									handlePlus={handlePlus}
									handleMinus={handleMinus}
									handleCog={handleCog}
								/>
							</Col>
						)
					}
				</Row>
			</div>
		</>
	);
};

export default ListItems;
