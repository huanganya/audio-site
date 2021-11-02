import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import CommentBody from "./CommentBody";

const CommentBox = () => {
	return (
		<>
			<div className="box  single-video-comment-tabs">
				<Tabs defaultActiveKey="vidoe">
					<Tab eventKey="vidoe" title="vidoe Comments">
						<CommentBody />
					</Tab>
					<Tab eventKey="disqus" title="Disqus Comments">
						<Soon />
					</Tab>
					<Tab eventKey="fb" title="Facebook Comments">
						<Soon />
					</Tab>
				</Tabs>
			</div>
		</>
	);
};

function Soon() {
	return <p>Coming Soon...</p>;
}

export default CommentBox;
