import Button from "react-bootstrap/Button";

import { VerifiedTooltip } from "../Atomics/CustomCheckTooltips/CustomCheckTooltips";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function AuthorBox({
	subscriberCount,
	imgAlt = "",
	imgSrc,
	isSubscribed = false,
	channelHref = "#",
	channelName,
	verified = null,
	publishedOn,
}) {
	return (
		<>
			<div className="single-video-author box mb-3">
				<div className="float-right">
					<Button variant="danger">
						Subscribe <strong>{subscriberCount}</strong>
					</Button>{" "}
					<Button variant="outline-danger">
						<FontAwesomeIcon icon={faBell} />
					</Button>
				</div>
				<img className="img-fluid" src={imgSrc} alt={imgAlt} />
				<p>
					<a href={channelHref} className="text-danger-custom">
						<strong>{channelName}</strong>
					</a>{" "}
					{verified ? <VerifiedTooltip /> : ""}
				</p>
				<small>Published on {publishedOn}</small>
			</div>
		</>
	);
}
