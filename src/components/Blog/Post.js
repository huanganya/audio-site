import CommentsWrapper from "./CommentsWrapper";
import CommentMedia from "./CommentMedia";
import CommentForm from "./CommentForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendar,
	faFolder,
	faTag,
	faComment,
} from "@fortawesome/free-solid-svg-icons";

export default function Post({
	postTitle,
	postHref,
	publishedOn,
	postBody,
	imgSrc,
	category,
	commentCount,
	children,
}) {
	const tags = (
		<>
			<a rel="tag" href="#">
				envato
			</a>
			,{" "}
			<a rel="tag" href="#">
				sale
			</a>
			,{" "}
			<a rel="tag" href="#">
				shop
			</a>
		</>
	);
	return (
		<>
			<div className="card blog mb-4">
				<div className="blog-header">
					<a href="#">
						<img className="card-img-top" src={imgSrc} alt="" />
					</a>
				</div>
				<div className="card-body">
					<h5 className="card-title">
						<a href={postHref}>{postTitle}</a>
					</h5>
					<div className="entry-meta">
						<ul className="tag-info list-inline">
							<li className="list-inline-item">
								<a href="#">
									<span>
										<FontAwesomeIcon icon={faCalendar} />
									</span>{" "}
									{publishedOn}
								</a>
							</li>
							<li className="list-inline-item">
								<span>
									<FontAwesomeIcon icon={faFolder} />
								</span>{" "}
								<a rel="category tag" href="#">
									{category}
								</a>
							</li>
							<li className="list-inline-item">
								<span>
									<FontAwesomeIcon icon={faTag} />
								</span>{" "}
								{tags}
							</li>
							<li className="list-inline-item">
								<span>
									<FontAwesomeIcon icon={faComment} />
								</span>{" "}
								<a href="#">{commentCount} Comments</a>
							</li>
						</ul>
					</div>

					<>{children}</>

					<footer className="entry-footer">
						<div className="blog-post-tags">
							<ul className="list-inline">
								<li className="list-inline-item">
									<FontAwesomeIcon icon={faTag} /> Tags:{" "}
								</li>
								<li className="list-inline-item">
									<a rel="tag" href="#">
										envato
									</a>{" "}
								</li>
								<li className="list-inline-item">
									<a rel="tag" href="#">
										sale
									</a>{" "}
								</li>
								<li className="list-inline-item">
									<a rel="tag" href="#">
										shop
									</a>{" "}
								</li>
							</ul>
						</div>
					</footer>
				</div>
			</div>

			<CommentsWrapper>
				<CommentMedia
					commentBody="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
					commentAuthor="Stave Martin"
					commentDate="Feb 12, 2020"
				/>
				<CommentMedia
					commentBody="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
					commentAuthor="Mark Smith"
					commentDate="Feb 12, 2020"
				>
					<CommentMedia
						commentBody="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
						commentAuthor="Ryan Printz"
						commentDate="Feb 12, 2020"
					/>
				</CommentMedia>
				<CommentMedia
					commentBody="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
					commentAuthor="Stave Mark"
					commentDate="Feb 12, 2020"
				/>
			</CommentsWrapper>

			<CommentForm />
		</>
	);
}
