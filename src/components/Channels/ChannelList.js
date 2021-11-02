import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import ChannelCard from "../Atomics/ChannelCard/ChannelCard";
import Paginate from "../Atomics/Paginate/Paginate";

const ChannelList = () => {
	return (
		<>
			<div className="video-block section-padding ">
				<Row>
					<Col md={12}>
						<SectionHeader heading="Channels" />
					</Col>

					<Col xl={3} sm={6} className="mb-3">
						<ChannelCard
							imgSrc="img/s1.png"
							views="1.4M"
							channelName="Channel Name"
							subscriberCount="382,323"
							outline
						/>
					</Col>
					<Col xl={3} sm={6} className="mb-3">
						<ChannelCard
							imgSrc="img/s1.png"
							views="1.4M"
							channelName="Channel Name"
							subscriberCount="382,323"
							outline
						/>
					</Col>
					<Col xl={3} sm={6} className="mb-3">
						<ChannelCard
							imgSrc="img/s1.png"
							views="1.4M"
							channelName="Channel Name"
							subscriberCount="382,323"
							verified
							isSubscribed
							outline
						/>
					</Col>
					<Col xl={3} sm={6} className="mb-3">
						<ChannelCard
							imgSrc="img/s1.png"
							views="1.4M"
							channelName="Channel Name"
							subscriberCount="382,323"
							outline
						/>
					</Col>
					<Col xl={3} sm={6} className="mb-3">
						<ChannelCard
							imgSrc="img/s1.png"
							views="1.4M"
							channelName="Channel Name"
							subscriberCount="382,323"
							outline
						/>
					</Col>
					<Col xl={3} sm={6} className="mb-3">
						<ChannelCard
							imgSrc="img/s1.png"
							views="1.4M"
							channelName="Channel Name"
							subscriberCount="382,323"
							outline
						/>
					</Col>
					<Col xl={3} sm={6} className="mb-3">
						<ChannelCard
							imgSrc="img/s1.png"
							views="1.4M"
							channelName="Channel Name"
							subscriberCount="382,323"
							outline
						/>
					</Col>
					<Col xl={3} sm={6} className="mb-3">
						<ChannelCard
							imgSrc="img/s1.png"
							views="1.4M"
							channelName="Channel Name"
							subscriberCount="382,323"
							outline
						/>
					</Col>
					<Col xl={3} sm={6} className="mb-3">
						<ChannelCard
							imgSrc="img/s1.png"
							views="1.4M"
							channelName="Channel Name"
							subscriberCount="382,323"
							outline
						/>
					</Col>
					<Col xl={3} sm={6} className="mb-3">
						<ChannelCard
							imgSrc="img/s1.png"
							views="1.4M"
							channelName="Channel Name"
							subscriberCount="382,323"
							verified
							isSubscribed
							outline
						/>
					</Col>
					<Col xl={3} sm={6} className="mb-3">
						<ChannelCard
							imgSrc="img/s1.png"
							views="1.4M"
							channelName="Channel Name"
							subscriberCount="382,323"
							outline
						/>
					</Col>
					<Col xl={3} sm={6} className="mb-3">
						<ChannelCard
							imgSrc="img/s1.png"
							views="1.4M"
							channelName="Channel Name"
							subscriberCount="382,323"
							outline
						/>
					</Col>
				</Row>
			</div>

			<Paginate />
		</>
	);
};

export default ChannelList;
