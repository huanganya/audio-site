import "./SectionHeader.css";
import Dropdown from "react-bootstrap/Dropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faStar,
	faSignal,
	faTimesCircle,
	faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

const SectionHeader = ({
	heading,
	icon = null,
	noIconLabel = false,
	dropdownOnly = null,
}) => {
	let dropdownIcon = icon ? icon : faCaretDown;
	let dropdownIconLabel = noIconLabel ? "" : "Sort by";

	let dropdownBodyz;

	if (dropdownOnly) {
		dropdownBodyz = (
			<ButtonGroup
				dropdownIcon={dropdownIcon}
				dropdownIconLabel={dropdownIconLabel}
			/>
		);
	} else {
		dropdownBodyz = (
			<HeadingWrapper heading={heading}>
				<ButtonGroup
					dropdownIcon={dropdownIcon}
					dropdownIconLabel={dropdownIconLabel}
				/>
			</HeadingWrapper>
		);
	}

	return <>{dropdownBodyz}</>;
};

function ButtonGroup({ dropdownIcon, dropdownIconLabel }) {
	return (
		<>
			<div className="btn-group float-right right-action">
				<Dropdown>
					<Dropdown.Toggle
						as="a"
						id=""
						className="right-action-link text-gray no-after"
					>
						{dropdownIconLabel}{" "}
						<span>
							<FontAwesomeIcon icon={dropdownIcon} />
						</span>
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="#">
							<FontAwesomeIcon icon={faStar} fixedWidth />
							&nbsp;Top Rated
						</Dropdown.Item>
						<Dropdown.Item href="#">
							<FontAwesomeIcon icon={faSignal} fixedWidth />
							&nbsp;Viewed
						</Dropdown.Item>
						<Dropdown.Item href="#">
							<FontAwesomeIcon icon={faTimesCircle} fixedWidth />
							&nbsp;Close
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</>
	);
}

function HeadingWrapper({ children, heading }) {
	return (
		<>
			<div className="main-title">
				{children ? children : ""}
				<h6>{heading}</h6>
			</div>
		</>
	);
}

export default SectionHeader;
export { HeadingWrapper };
