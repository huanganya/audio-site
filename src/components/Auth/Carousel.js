import Slider from "react-slick";

import Col from "react-bootstrap/Col";
function Carousel() {
	return (
		<>
			<Col md={7}>
				<div className="login-main-right bg-white p-5 mt-5 mb-5">
					<AuthScreenSlider />
				</div>
			</Col>
		</>
	);
}

function AuthScreenSlider() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		swipeToSlide: true,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: false,
	};
	return (
		<>
			<Slider {...settings}>
				<Slide
					heading="Watch videos offline"
					imgSrc="/img/login.png"
					imgAlt="LOGO"
				>
					When an unknown printer took a galley of type and scrambled
					<br /> it to make a type specimen book. It has survived not{" "}
					<br />
					only five centuries
				</Slide>

				<Slide
					heading="Download videos effortlessly"
					imgSrc="/img/login.png"
					imgAlt="LOGO"
				>
					When an unknown printer took a galley of type and scrambled
					<br /> it to make a type specimen book. It has survived not{" "}
					<br />
					only five centuries
				</Slide>

				<Slide
					heading="Create GIFs"
					imgSrc="/img/login.png"
					imgAlt="LOGO"
				>
					When an unknown printer took a galley of type and scrambled
					<br /> it to make a type specimen book. It has survived not{" "}
					<br />
					only five centuries
				</Slide>
			</Slider>
		</>
	);
}

function Slide({ imgSrc, imgAlt, heading, children }) {
	return (
		<>
			<div className="item">
				<div className="carousel-login-card text-center">
					<img src={imgSrc} className="img-fluid" alt={imgAlt} />
					<h5 className="mt-5 mb-3">​{heading}</h5>
					<p className="mb-4">{children}</p>
				</div>
			</div>
		</>
	);
}

export default Carousel;
