import './main-banner.scss';


const MainBanner = (props) => {

	const bannerInfo = () => {
		return (
			<>
				<div className="banner__icon">
					<span className="_icon-logo_2"></span>
				</div>
				<p className="banner__info">We makes every day full of energy and taste Want to try our beans?</p>
				<button className="banner__btn">More</button>
			</>
		)
	}

	if (props.info) {
		return (
			<div className="banner">
				<img className='banner__img' src={props.imageSrc} alt="Coffee-shop" />
				<h1 className="banner__title">{props.title}Everything You Love About Coffee</h1>
				{bannerInfo()}
			</div>
		)
	}

	return (
		<div className="banner">
			<img className='banner__img' src={props.imageSrc} alt="Coffee-shop" />
			<h1 className="banner__title">{props.title}</h1>
		</div>
	)
}

export default MainBanner;