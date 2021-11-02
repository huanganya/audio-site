import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function VideoTitle({ title, videoHref = "#", views }) {
	return (
		<>
			<div className="single-video-title box mb-3">
				<h2>
					<a href={videoHref}>{title}</a>
				</h2>
				<p className="mb-0">
					<FontAwesomeIcon icon={faEye} /> {views} views
				</p>
			</div>
		</>
	);
}
