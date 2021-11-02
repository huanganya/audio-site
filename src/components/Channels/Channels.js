import Container from "react-bootstrap/Container";

import ChannelList from "./ChannelList";
import FeaturedVideos from "./FeaturedVideos";
import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";

const Channels = () => {
	return (
		<>
			<ContentWrapper>
				<Container fluid className="pb-0">
					<ChannelList />
					<hr />
					<FeaturedVideos />
				</Container>
				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

export default Channels;
