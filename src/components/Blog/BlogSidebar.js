import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import SidebarCard from "./SidebarCard";
import { SidebarList, ListItem } from "./SidebarList";
import { Tag, TagCloud } from "./TagCloud";
import PopularPostList from "./PopularPostList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function BlogSidebar({ showPopularPosts = "" }) {
	const popularPosts = showPopularPosts ? (
		<SidebarCard title="Popular Posts">
			<PopularPostList />
		</SidebarCard>
	) : (
		""
	);
	return (
		<>
			<Col md={4}>
				<SidebarCard noTitle>
					<InputGroup>
						<FormControl type="text" placeholder="Search For" />
						<InputGroup.Append>
							<Button variant="secondary">
								Search <FontAwesomeIcon icon={faArrowRight} />
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</SidebarCard>

				<SidebarCard title="Categories">
					<SidebarList>
						<ListItem name="Audio" />
						<ListItem name="Gallery" />
						<ListItem name="Image" />
						<ListItem name="Uncategorized" />
						<ListItem name="Video" />
					</SidebarList>
				</SidebarCard>

				<SidebarCard title="Archives">
					<SidebarList>
						<ListItem name=" December, 2017" />
						<ListItem name=" November, 2017" />
						<ListItem name="October, 2017" />
					</SidebarList>
				</SidebarCard>

				<SidebarCard title="Tags">
					<TagCloud>
						<Tag name="coupon" />
						<Tag name="deals" />
						<Tag name="discount" />
						<Tag name="envato" />
						<Tag name="gallery" />
						<Tag name="sale" />
						<Tag name="shop" />
						<Tag name="stores" />
						<Tag name="video" />
						<Tag name="vimeo" />
						<Tag name="youtube" isLastChild />
					</TagCloud>
				</SidebarCard>

				{popularPosts}

				<SidebarCard title="Newsletter">
					<InputGroup>
						<FormControl
							type="email"
							placeholder="Your email address"
						/>
						<InputGroup.Append>
							<Button variant="secondary">
								Sign up <FontAwesomeIcon icon={faArrowRight} />
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</SidebarCard>

				<SidebarCard title="Meta">
					<SidebarList>
						<ListItem name="Log in" />
						<ListItem name="Entries RSS" />
						<ListItem name="Comments RSS" />
						<ListItem name="WordPress.org" />
					</SidebarList>
				</SidebarCard>
			</Col>
		</>
	);
}
