import Col from "react-bootstrap/Col";

import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import Paginate from "../Atomics/Paginate/Paginate";

import PostExcerpt from "./PostExcerpt";

export default function BlogFeed() {
	return (
		<>
			<Col md={12}>
				<SectionHeader heading="Blog" />
			</Col>
			<Col md={8}>
				<PostExcerpt
					postTitle="Aliquam euismod libero eu enim. Nulla nec felis sed leo."
					postHref="#"
					publishedOn="March 6, 2020"
					postExcerpt="Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Lorem ipsum dolor"
					imgSrc="img/blog/1.png"
					category="Image"
					commentCount="4"
				/>

				<PostExcerpt
					postTitle="Aliquam euismod libero eu enim. Nulla nec felis sed leo."
					postHref="#"
					publishedOn="March 6, 2020"
					postExcerpt="Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Lorem ipsum dolor"
					imgSrc="img/blog/1.png"
					category="Image"
					commentCount="4"
				/>

				<PostExcerpt
					postTitle="Aliquam euismod libero eu enim. Nulla nec felis sed leo."
					postHref="#"
					publishedOn="March 6, 2020"
					postExcerpt="Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Lorem ipsum dolor"
					imgSrc="img/blog/1.png"
					category="Image"
					commentCount="4"
				/>
				<Paginate />
			</Col>
		</>
	);
}
