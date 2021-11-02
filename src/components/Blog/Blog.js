import "./Blog.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import BlogSidebar from "./BlogSidebar";
import BlogFeed from "./BlogFeed";

const Blog = () => {
	return (
		<>
			<ContentWrapper>
				<Container fluid>
					<section className="blog-page section-padding">
						<Container>
							<Row>
								<BlogFeed />
								<BlogSidebar />
							</Row>
						</Container>
					</section>
				</Container>
				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

export default Blog;
