import Container from "react-bootstrap/Container";

import ListItems from "./ListItems";
import FeaturedVideos from "./FeaturedVideos";
import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";

const Playlist = () => {
	return (
		<>
			<ContentWrapper>
				<Container fluid className="pb-0">
					<ListItems />
				</Container>
				<div style={{marginTop: "35%"}}></div>
				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

export default Playlist;
