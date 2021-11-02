import "./VideoPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";

import VideoCardList from "./VideoCardList";
import SingleVideoRight from "./SingleVideoRight";
import SingleVideoLeft from "./SingleVideoLeft";

const VideoPage = () => {
	return (
		<>
			<ContentWrapper>
				<Container fluid>
					<div className="video-block-right-list section-padding">
						<Row className="mb-4">
							<Col md={8}>
								<div className="single-video">
									<iframe
										title="Youtube Video"
										width="100%"
										height="315"
										src="https://www.youtube-nocookie.com/embed/8LWZSGNjuF0?rel=0&amp;controls=0&amp;showinfo=0"
										frameborder="0"
										allow=" encrypted-media"
										allowfullscreen
									></iframe>
								</div>
							</Col>

							<Col md={4}>
								<div className="video-slider-right-list">
									<VideoCardList
										imgSrc="img/v1.png"
										time="3:50"
										videoTitle="Here are many variati of passages of Lorem"
										views="1.8M"
										timeAgo="11 Months"
										videoCategory="Education"
										verified
									/>
									<VideoCardList
										imgSrc="img/v1.png"
										time="3:50"
										videoTitle="Duis aute irure dolor in reprehenderit in."
										views="1.8M"
										timeAgo="11 Months"
										videoCategory="Education"
										active
										verified
									/>
									<VideoCardList
										imgSrc="img/v1.png"
										time="3:50"
										videoTitle="Culpa qui officia deserunt mollit anim"
										views="1.8M"
										timeAgo="11 Months"
										videoCategory="Education"
									/>
									<VideoCardList
										imgSrc="img/v1.png"
										time="3:50"
										videoTitle="Deserunt mollit anim id est laborum."
										views="1.8M"
										timeAgo="11 Months"
										videoCategory="Education"
										verified
									/>
									<VideoCardList
										imgSrc="img/v1.png"
										time="3:50"
										videoTitle="Exercitation ullamco laboris nisi ut."
										views="1.8M"
										timeAgo="11 Months"
										videoCategory="Education"
										verified
									/>
									<VideoCardList
										imgSrc="img/v1.png"
										time="3:50"
										videoTitle="There are many variations of passages of Lorem"
										views="1.8M"
										timeAgo="11 Months"
										videoCategory="Education"
										verified
									/>
								</div>
							</Col>
						</Row>
					</div>

					<div className="video-block section-padding">
						<Row>
							<Col md={8}>
								<SingleVideoLeft />
							</Col>

							<Col md={4}>
								<SingleVideoRight />
							</Col>
						</Row>
					</div>
				</Container>
				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

export default VideoPage;
