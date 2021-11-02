import { Tag, TagCloud } from "../Blog/TagCloud";

export default function VideoDescription() {
	return (
		<>
			<div className="single-video-info-content box mb-3">
				<DescriptionBlock
					heading="Cast"
					body="Nathan Drake , Victor Sullivan , Sam Drake , Elena
						Fisher"
				/>

				<DescriptionBlock
					heading="Category"
					body="Gaming , PS4 Exclusive , Gameplay , 1080p"
				/>
				<DescriptionBlock
					heading="About"
					body="It is a long established fact that a reader will be
					distracted by the readable content of a page when looking at
					its layout. The point of using Lorem Ipsum is that it has a
					more-or-less normal distribution of letters, as evolved over
					the years, sometimes"
				/>

				<TagCloud heading="Tags">
					<Tag name="Uncharted 0" />
					<Tag name="Playstation 4" />
					<Tag name="Gameplay" />
					<Tag name="1080P" />
					<Tag name="ps4Share" />
					<Tag name="+ 6" lastChild />
				</TagCloud>
			</div>
		</>
	);
}

function DescriptionBlock({ heading, body }) {
	return (
		<>
			<h6>{heading}</h6>
			<p>{body}</p>
		</>
	);
}
