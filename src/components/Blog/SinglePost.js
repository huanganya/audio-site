import Col from "react-bootstrap/Col";

import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import Post from "./Post";

export default function SinglePost() {
	return (
		<>
			<Col md={12}>
				<SectionHeader heading="Blog Details" />
			</Col>
			<Col md={8}>
				<Post
					postTitle="Aliquam euismod libero eu enim. Nulla nec felis sed leo."
					postHref="#"
					publishedOn="March 6, 2020"
					imgSrc="img/blog/1.png"
					category="Image"
					commentCount="4"
				>
					<p>
						Aliquam convallis sollicitudin purus. Praesent aliquam,
						enim at fermentum mollis, ligula massa adipiscing nisl,
						ac euismod nibh nisl eu lectus. Fusce vulputate sem at
						sapien. Vivamus leo. Aliquam euismod libero eu enim.
						Nulla nec felis sed leo placerat imperdiet. Aenean
						suscipit nulla in justo. Suspendisse cursus rutrum
						augue. Nulla tincidunt tincidunt mi.
					</p>
					<blockquote className="blockquote">
						<p className="mb-0">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Integer posuere erat a ante.
						</p>
						<footer className="blockquote-footer">
							Someone famous in{" "}
							<cite title="Source Title">Source Title</cite>
						</footer>
					</blockquote>
					<p>
						Praesent aliquam, enim at fermentum mollis, ligula massa
						adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce
						vulputate sem at sapien. Vivamus leo. Aliquam euismod
						libero eu enim. Nulla nec felis sed leo placerat
						imperdiet. Aenean suscipit nulla in justo.
					</p>
					<h5 className="mb-4">
						Lorem ipsum dolor sit amet, consectetur.
					</h5>
					<div className="gallery mb-4">
						<div className="row">
							<div className="col-sm-4">
								<img
									className="rounded"
									alt=""
									src="img/blog/2.png"
								/>
							</div>
							<div className="col-sm-4">
								<img
									className="rounded"
									alt=""
									src="img/blog/3.png"
								/>
							</div>
							<div className="col-sm-4">
								<img
									className="rounded"
									alt=""
									src="img/blog/1.png"
								/>
							</div>
						</div>
					</div>
					<p>
						Praesent aliquam, enim at fermentum mollis, ligula massa
						adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce
						vulputate sem at sapien. Vivamus leo. Aliquam euismod
						libero eu enim. Nulla nec felis sed leo placerat
						imperdiet. Aenean suscipit nulla in justo.
					</p>
					<h5 className="mb-2">Qui cumque numquam ?</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Possimus a nobis, vero in corrupti nostrum. Magni
						reprehenderit tempora tempore maiores, repellat in
						laboriosam aliquid ex error, iusto quae, et similique.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Reiciendis sunt a quam, exercitationem, provident
						numquam quia eius optio quos vitae odio impedit ipsum
						voluptatem earum neque architecto enim quisquam, ea.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Non, ipsum facilis, eaque aliquid porro deleniti
						architecto eum perferendis quidem modi quo reiciendis
						dolor deserunt beatae repellat, nostrum aut fuga. Rem?
					</p>
					<div className="gallery mt-4 mb-4">
						<div className="row">
							<div className="col-sm-6">
								<img
									alt=""
									className="rounded"
									src="img/blog/2.png"
								/>
							</div>
							<div className="col-sm-6">
								<img
									alt=""
									className="rounded"
									src="img/blog/3.png"
								/>
							</div>
						</div>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Non, ipsum facilis, eaque aliquid porro deleniti
						architecto eum perferendis quidem modi quo reiciendis
						dolor deserunt beatae repellat, nostrum aut fuga. Rem?
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Reiciendis sunt a quam, exercitationem, provident
						numquam quia eius optio quos vitae odio impedit ipsum
						voluptatem earum neque architecto enim quisquam, ea.
					</p>
				</Post>
			</Col>
		</>
	);
}
