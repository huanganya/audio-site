import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function InfoCard({ label, icon, bg }) {
	const splitLabel = label.split(" ");
	const firstItem = splitLabel[0];

	let secondItem;
	if (splitLabel.length > 2) {
		secondItem = splitLabel.slice(1).join(" ");
	} else {
		secondItem = splitLabel[1];
	}

	const classes = `card text-white bg-${bg} o-hidden h-100 border-none`;

	return (
		<>
			<div className="col-xl-3 col-sm-6 mb-3">
				<div className={classes}>
					<div className="card-body">
						<div className="card-body-icon">
							<FontAwesomeIcon icon={icon} fixedWidth />
						</div>
						<div className="mr-5">
							<b>{firstItem}</b> {secondItem}
						</div>
					</div>
					<a
						className="card-footer text-white clearfix small z-1"
						href="#details"
					>
						<span className="float-left">View Details</span>
						<span className="float-right">
							<FontAwesomeIcon icon={faAngleRight} />
						</span>
					</a>
				</div>
			</div>
		</>
	);
}
