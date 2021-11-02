import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import VideoCard from "../Atomics/VideoCard/VideoCard";

export default function MyVideos() {
	return (
		<>
			<div className="video-block section-padding ">
				<Row>
					<Col md={12}>
						<SectionHeader heading="My Videos" />
					</Col>

					<Col xl={3} sm={6} className="mb-3">
						<VideoCard
							imgSrc="img/v4.png"
							time="3:50"
							videoTitle="There are many variations of passages of Lorem"
							videoCategory="Education"
							views="1.8M"
							timeAgo="11 months"
							verified
						/>
					</Col>

					<Col xl={3} sm={6} className="mb-3">
						<VideoCard
							imgSrc="img/v4.png"
							time="3:50"
							videoTitle="There are many variations of passages of Lorem"
							videoCategory="Education"
							views="1.8M"
							timeAgo="11 months"
							verified
						/>
					</Col>

					<Col xl={3} sm={6} className="mb-3">
						<VideoCard
							imgSrc="img/v4.png"
							time="3:50"
							videoTitle="There are many variations of passages of Lorem"
							videoCategory="Education"
							views="1.8M"
							timeAgo="11 months"
						/>
					</Col>

					<Col xl={3} sm={6} className="mb-3">
						<VideoCard
							imgSrc="img/v4.png"
							time="3:50"
							videoTitle="There are many variations of passages of Lorem"
							videoCategory="Education"
							views="1.8M"
							timeAgo="11 months"
							verified
						/>
					</Col>
				</Row>
			</div>
		</>
	);
}
