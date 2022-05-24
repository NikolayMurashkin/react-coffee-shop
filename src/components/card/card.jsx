import './card.scss';

const Card = (props) => {

	const { src, subtitle, price, id, dataFilter } = props;
	if (dataFilter) {
		return (
			<div className="our-best__card" key={id}>
				<img src={src} alt={subtitle} className="our-best__img" />
				<h3 className="our-best__subtitle">{subtitle}</h3>
				<span data-filter={dataFilter}>{dataFilter}</span>
				<span className="our-best__price">{price}$</span>
			</div>
		)
	}
	return (
		<div className="our-best__card">
			<img src={src} alt={subtitle} className="our-best__img" />
			<h3 className="our-best__subtitle">{subtitle}</h3>
			<span className="our-best__price">{price}$</span>
		</div>
	)

}

export default Card;