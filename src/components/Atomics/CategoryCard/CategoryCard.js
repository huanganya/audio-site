import { VerifiedTooltip } from "../CustomCheckTooltips/CustomCheckTooltips";

export default function CategoryCard({
	name,
	href = "#",
	verified = false,
	views,
}) {
	return (
		<>
			<div className="category-item mt-0 mb-0">
				<a href={href}>
					<img className="img-fluid" src="img/s1.png" alt="" />
					<h6>
						{name} {verified ? <VerifiedTooltip /> : ""}
					</h6>
					<p>{views} views</p>
				</a>
			</div>
		</>
	);
}
