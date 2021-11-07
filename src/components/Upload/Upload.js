import { Link } from "react-router-dom";

import "./Upload.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload, faFileVideo } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from 'react-dropzone';
import { useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import * as globalVars from "../shared/global";

import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";

const Upload = () => {
	const history = useHistory();
	const [file, setFile] = useState();
	const [isDroped, setDroped] = useState(false);
	const [message1, setMessage1] = useState("Select a video file to upload");
	const [message2, setMessage2] = useState("or drag and drop a video file");
	const onDrop = useCallback(acceptedFiles => {
		setMessage1("The video file selected: ");
		setMessage2(`File name: ${acceptedFiles[0].name}\nSize: ${Math.round(acceptedFiles[0].size / 1024 / 1024 * 100) / 100} MB`);
		setFile(acceptedFiles[0]);
		setDroped(true);
  	}, [])
  	const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

	const isSelectedFile = (e) => {
		if(!isDroped) {
			globalVars.showToastr("Please select a video file to upload.", "warning");
			e.preventDefault();
		}
	}

	useEffect(() => {
		if(localStorage.getItem("videoapp_token") == "") {
			history.push("/auth/login");
		}
	}, [])

	return (
		<>
			<ContentWrapper>
				<Container fluid className=" pt-5 pb-5">
					<Row>
						<Col
							md={8}
							className="mx-auto text-center upload-video pt-5 pb-5"
						>
							<h1 className="text-primary">
								<div {...getRootProps()}>
									<input {...getInputProps()}
										accept="video/*, audio/*"
									/>
									{
										isDroped ?
										<FontAwesomeIcon icon={faFileVideo} color="#0781eb"/> :
										<FontAwesomeIcon icon={faFileUpload} />
									}
								</div>
							</h1>
							<h4 className="mt-5">
								{message1}
							</h4>
							{
								message2.split('\n').map((item, i) => <p key={i}>{item}</p>)
							}
							<div className="mt-4">
								<Link
									to={{
										pathname: "upload-video",
										fromFile: file,
									}}
									onClick={isSelectedFile}
									className="btn btn-outline-primary"
								>
									Upload Video
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

export default Upload;
