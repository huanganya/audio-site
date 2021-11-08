import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Multiselect from 'multiselect-react-dropdown';
import axios from "axios";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faVideo } from "@fortawesome/free-solid-svg-icons";

import * as globalVars from "../shared/global";

export default function VideoUploadForm(props) {

	console.log(props.unique, props.size, props.mins);
	const options = [
		{name: 'Option A', id: 1},
		{name: 'Option B', id: 2},
		{name: 'Option C', id: 3},
		{name: 'Option D', id: 4},
		{name: 'Option E', id: 5},
		{name: 'Option F', id: 6},
		{name: 'Option G', id: 7},
	];

	const refTitle = useRef(), refDescription = useRef();
	const refPlaylist = useRef(), refKeywords = useRef();
	const refThumbnail = useRef(), refCanvas = useRef();
	const refSubtitle = useRef();

	const [thumbnail, setThumbnail] = useState("https://via.placeholder.com/240x160");
	const [canvas, setCanvas] = useState("https://via.placeholder.com/240x160");
	const [selectedCategories, setSelectedCategories] = useState();

	const onSelect = (selectedList, selectedItem) => {
		setSelectedCategories(selectedList);
	}

	const onRemove = (selectedList, removedItem) => {
		setSelectedCategories(selectedList);
	}

	const showThumbnail = () => {
		if(refThumbnail.current.files.length < 1) {
			setThumbnail("https://via.placeholder.com/240x160");
		} else {
			setThumbnail(URL.createObjectURL(refThumbnail.current.files[0]));
		}
	}

	const showCanvas = () => {
		if(refCanvas.current.files.length < 1) {
			setCanvas("https://via.placeholder.com/240x160");
		} else {
			setCanvas(URL.createObjectURL(refCanvas.current.files[0]));
		}
	}

	const saveInformations = () => {
		const title = refTitle.current.value;
		const description = refDescription.current.value;
		const subtitle = refSubtitle.current.value;
		const playlist = refPlaylist.current.value;
		const keywords = refKeywords.current.value;

		if(title == "" || description == "" || subtitle == "" || keywords == "" || selectedCategories.length < 1) {
			globalVars.showToastr("All inputs are required", "warning");
			return;
		}

		const data = new FormData();
		data.append('title', title);
		data.append('description', description);
		data.append('subtitle', subtitle);
		data.append('unique', props.unique);
		data.append('keywords', keywords);
		data.append('playlist', playlist);
		data.append('category', JSON.stringify(selectedCategories));
		data.append('size', props.size);
		data.append('mins', props.mins);

		data.append('thumbnail', refThumbnail.current.files[0]);
		data.append('canvas', refCanvas.current.files[0]);
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Authorization': `Bearer ${localStorage.getItem("videoapp_token")}`	
			}
		}

		const api = globalVars.apiUrl + "main/setinfomations";
		axios.post(api, data, config).then(response => {
			if(response.data == "Success") {
				globalVars.showToastr("More details save successfully.", "info");
			} else {
				globalVars.showToastr("These details already exist.", "warning");
			}
		}, error => {
			globalVars.showToastr("Server Error Occurred", "error");
		});
	}

	return (
		<>
			<Row>
				<Col lg={12}>
					<div className="osahan-form">
						<Row>
							<Col lg={12}>
								<Form.Group controlId="video-title">
									<Form.Label>Title</Form.Label>
									<Form.Control
										type="text"
										placeholder="Contrary to popular belief, Lorem Ipsum (2020) is not."
										ref={refTitle}
									/>
								</Form.Group>
							</Col>
							<Col lg={12}>
								<Form.Group controlId="video-description">
									<Form.Label>Description</Form.Label>
									<Form.Control
										as="textarea"
										rows={3}
										placeholder="Your descrption here..."
										ref={refDescription}
									/>
								</Form.Group>
							</Col>
							<Col lg={12}>
								<Form.Group controlId="video-category">
									<Form.Label>Category</Form.Label>
									<Multiselect
										style={{searchBox: { backgroundColor: "#eceff0"}}}
										options={ options } // Options to display in the dropdown
										displayValue="name" // Property name to display in the dropdown options
										selectedValues={selectedCategories} // Preselected value to persist in dropdown
										onSelect={onSelect} // Function will trigger on select event
										onRemove={onRemove} // Function will trigger on remove event
									/>
								</Form.Group>
							</Col>

							<Col lg={6}>
								<Form.Group controlId="video-thumbnail">
									<Form.Label>
										<Form>
											Thumbnail <FontAwesomeIcon icon={faImage} />
										</Form>
										<Form>
											<img src={thumbnail} style={{borderRadius: "1%", width: "240px", height: "160px", objectFit: "cover"}}/>
										</Form>
									</Form.Label>
									<Form.File ref={refThumbnail}
										onChange={showThumbnail}
										style={{display: "none"}}
										accept="image/png, image/jpeg">
									</Form.File>
								</Form.Group>
							</Col>

							<Col lg={6}>
								<Form.Group controlId="video-playercanvas">
									<Form.Label>
										<Form>
											PlayerCanvas <FontAwesomeIcon icon={faVideo} />
										</Form>
										<Form>
											<img src={canvas} style={{borderRadius: "1%", width: "240px", height: "160px", objectFit: "cover"}}/>
										</Form>
									</Form.Label>
									<Form.File ref={refCanvas}
										onChange={showCanvas}
										style={{display: "none"}}
										accept="image/png, image/jpeg">
									</Form.File>
								</Form.Group>
							</Col>

							<Col lg={6}>
								<Form.Group controlId="video-subtitle">
									<Form.Label>Caption/Subtitle</Form.Label>
									<Form.Control
										type="text"
										placeholder="The video caption/subtitle here.."
										ref={refSubtitle}
									/>
								</Form.Group>
							</Col>

							<Col lg={6}>
								<Form.Group controlId="video-playlist">
									<Form.Label>Playlist</Form.Label>
									<Form.Control
										as="select"
										className="custom-select"
										ref={refPlaylist}
										custom
									>
										<option value="0">Playlist 1</option>
										<option value="1">Playlist 2</option>
										<option value="2">Playlist 3</option>
										<option value="3">Playlist 4</option>
										<option value="4">Playlist 5</option>
									</Form.Control>
								</Form.Group>
							</Col>

							<Col lg={12}>
								<Form.Group controlId="video-kewords">
									<Form.Label>Keywords</Form.Label>
									<Form.Control
										type="text"
										placeholder="Input keywords separate by space..."
										ref={refKeywords}
									/>
								</Form.Group>
							</Col>
						</Row>
					</div>
					<div className="osahan-area text-center mt-3">
						<Button variant="outline-primary" onClick={saveInformations}>Save Infomations</Button>
					</div>
				</Col>
			</Row>
		</>
	);
}
