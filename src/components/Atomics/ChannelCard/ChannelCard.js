import "./ChannelCard.css";

import Button from "react-bootstrap/Button";

import { VerifiedTooltipLinkDark } from "../CustomCheckTooltips/CustomCheckTooltips";

function ChannelCard({
	imgSrc,
	imgAlt = "",
	imgHref = "#",
	views,
	channelName,
	subscriberCount,
	channelHref = "#",
	verified,
	isSubscribed,
	outline = false,
}) {
	let buttonVariant;

	if (outline) {
		buttonVariant = isSubscribed ? "outline-secondary" : "outline-danger";
	} else {
		buttonVariant = isSubscribed ? "secondary" : "danger";
	}
	const buttonText = isSubscribed ? "Subscribed" : "Subscribe";

	return (
		<>
			<div className="channels-card">
				<div className="channels-card-image">
					<a href={imgHref}>
						<img className="img-fluid" src={imgSrc} alt={imgAlt} />
					</a>
					<div className="channels-card-image-btn">
						<Button variant={buttonVariant}>
							{buttonText} <strong>{views}</strong>
						</Button>
					</div>
				</div>
				<div className="channels-card-body">
					<div className="channels-title">
						<a href={channelHref}>
							{channelName}{" "}
							{verified ? <VerifiedTooltipLinkDark /> : ""}
						</a>
					</div>
					<div className="channels-view">
						{subscriberCount} subscribers
					</div>
				</div>
			</div>
		</>
	);
}

export default ChannelCard;
