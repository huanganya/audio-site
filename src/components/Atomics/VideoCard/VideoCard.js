import "./VideoCard.css";

import {
	VerifiedTooltip,
	UnverifiedTooltip,
} from "../CustomCheckTooltips/CustomCheckTooltips";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

function VideoCard({
	iconHref = "#",
	imgHref = "#",
	imgSrc,
	imgAlt = "",
	time = "-:-",
	videoTitle = "#",
	videoTitleHref,
	views,
	timeAgo,
	videoCategory,
	verified = null,
}) {
	return (
		<>
			<div className="video-card">
				<div className="video-card-image">
					<a className="play-icon" href={iconHref}>
						<FontAwesomeIcon icon={faPlayCircle} />
					</a>
					<a href={imgHref}>
						<img className="img-fluid" src={imgSrc} alt={imgAlt} style={{width: "100%", height: "160px", objectFit: "cover"}}/>
					</a>
					<div className="time">{time}</div>
				</div>
				<div className="video-card-body">
					<div className="video-title">
						<a href={videoTitleHref}>{videoTitle}</a>
					</div>
					<div
						className={
							verified
								? "video-page text-success-custom"
								: "video-page text-danger-custom"
						}
					>
						{videoCategory}{" "}
						{verified ? <VerifiedTooltip /> : <UnverifiedTooltip />}
					</div>
					<div className="video-view">
						{views} views &nbsp;
						<FontAwesomeIcon icon={faCalendarAlt} /> {timeAgo} ago
					</div>
				</div>
			</div>
		</>
	);
}

export default VideoCard;
