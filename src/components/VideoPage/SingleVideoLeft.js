import VideoTitle from "./VideoTitle";
import AuthorBox from "./AuthorBox";
import VideoDescription from "./VideoDescription";
import CommentBox from "./CommentBox";

const SingleVideoLeft = () => {
	return (
		<>
			<div className="single-video-left">
				<VideoTitle
					title="Contrary to popular belief, Lorem Ipsum (2020) is
							not."
					views="2,729,347"
				/>

				<AuthorBox
					subscriberCount="1.4M"
					imgSrc="img/s4.png"
					channelName="Osahan Channel"
					verified
					publishedOn="Aug 10, 2020"
				/>

				<VideoDescription />

				<CommentBox />
			</div>
		</>
	);
};

export default SingleVideoLeft;
