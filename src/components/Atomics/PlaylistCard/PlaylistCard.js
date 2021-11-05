import "./PlaylistCard.css";

import Button from "react-bootstrap/Button";

import { VerifiedTooltipLinkDark } from "../CustomCheckTooltips/CustomCheckTooltips";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faCog } from "@fortawesome/free-solid-svg-icons";

function PlaylistCard({
	id,
	imgSrc,
	imgAlt = "",
	imgHref = "#",
	views,
	channelName,
	folderType,
	channelHref = "#",
	verified,
	isSubscribed,
	outline = false,
	handleMinus,
	handlePlus,
	handleCog,
}) {
	let plusButton = "outline-info";
	let minusButton = "outline-danger";
	let cogButton = "outline-secondary";

	return (
		<>
			<div className="channels-card">
				<div className="channels-card-image">
					<div>
						<center>
						<a href={imgHref}>
							<img className="img-fluid" src={imgSrc} alt={imgAlt} />
						</a>
						</center>
					</div>
					<div className="row" style={{marginLeft: "8%", marginRight: "8%"}}>
						<div className="channels-card-image-btn col-md-4">
							<center>
								<Button variant={plusButton} onClick={()=>handlePlus(id)}><FontAwesomeIcon icon={faPlus} fixedWidth /></Button>
							</center>
						</div>
						<div className="channels-card-image-btn col-md-4">
							<center>
								<Button variant={minusButton} onClick={()=>handleMinus(id)}><FontAwesomeIcon icon={faTrash} fixedWidth /></Button>
							</center>
						</div>
						<div className="channels-card-image-btn col-md-4">
							<center>
								<Button variant={cogButton} onClick={()=>handleCog(id)}><FontAwesomeIcon icon={faCog} fixedWidth /></Button>
							</center>
						</div>
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
						{folderType} folder
					</div>
				</div>
			</div>
		</>
	);
}

export default PlaylistCard;
