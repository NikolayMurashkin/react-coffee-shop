import './about-our-goods.scss';
import Decor from '../decor/decor';
import img from './img.jpg';

const AboutOurGoods = () => {
	return (
		<div className="goods">
			<img src={img} alt="Woman drinks coffee" className="goods__img" />
			<div className="goods__body">
				<h2 className="goods__title">About our goods</h2>
				<Decor />
				<p className="goods__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
				<p className="goods__text">Afraid at highly months do things on at. Situation recommend objection do intention
					so questions.
					As greatly removed calling pleased improve an. Last ask him cold feel
					met spot shy want. Children me laughing we prospect answered followed. At it went
					is song that held help face.</p>
			</div>
		</div>
	)
}

export default AboutOurGoods;