import './main-banner.scss';

const MainBanner = (props) => {
	return (
		<div className="banner">
			<h1 className="banner__title">Everything You Love About Coffee</h1>
			<div className="banner__icon">
				<span className="_icon-logo_2"></span>
			</div>
			<p className="banner__info">We makes every day full of energy and taste Want to try our beans?</p>
			<button className="banner__btn">More</button>
		</div>
	)
}

export default MainBanner;