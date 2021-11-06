import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import VideoCard from "../Atomics/VideoCard/VideoCard";
import Paginate from "../Atomics/Paginate/Paginate";

import axios from "axios";
import { useState, useEffect } from "react";
import * as globalVars from "../shared/global";

const ChannelVideos = () => {

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const api = globalVars.apiUrl + "main/getmovies";
		axios.post(api).then(response => {
			if(response.status == 200) {
				setMovies(response.data);
			}
		}, error => {
			globalVars.showToastr("Server Error Occurred", "error");
		});
	}, []);

	return (
		<>
			<div className="video-block section-padding ">
				<Row>
					<Col md={12}>
						<SectionHeader heading="Videos" />
					</Col>
					{
						movies.map((item, i) => 
							<Col xl={3} sm={6} className="mb-3">
								<VideoCard
									key={i}
									imgSrc={`http://localhost:6060/${item.thumbnail}`}
									time="3:50"
									videoTitle={item.title}
									videoCategory="Education"
									views="1.8M"
									timeAgo="11 months"
									verified
								/>
							</Col>
						)
					}
				</Row>
			</div>
			<Paginate />
		</>
	);
};

export default ChannelVideos;
