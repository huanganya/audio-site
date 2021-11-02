import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ThinFooter from "../Footer/ThinFooter";
import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import CategoryCard from "../Atomics/CategoryCard/CategoryCard";
import Paginate from "../Atomics/Paginate/Paginate";

const Categories = () => {
	return (
		<>
			<ContentWrapper>
				<Container fluid>
					<div className="video-block section-padding">
						<Row>
							<Col md={12}>
								<SectionHeader heading="Categories" />
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard
									name="Your Life"
									verified
									views="74,853"
								/>
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard
									name="Unboxing Cool"
									verified
									views="74,853"
								/>
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard
									name="Service Reviewing"
									views="74,853"
								/>
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard
									name="Gaming"
									verified
									views="74,853"
								/>
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard
									name="Technology Tutorials"
									views="74,853"
								/>
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard
									name="Singing"
									verified
									views="74,853"
								/>
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard name="Cooking" views="74,853" />
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard name="Traveling" views="74,853" />
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard name="Education" views="74,853" />
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard
									name="Noodles, Sauces & Instant Food"
									views="74,853"
								/>
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard
									name="Comedy"
									verified
									views="74,853"
								/>{" "}
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard
									name="Lifestyle Advic"
									views="74,853"
								/>
							</Col>
						</Row>
					</div>
					<Paginate />
				</Container>
				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

export default Categories;
