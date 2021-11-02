export default function TagCloud({ children, heading = "" }) {
	return (
		<>
			{heading ? <h6>{heading}</h6> : ""}
			<div className="tagcloud">{children}</div>
		</>
	);
}

function Tag({ name, isLastChild = false, href = "#" }) {
	const tagClass = isLastChild ? "tag-cloud-link" : "tag-cloud-link mr-1";
	return (
		<a className={tagClass} href={href}>
			{name}
		</a>
	);
}

export { Tag, TagCloud };
