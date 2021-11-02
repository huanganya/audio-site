import "./History.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import Paginate from "../Atomics/Paginate/Paginate";
import ThinFooter from "../Footer/ThinFooter";

import WatchedVideos from "./WatchedVideos";

const History = () => {
	return (
		<ContentWrapper>
			<Container fluid>
				<div className="video-block section-padding">
					<Row>
						<Col md={12}>
							<SectionHeader heading="Watch History" />
						</Col>

						<WatchedVideos />
					</Row>
				</div>

				<Paginate />
			</Container>
			<ThinFooter />
		</ContentWrapper>
	);
};

export default History;
