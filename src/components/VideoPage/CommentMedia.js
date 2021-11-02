import Media from "react-bootstrap/Media";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import UsersWhoLiked from "./UsersWhoLiked";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export default function CommentMedia({
	commentAuthor,
	timeAgo,
	likesCount,
	unlikesCount,
	commentBody,
}) {
	return (
		<>
			<div className="reviews-members">
				<Media>
					<a href="#">
						<img
							className="mr-3"
							src="img/s1.png"
							alt="Generic placeholder image"
						/>
					</a>
					<Media.Body>
						<div className="media-body">
							<div className="reviews-members-header">
								<h6 className="mb-1">
									<a className="text-black" href="#">
										{commentAuthor}{" "}
									</a>{" "}
									<small className="text-gray">
										{timeAgo} ago
									</small>
								</h6>
							</div>
							<div className="reviews-members-body">
								<p>{commentBody}</p>
							</div>
							<div className="reviews-members-footer">
								<a className="total-like" href="#">
									<FontAwesomeIcon icon={faThumbsUp} />{" "}
									{likesCount}
								</a>{" "}
								<a className="total-like" href="#">
									<FontAwesomeIcon icon={faThumbsDown} />{" "}
									{unlikesCount}
								</a>
								<UsersWhoLiked />
							</div>
						</div>
					</Media.Body>
				</Media>
			</div>
		</>
	);
}

function CustomMedia({ commentCount }) {
	return (
		<>
			<div className="reviews-members pt-0">
				<Media>
					<a href="#">
						<img className="mr-3" src="img/s1.png" alt="" />
					</a>
					<Media.Body>
						<div className="form-members-body">
							<Form.Control
								as="textarea"
								rows={1}
								placeholder="Add a public comment..."
							/>
						</div>

						<div className="form-members-footer text-right mt-2">
							<b className="float-left">
								{commentCount} Comments
							</b>
							<Button variant="outline-danger" size="sm">
								CANCEL
							</Button>
							&nbsp;
							<Button variant="danger" size="sm">
								COMMENT
							</Button>
						</div>
					</Media.Body>
				</Media>
			</div>
		</>
	);
}

export { CustomMedia, CommentMedia };
