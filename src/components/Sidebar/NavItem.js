import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({ href, faIcon, label, active, children }) => {
	return (
		<>
			<li className={active ? "nav-item active" : "nav-item"}>
				<Link to={href} className="nav-link">
					<FontAwesomeIcon icon={faIcon} fixedWidth />{" "}
					<span>{label}</span>
				</Link>
			</li>
		</>
	);
};

export default NavItem;
