import { Link } from "react-router-dom";

const ListChannel = ({
	href,
	imgSrc,
	imgAlt,
	label,
	labelBadge = null,
	badgeValue = "",
}) => {
	const labelVariant = `badge badge-${labelBadge}`;

	const labelWithBadge = (
		<>
			{label} <span className={labelVariant}>{badgeValue}</span>
		</>
	);

	return (
		<>
			<li>
				<Link to={href}>
					<img
						className="img-fluid"
						alt={imgAlt ? imgAlt : ""}
						src={imgSrc}
					/>{" "}
					{labelBadge ? labelWithBadge : label}
				</Link>
			</li>
		</>
	);
};

export default ListChannel;
