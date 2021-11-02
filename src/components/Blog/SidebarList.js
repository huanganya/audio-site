import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function ListItem({ name }) {
	return (
		<li>
			<a href="#" className="sidebar-list-link">
				<FontAwesomeIcon icon={faChevronRight} /> {name}
			</a>
		</li>
	);
}

export default function SidebarList({ children }) {
	return <ul className="sidebar-card-list">{children}</ul>;
}

export { ListItem, SidebarList };
