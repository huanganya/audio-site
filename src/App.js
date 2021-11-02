import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Navigation from "./components/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import Homepage from "./components/Homepage/Homepage";
import Channels from "./components/Channels/Channels";
import Playlist from "./components/Playlist/Playlist";
import SingleChannel from "./components/SingleChannel/SingleChannel";
import VideoPage from "./components/VideoPage/VideoPage";
import UploadVideo from "./components/UploadVideo/UploadVideo";
import History from "./components/History/History";
import Categories from "./components/Categories/Categories";
import Upload from "./components/Upload/Upload";
import Blog from "./components/Blog/Blog";
import BlogDetails from "./components/Blog/BlogDetails";
import Blank from "./components/Blank/Blank";
import FourZeroFour from "./components/FourZeroFour/FourZeroFour";
import Contact from "./components/Contact/Contact";
import Subscriptions from "./components/Subscriptions/Subscriptions";
import Auth from "./components/Auth/Auth";
import Settings from "./components/Settings/Settings";
import Account from "./components/Account/Account";

import { CustomScrollToTop } from "./components/Atomics/ScrollToTop/ScrollToTop";

function App() {
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		if (showMenu) {
			document.body.classList.add("sidebar-toggled");
		} else {
			document.body.classList.remove("sidebar-toggled");
		}
	}, [showMenu]);

	return (
		<Router>
			<Switch>
				<Route path="/auth" component={Auth} />
				<Route path="/">
					<Content showMenu={showMenu} setShowMenu={setShowMenu} />
				</Route>
				<Route path="*" component={FourZeroFour} />
			</Switch>
		</Router>
	);
}

function Content(props) {
	return (
		<>
			<div className="homepage-wrapper">
				<Navigation props={props} />
				<div id="wrapper">
					<Sidebar props={props} />

					<Switch>
						<Route exact path="/">
							<Homepage />
						</Route>
						<Route exact path="/channels">
							<Channels />
						</Route>
						<Route exact path="/playlist">
							<Playlist />
						</Route>
						<Route exact path="/single-channel">
							<SingleChannel />
						</Route>
						<Route exact path="/video-page">
							<VideoPage />
						</Route>
						<Route exact path="/upload-video">
							<UploadVideo />
						</Route>
						<Route exact path="/history">
							<History />
						</Route>
						<Route exact path="/categories">
							<Categories />
						</Route>
						<Route exact path="/upload">
							<Upload />
						</Route>
						<Route exact path="/blog">
							<Blog />
						</Route>
						<Route exact path="/blog-details">
							<BlogDetails />
						</Route>
						<Route exact path="/blank">
							<Blank />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
						<Route exact path="/subscriptions">
							<Subscriptions />
						</Route>
						<Route exact path="/settings">
							<Settings />
						</Route>
						<Route exact path="/account">
							<Account />
						</Route>

						<Route path="*" component={FourZeroFour} />
					</Switch>
				</div>
				<ScrollToTop
					smooth
					component={<CustomScrollToTop />}
					className="scroll-to-top outline-0"
					color="white"
				/>
			</div>
		</>
	);
}

export default App;
