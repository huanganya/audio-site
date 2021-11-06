import { Link } from "react-router-dom";
import "./Sidebar.css";

import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";

import ChannelSidebarList from "./ChannelSidebarList";
import NavItem from "./NavItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUsers,
	faUserAlt,
	faVideo,
	faCloudUploadAlt,
	faFolder,
	faHistory,
	faListAlt,
	faList,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ props }) => {
	const sidebarClass = props.showMenu
		? "sidebar navbar-nav toggled"
		: "sidebar navbar-nav";

	return (
		<>
			<ul className={sidebarClass}>
				<NavItem href="/" faIcon={faHome} label="Home" active />
				<NavItem href="/channels" faIcon={faUsers} label="Channels" />
				<NavItem href="/playlist" faIcon={faList} label="Playlist" />

				<NavItem
					href="/single-channel"
					faIcon={faUserAlt}
					label="Single Channel"
				/>
				<NavItem
					href="/video-page"
					faIcon={faVideo}
					label="Video Page"
				/>
				<NavItem
					href="/upload"
					faIcon={faCloudUploadAlt}
					label="Upload Video"
				/>

				<NavDropdown
					as="li"
					title={
						<>
							<FontAwesomeIcon icon={faFolder} fixedWidth />{" "}
							<span>Pages</span>
						</>
					}
				>
					<Dropdown.Header>Login Screens:</Dropdown.Header>

					<Link to="/auth/login" className="dropdown-item">
						Login
					</Link>

					<Link to="/auth/register" className="dropdown-item">
						Register
					</Link>

					<Link to="/auth/forget-password" className="dropdown-item">
						Forget Password
					</Link>
					<NavDropdown.Divider />
					<Dropdown.Header>Other pages:</Dropdown.Header>

					<Link to="/blog" className="dropdown-item">
						Blog
					</Link>

					<Link to="/blog-details" className="dropdown-item">
						Blog Details
					</Link>

					<Link to="/blank" className="dropdown-item">
						Blank Page
					</Link>

					<Link to="/FourZeroFour" className="dropdown-item">
						404 Page
					</Link>

					<Link to="/contact" className="dropdown-item">
						Contact
					</Link>
				</NavDropdown>

				<NavItem
					href="/history"
					faIcon={faHistory}
					label="History Page"
				/>

				<NavDropdown
					title={
						<>
							<FontAwesomeIcon icon={faListAlt} fixedWidth />{" "}
							<span>Categories</span>
						</>
					}
				>
					<Link to="/categories" className="dropdown-item">
						Movie
					</Link>

					<Link to="/categories" className="dropdown-item">
						Music
					</Link>

					<Link to="/categories" className="dropdown-item">
						Television
					</Link>
				</NavDropdown>

				<ChannelSidebarList />
			</ul>
		</>
	);
};

export default Sidebar;
