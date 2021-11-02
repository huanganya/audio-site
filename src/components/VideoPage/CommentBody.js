import { CommentMedia, CustomMedia } from "./CommentMedia";

export default function CommentBody() {
	return (
		<>
			<CustomMedia commentCount="12,725" />
			<CommentMedia
				commentAuthor="Gurdeep Osahan"
				commentBody="reacthe last order. Even though they had Chefs in their open kitchen they weren’t flexible to dish out few more items. Anyway the food was super specially their stone dessert."
				timeAgo="11 months"
				likesCount="123"
				unlikesCount="02"
			/>

			<CommentMedia
				commentAuthor="Gurdeep Osahan"
				commentBody="Was here impromptu in their first week, reacthe
								last order. Even though they had Chefs in their
								open kitchen they weren’t flexible to dish out
								few more items."
				timeAgo="11 months"
				likesCount="123"
				unlikesCount="02"
			/>
		</>
	);
}
