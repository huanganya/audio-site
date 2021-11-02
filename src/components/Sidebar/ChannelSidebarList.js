import ListChannel from "./ListChannel";

const ChannelSidebarList = () => {
	return (
		<>
			<li className="nav-item channel-sidebar-list">
				<h6>SUBSCRIPTIONS</h6>
				<ul>
					<ListChannel
						href="/subscriptions"
						imgSrc="/img/s1.png"
						label="Your Life"
					/>

					<ListChannel
						href="/subscriptions"
						imgSrc="/img/s2.png"
						label="Unboxing"
						labelBadge="warning"
						badgeValue="2"
					/>
					<ListChannel
						href="/subscriptions"
						imgSrc="/img/s3.png"
						label="Product / Service"
					/>
					<ListChannel
						href="/subscriptions"
						imgSrc="/img/s4.png"
						label="Gaming"
					/>
				</ul>
			</li>
		</>
	);
};

export default ChannelSidebarList;
