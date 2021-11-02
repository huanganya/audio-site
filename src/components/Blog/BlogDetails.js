import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";

import ThinFooter from "../Footer/ThinFooter";
import BlogSidebar from "./BlogSidebar";
import SinglePost from "./SinglePost";

const BlogDetails = () => {
	return (
		<>
			<div id="content-wrapper">
				<Container fluid>
					<section className="blog-page section-padding">
						<Container>
							<Row>
								<SinglePost />
								<BlogSidebar showPopularPosts />
							</Row>
						</Container>
					</section>
				</Container>
				<ThinFooter />
			</div>
		</>
	);
};

export default BlogDetails;
