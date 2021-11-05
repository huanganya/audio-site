import "./UploadVideo.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import { HeadingWrapper } from "../Atomics/SectionHeader/SectionHeader";

import VideoUploadForm from "./VideoUploadForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useRef, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDropzone } from 'react-dropzone';
import { useHistory } from "react-router-dom";
import axios from "axios";

import * as globalVars from "../shared/global";

const UploadVideo = () => {
	const history = useHistory();
	const location = useLocation();
	let fromFile;
	location != null ? fromFile = location.fromFile : fromFile = "";

	const [file, setFile] = useState(fromFile);
	const [uploadPercent, setUploadPercent] = useState(0);
	const [uploadUrl, setUploadUrl] = useState("");
	const [fileURL, setFileURL] = useState("");
	const [duration, setDuration] = useState(0);
	const refContainer = useRef();
	
	const uploadMedia = () => {
		const api = globalVars.apiUrl + "main/upload";
		const data = new FormData();
		data.append('file', file)
		data.append('unique', uploadUrl);

		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Authorization': `Bearer ${localStorage.getItem("videoapp_token")}`	
			},
			onUploadProgress: function(progressEvent) {
				var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
				setUploadPercent(percentCompleted);
			}
		}

		axios.post(api, data, config).then(res => {
			if(res.status == 200 && res.data == "Upload Success") {
				globalVars.showToastr("The file was upload successfully.", "info");
			}
		}, error => {
			if (error.res.status == 400) {
				globalVars.showToastr("Oops... The file has a problem. Please try again.", "error");
			}
			if (error.res.status == 401) {
				globalVars.showToastr("Oops... Please login now.", "error");
			}
			if(error.res.status == 403) {
				globalVars.showToastr("Invalid request", "error");
			}
		});

	}

	const onDrop = useCallback(acceptedFiles => {
		if(acceptedFiles.length > 0) {
			setFileURL(URL.createObjectURL(acceptedFiles[0]));
			setFile(acceptedFiles[0]);
			setUploadPercent(0);
		}
  	}, [])

	const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

	const durationChanged = () => {
		setDuration(globalVars.getDuration(refContainer.current.duration));
	}

	const getRandomString = () => {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for ( var i = 0; i < 10; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
		setUploadUrl(result);
    }

	useEffect(() => {
		if(fromFile) {
			setFileURL(URL.createObjectURL(fromFile));
		} else {
			history.push("/upload");
		}
		refContainer.current.load();
	}, [fromFile, file]);

	useEffect(() => {
		if(fileURL != "") {
			uploadMedia();
		}
	}, [fileURL]);

	useEffect(() => {
		getRandomString();
		console.log(localStorage.getItem("videoapp_token"));
		if(localStorage.getItem("videoapp_token") == "") {
			history.push("/auth/login");
		}
	}, []);

	return (
		<>
			<ContentWrapper>
				<Container fluid className="upload-details">
					<Row>
						<Col lg={12}>
							<HeadingWrapper heading="Upload Details" />
						</Col>
						<Col lg={5}>
							{/* <label htmlFor="uploadFile"> */}
								<video style={{backgroundColor: "#8781bd", borderRadius: "1%"}}
									controls
									src={ fileURL }
									ref={ refContainer }
									onDurationChange={durationChanged}
									width="420"
									height="240">
								</video>
							{/* </label> */}
							{/* <div {...getRootProps()}
								style={{display: "hidden"}}>
								<input {...getInputProps()}
									accept="video/mp4,video/x-m4v,video/*"
									name="uploadFile"
									id="uploadFile"
								/>
							</div> */}
						</Col>

						<Col lg={7}>
							<div className="osahan-title">
								{
									file != null ? file.name : "Choose a video file..."
								}
							</div>
							<div className="osahan-size">
								{
									file != null ? globalVars.getFileSize(file) + " / " + duration : "None / None"
								}
							</div>
							<div className="osahan-progress">
								<ProgressBar striped animated now={uploadPercent} />

								<div className="osahan-close">
									{/* <a href="#"
										onClick={uploadMedia}>
										<FontAwesomeIcon icon={faUpload} />
									</a> */}
								</div>
							</div>
							<div className="osahan-desc">
								http://localhost:3000/{uploadUrl}
							</div>
						</Col>
					</Row>
					<hr />
					{
						file != null ? <VideoUploadForm unique={uploadUrl} size={globalVars.getFileSize(file)} mins={duration}/> : <div></div>
					}
				</Container>
				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

export default UploadVideo;
