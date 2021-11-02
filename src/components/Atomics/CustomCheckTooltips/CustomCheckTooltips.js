import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faFrown } from "@fortawesome/free-solid-svg-icons";

function VerifiedTooltip() {
	const renderTooltip = (props) => <Tooltip {...props}>Verified</Tooltip>;
	return (
		<>
			<OverlayTrigger placement="top" overlay={renderTooltip}>
				<span className="text-success-custom">
					<FontAwesomeIcon icon={faCheckCircle} />
				</span>
			</OverlayTrigger>
		</>
	);
}

function UnverifiedTooltip() {
	const renderTooltip = (props) => <Tooltip {...props}>Unverified</Tooltip>;
	return (
		<>
			<OverlayTrigger placement="top" overlay={renderTooltip}>
				<span className="text-danger-custom">
					<FontAwesomeIcon icon={faFrown} />
				</span>
			</OverlayTrigger>
		</>
	);
}

function VerifiedTooltipLink() {
	const renderTooltip = (props) => <Tooltip {...props}>Verified</Tooltip>;
	return (
		<>
			<OverlayTrigger placement="top" overlay={renderTooltip}>
				<a className="text-success-custom">
					<FontAwesomeIcon icon={faCheckCircle} />
				</a>
			</OverlayTrigger>
		</>
	);
}
function VerifiedTooltipLinkDark() {
	const renderTooltip = (props) => <Tooltip {...props}>Verified</Tooltip>;
	return (
		<>
			<OverlayTrigger placement="top" overlay={renderTooltip}>
				<a className="">
					<FontAwesomeIcon icon={faCheckCircle} />
				</a>
			</OverlayTrigger>
		</>
	);
}
function UnverifiedTooltipLink() {
	const renderTooltip = (props) => <Tooltip {...props}>Unverified</Tooltip>;
	return (
		<>
			<OverlayTrigger placement="top" overlay={renderTooltip}>
				<a className="text-danger-custom">
					<FontAwesomeIcon icon={faFrown} />
				</a>
			</OverlayTrigger>
		</>
	);
}

export {
	VerifiedTooltip,
	UnverifiedTooltip,
	VerifiedTooltipLink,
	UnverifiedTooltipLink,
	VerifiedTooltipLinkDark,
};
