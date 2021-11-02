import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendar,
	faFolder,
	faTag,
	faComment,
	faChevronRight,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function PostExcerpt({
	postTitle,
	postHref,
	publishedOn,
	postExcerpt,
	imgSrc,
	category,
	commentCount,
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
						<img
							className="card-img-top"
							src={imgSrc}
							alt="Card image cap"
						/>
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

					<p className="card-text">{postExcerpt}</p>
					<a href="#">
						READ MORE <FontAwesomeIcon icon={faChevronRight} />
					</a>
				</div>
			</div>
		</>
	);
}
