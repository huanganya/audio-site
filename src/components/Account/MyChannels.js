import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import ChannelCard from "../Atomics/ChannelCard/ChannelCard";

export default function MyChannels() {
	return (
		<>
			<div className="video-block section-padding ">
				<Row>
					<Col md={12}>
						<SectionHeader heading="My Channels" />
					</Col>

					<Col xl={3} sm={6} className="mb-3">
						<ChannelCard
							imgSrc="img/s1.png"
							views="1.4M"
							channelName="Channel Name"
							subscriberCount="382,323"
						/>
					</Col>
					<Col xl={3} sm={6} className="mb-3">
						<ChannelCard
							imgSrc="img/s1.png"
							views="1.4M"
							channelName="Channel Name"
							subscriberCount="382,323"
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
						/>
					</Col>
					<Col xl={3} sm={6} className="mb-3">
						<ChannelCard
							imgSrc="img/s1.png"
							views="1.4M"
							channelName="Channel Name"
							subscriberCount="382,323"
						/>
					</Col>
					<Col xl={3} sm={6} className="mb-3">
						<ChannelCard
							imgSrc="img/s1.png"
							views="1.4M"
							channelName="Channel Name"
							subscriberCount="382,323"
						/>
					</Col>
					<Col xl={3} sm={6} className="mb-3">
						<ChannelCard
							imgSrc="img/s1.png"
							views="1.4M"
							channelName="Channel Name"
							subscriberCount="382,323"
						/>
					</Col>
					<Col xl={3} sm={6} className="mb-3">
						<ChannelCard
							imgSrc="img/s1.png"
							views="1.4M"
							channelName="Channel Name"
							subscriberCount="382,323"
						/>
					</Col>
					<Col xl={3} sm={6} className="mb-3">
						<ChannelCard
							imgSrc="img/s1.png"
							views="1.4M"
							channelName="Channel Name"
							subscriberCount="382,323"
						/>
					</Col>
				</Row>
			</div>
		</>
	);
}
