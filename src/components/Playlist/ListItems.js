import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import PlaylistCard from "../Atomics/PlaylistCard/PlaylistCard";
import * as globalVars from "../shared/global";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import VideoCardList from "../VideoPage/VideoCardList";
import MaterialTable from 'material-table';

const ListItems = () => {
	const [embed, setEmbed] = useState(false);
	const [order, setOrder] = useState(false);

	const [tableData, setTableData] = useState();
	const [selectedRow, setSelectedRow] = useState(null);
	const [ownData, setOwnData] = useState();
	const [selectedOwnRow, setSelectedOwnRow] = useState(null);
	
	const columns = [
		{
			title: "Thumbnail",
        	field: "thumbnail",
			render: (rowData) => <VideoCardList
				imgSrc={`http://localhost:6060/${rowData.thumbnail}`}
				time={rowData.mins}
				videoTitle={rowData.title}
				views={rowData.description}
				videoCategory={rowData.size}
				verified
			/>
			// render: (rowData) => <img src={`http://localhost:6060/${rowData.thumbnail}`} style={{ width: 120, borderRadius: "2%" }}/>
		},
		// { title: 'title', field: 'title', hidden: false},
		// { title: 'title', field: 'category', hidden: false},
		// { title: 'title', field: 'keywords', hidden: false},
	];

	const [selectedType, setSelectedType] = useState(0);
	const [selectedId, setSelectedId] = useState(-1);
	const [loadState, setLoadState] = useState(0);
	const [plusModal, showPlusModal] = useState(false);
	const [minusModal, showMinusModal] = useState(false);
	const [cogModal, showCogModal] = useState(false);
	const [addModal, showAddModal] = useState(false);
	const [playlist, setPlaylist] = useState([]);
	const refTitle = useRef();
	const refUrl = useRef();
	const refVisibility = useRef();
	const lstVisible = ['Public', 'Private', 'Unlisted'];

	const handleAdd = () => {
		showPlusModal(true);
	}

	const handlePlus = (id) => {
		setSelectedId(id);
		showAddModal(true);
	}

	const handleMinus = (id) => {
		setSelectedId(id);
		showMinusModal(true);
	}

	const handleCog = (id) => {
		setSelectedId(id);
		showCogModal(true);
	}

	const handleType = (type) => {
		setSelectedType(Number(type));
	}

	useEffect(() => {
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Authorization': `Bearer ${localStorage.getItem("videoapp_token")}`	
			}
		}

		let api = globalVars.apiUrl + "main/loadplaylist";
		axios.post(api, {}, config).then(res => {
			setPlaylist(res.data);
		}, error => {
			globalVars.showToastr("Server Error Occurred", "error");
		});

		api = globalVars.apiUrl + "main/getmovies";
		axios.post(api, {}, config).then(res => {
			setTableData(res.data);
		}, error => {
			globalVars.showToastr("Server Error Occurred", "error");
		});

		api = globalVars.apiUrl + "main/getmymovies";
		axios.post(api, {}, config).then(res => {
			setOwnData(res.data);
		}, error => {
			globalVars.showToastr("Server Error Occurred", "error");
		});

	}, [loadState]);

	const handleAAccept = (e) => {
		
		const api = globalVars.apiUrl + "main/addtoplaylist";
		if(selectedType == 1) {
			globalVars.showToastr("Developing...", "info");
			return;
		}

		if(selectedRow == null && selectedOwnRow == null) {
			return;
		}

		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Authorization': `Bearer ${localStorage.getItem("videoapp_token")}`	
			}
		}

		const data = new FormData();
		if(selectedType == 0) {
			data.append('channel_id', tableData[selectedRow].id);
		} else {
			data.append('channel_id', ownData[selectedOwnRow].id);
		}
		data.append('playlist_id', selectedId);
		data.append('type', selectedType);
		
		axios.post(api, data, config).then(res => {
			if(res.data == "Success") {
				globalVars.showToastr("The item added to this playlist", "info");
			} else {
				globalVars.showToastr("The item already exist in this playlist", "warning");
			}
		}, error => {
			globalVars.showToastr("Server Error Occurred", "error");
		});
	}

	const handleAReject = (e) => {
		showAddModal(false);
	}

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

	const handleCReject = (e) => {
		showCogModal(false);
	}

	const handleCAccept = (e) => {
		console.log(embed, order)
		showCogModal(false);
	}

	return (
		<>
			<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
			<div className="video-block section-padding ">
				<Modal show={addModal} onHide={handleAReject} centered size="lg">
					<Modal.Header closeButton>
						<Modal.Title>Add videos to playlist</Modal.Title>
					</Modal.Header>
					<Modal.Body>
					<div className="box  single-video-comment-tabs">
						<Tabs defaultActiveKey="0" onSelect={(index, label) => handleType(index)}>
							<Tab eventKey="0" title="Video Search">
								<MaterialTable
									columns={columns}
									data={tableData}
									title='Choose videos'
									onRowClick={(evt, selectedRow) =>
										setSelectedRow(selectedRow.tableData.id)
									}
									options={{
										header: false,
										search: true,
										rowStyle: rowData => ({
										width: selectedRow === rowData.tableData.id ? '20px' : '20px',
										backgroundColor: selectedRow === rowData.tableData.id ? '#efefef' : '#FFF'
										})
									}}
								/>
							</Tab>
							<Tab eventKey="1" title="URL">
								<Form>
									<Form.Row>
										<Form.Group as={Col} controlId="first-name">
											<Form.Label>
												Paste YouTube URL here:
												<span className="text-danger">*</span>
											</Form.Label>
											<Form.Control
												type="text"
												required
												ref={refUrl}
											/>
										</Form.Group>
									</Form.Row>
								</Form>
							</Tab>
							<Tab eventKey="2" title="Your videos">
								<MaterialTable
									columns={columns}
									data={ownData}
									title='Choose videos'
									onRowClick={(evt, selectedOwnRow) =>
										setSelectedOwnRow(selectedOwnRow.tableData.id)
									}
									options={{
										header: false,
										search: true,
										rowStyle: rowData => ({
										width: selectedOwnRow === rowData.tableData.id ? '20px' : '20px',
										backgroundColor: selectedOwnRow === rowData.tableData.id ? '#efefef' : '#FFF'
										})
									}}
								/>
							</Tab>
						</Tabs>
					</div>

					</Modal.Body>
					<Modal.Footer>
						<Button variant="success" onClick={handleAAccept}>
							ADD TO LIST
						</Button>
						<Button variant="secondary" onClick={handleAReject}>
							CLOSE
						</Button>
					</Modal.Footer>
				</Modal>

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
						<Button variant="success" onClick={handlePAccept}>
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
						<Button variant="success" onClick={handleMAccept}>
							DELETE
						</Button>
					</Modal.Footer>
				</Modal>

				<Modal show={cogModal} onHide={handleCReject} centered size="md">
					<Modal.Header closeButton>
						<Modal.Title>Settings</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Group className="mb-3" controlId="formBasic1Checkbox">
							{/* <Form.Switch label="Allow embedding" value={embed} onChange={setEmbed(!embed)}/> */}
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasic2Checkbox">
							{/* <Form.Switch label="Add new videos to top of playlist" value={order} onChange={setOrder(!order)}/> */}
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleCReject}>
							CANCEL
						</Button>
						<Button variant="success" onClick={handleCAccept}>
							SAVE
						</Button>
					</Modal.Footer>
				</Modal>
				
				<Row>
					<Col md={6}>
						<h6>Playlist</h6>
					</Col>

					<Col md={6}>
					<button style={{float: "right"}} class="btn btn-primary" onClick={handleAdd}>
							Create Playlist
						</button>
					</Col>
					{
						playlist.map((item, i)=>
							<Col key={i} xl={3} sm={6} className="mb-3">
								<PlaylistCard
									id={item.id}
									imgSrc="img/playlist.png"
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
