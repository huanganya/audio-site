export default function SidebarCard({
	children,
	title = "Untitled",
	noTitle = null,
}) {
	return (
		<div className="card sidebar-card mb-4">
			<div className="card-body">
				{noTitle ? "" : <h5 className="card-title mb-3">{title}</h5>}
				{children}
			</div>
		</div>
	);
}
