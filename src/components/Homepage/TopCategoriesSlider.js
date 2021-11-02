import Slider from "react-slick";

import Slide from "../Atomics/Slide/Slide";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleRight,
	faAngleLeft,
	faCircle,
} from "@fortawesome/free-solid-svg-icons";

function SampleNextArrow(props) {
	return (
		<button
			className="custom-slick-btn custom-slick-next"
			onClick={props.onClick}
		>
			<span>
				<FontAwesomeIcon
					icon={faAngleRight}
					mask={faCircle}
					transform="shrink-7"
				/>
			</span>
		</button>
	);
}

function SamplePrevArrow(props) {
	return (
		<button
			className="custom-slick-btn custom-slick-prev"
			onClick={props.onClick}
		>
			<FontAwesomeIcon
				icon={faAngleLeft}
				mask={faCircle}
				transform="shrink-7"
			/>
		</button>
	);
}

export default function TopCategoriesSlider() {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 9,
		slidesToScroll: 1,
		initialSlide: 0,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: 2000,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 8,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
		],
	};
	return (
		<>
			<Slider {...settings}>
				<Slide
					href="#"
					imgSrc="img/s1.png"
					label="Your Life"
					views="74,853"
				/>
				<Slide
					imgSrc="img/s2.png"
					label="Unboxing Cool"
					views="74,853"
				/>
				<Slide
					imgSrc="img/s3.png"
					label="Service Reviewing"
					views="74,853"
				/>
				<Slide
					imgSrc="img/s4.png"
					label="Gaming"
					views="74,853"
					verified
				/>
				<Slide
					imgSrc="img/s5.png"
					label="Technology Tutorials"
					views="74,853"
				/>
				<Slide imgSrc="img/s6.png" label="Singing" views="74,853" />
				<Slide imgSrc="img/s7.png" label="Cooking" views="74,853" />
				<Slide imgSrc="img/s8.png" label="Travelling" views="74,853" />
				<Slide imgSrc="img/s1.png" label="Education" views="74,853" />
				<Slide
					imgSrc="img/s2.png"
					label="Noodles, Sauces & Instant Food"
					views="74,853"
				/>
				<Slide
					imgSrc="img/s1.png"
					label="Comedy"
					views="74,853"
					verified
				/>
				<Slide
					imgSrc="img/s1.png"
					label="Lifestyle Advice"
					views="74,853"
				/>
			</Slider>
		</>
	);
}
