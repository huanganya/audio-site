import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function UsersWhoLiked() {
	return (
		<>
			<span dir="rtl" className="total-like-user-main ml-2">
				<AvatarTooltip title="Gurdeep Osahan" />
				<AvatarTooltip title="Gurdeep Osahan" />
				<AvatarTooltip title="Gurdeep Osahan" />
				<AvatarTooltip title="Gurdeep Osahan" />
			</span>
		</>
	);
}

function AvatarTooltip({ title }) {
	const renderTooltip = (props) => {
		return <Tooltip {...props}>{title}</Tooltip>;
	};
	return (
		<>
			<OverlayTrigger placement="top" overlay={renderTooltip}>
				<a href="#" title="">
					<img className="total-like-user" src="img/s1.png" alt="" />
				</a>
			</OverlayTrigger>
		</>
	);
}

export { AvatarTooltip };
