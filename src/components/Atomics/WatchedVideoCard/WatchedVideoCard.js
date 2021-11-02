import Col from "react-bootstrap/Col";

import {
	VerifiedTooltip,
	UnverifiedTooltip,
} from "../CustomCheckTooltips/CustomCheckTooltips";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlayCircle,
	faTimesCircle,
	faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function WatchedVideoCard({
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
	progressTime = "-:-",
	progress = "0",
}) {
	return (
		<>
			<Col xl={3} sm={6} className="mb-3">
				<div className="video-card history-video">
					<div className="video-card-image">
						<a className="video-close" href="#">
							<FontAwesomeIcon icon={faTimesCircle} />
						</a>
						<a className="play-icon" href="#">
							<FontAwesomeIcon icon={faPlayCircle} />
						</a>
						<a href={imgHref}>
							<img
								className="img-fluid"
								src={imgSrc}
								alt={imgAlt}
							/>
						</a>
						<div className="time">{time}</div>
					</div>
					<div className="progress">
						<div
							className="progress-bar"
							role="progressbar"
							style={{ width: progress + "%" }}
							aria-valuenow="50"
							aria-valuemin="0"
							aria-valuemax="100"
						>
							{progressTime}
						</div>
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
							{verified ? (
								<VerifiedTooltip />
							) : (
								<UnverifiedTooltip />
							)}
						</div>
						<div className="video-view">
							{views} views &nbsp;
							<FontAwesomeIcon icon={faCalendarAlt} /> {timeAgo}{" "}
							ago
						</div>
					</div>
				</div>
			</Col>
		</>
	);
}
