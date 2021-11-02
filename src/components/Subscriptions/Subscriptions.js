import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ThinFooter from "../Footer/ThinFooter";

import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import SubscriptionChannelCard from "../Atomics/SubscriptionChannelCard/SubscriptionChannelCard";
import Paginate from "../Atomics/Paginate/Paginate";

const Subscriptions = () => {
	return (
		<ContentWrapper>
			<Container fluid>
				<div className="video-block section-padding">
					<Row>
						<Col md={12}>
							<SectionHeader heading="Subscriptions" />
						</Col>

						<Col xl={3} sm={6} className="mb-3">
							<SubscriptionChannelCard
								imgSrc="img/s1.png"
								views="1.4M"
								channelName="Channel Name"
								subscriberCount="382,323"
								success
								verified
							/>
						</Col>

						<Col xl={3} sm={6} className="mb-3">
							<SubscriptionChannelCard
								imgSrc="img/s1.png"
								views="1.4M"
								channelName="Channel Name"
								subscriberCount="382,323"
							/>
						</Col>

						<Col xl={3} sm={6} className="mb-3">
							<SubscriptionChannelCard
								imgSrc="img/s1.png"
								views="1.4M"
								channelName="Channel Name"
								subscriberCount="382,323"
								isSubscribed
								verified
							/>
						</Col>

						<Col xl={3} sm={6} className="mb-3">
							<SubscriptionChannelCard
								imgSrc="img/s1.png"
								views="1.4M"
								channelName="Channel Name"
								subscriberCount="382,323"
							/>
						</Col>

						<Col xl={3} sm={6} className="mb-3">
							<SubscriptionChannelCard
								imgSrc="img/s1.png"
								views="1.4M"
								channelName="Channel Name"
								subscriberCount="382,323"
							/>
						</Col>

						<Col xl={3} sm={6} className="mb-3">
							<SubscriptionChannelCard
								imgSrc="img/s1.png"
								views="1.4M"
								channelName="Channel Name"
								subscriberCount="382,323"
							/>
						</Col>

						<Col xl={3} sm={6} className="mb-3">
							<SubscriptionChannelCard
								imgSrc="img/s1.png"
								views="1.4M"
								channelName="Channel Name"
								subscriberCount="382,323"
							/>
						</Col>

						<Col xl={3} sm={6} className="mb-3">
							<SubscriptionChannelCard
								imgSrc="img/s1.png"
								views="1.4M"
								channelName="Channel Name"
								subscriberCount="382,323"
								isSubscribed
								verified
							/>
						</Col>

						<Col xl={3} sm={6} className="mb-3">
							<SubscriptionChannelCard
								imgSrc="img/s1.png"
								views="1.4M"
								channelName="Channel Name"
								subscriberCount="382,323"
								isSubscribed
								verified
							/>
						</Col>

						<Col xl={3} sm={6} className="mb-3">
							<SubscriptionChannelCard
								imgSrc="img/s1.png"
								views="1.4M"
								channelName="Channel Name"
								subscriberCount="382,323"
							/>
						</Col>

						<Col xl={3} sm={6} className="mb-3">
							<SubscriptionChannelCard
								imgSrc="img/s1.png"
								views="1.4M"
								channelName="Channel Name"
								subscriberCount="382,323"
							/>
						</Col>

						<Col xl={3} sm={6} className="mb-3">
							<SubscriptionChannelCard
								imgSrc="img/s1.png"
								views="1.4M"
								channelName="Channel Name"
								subscriberCount="382,323"
							/>
						</Col>
					</Row>
					<Paginate />
				</div>
			</Container>
			<ThinFooter />
		</ContentWrapper>
	);
};

export default Subscriptions;
