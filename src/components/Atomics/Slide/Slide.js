import "./Slide.css";

import { VerifiedTooltip } from "../CustomCheckTooltips/CustomCheckTooltips";

export default function Slide({
	href,
	imgSrc,
	imgAlt = "",
	label,
	views,
	verified = null,
}) {
	const verifyLabel = verified ? <VerifiedTooltip /> : "";
	return (
		<>
			<div className="item">
				<div className="category-item">
					<a href={href ? href : "#"}>
						<img
							className="img-fluid custom-slick-img"
							src={imgSrc}
							alt={imgAlt}
						/>
						<h6>
							{label} {verifyLabel}
						</h6>
						<p>{views} views</p>
					</a>
				</div>
			</div>
		</>
	);
}
