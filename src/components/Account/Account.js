import "./Account.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";

import MyChannels from "./MyChannels";
import MyVideos from "./MyVideos";
import InfoCards from "./InfoCards";

const Account = () => {
	return (
		<>
			<ContentWrapper>
				<Container fluid className="pb-0">
					<Row>
						<InfoCards />
					</Row>

					<hr />

					<MyVideos />
					<hr className="mt-0" />
					<MyChannels />
				</Container>
				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

export default Account;
