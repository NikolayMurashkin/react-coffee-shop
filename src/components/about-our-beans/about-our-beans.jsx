import './about-our-beans.scss';
import Decor from '../decor/decor';
import img from './img.jpg';

const AboutOurBeans = () => {
	return (
		<div className="beans">
			<img src={img} alt="Woman drinks coffee" className="beans__img" />
			<div className="beans__body">
				<h2 className="beans__title">About our beans</h2>
				<Decor />
				<p className="beans__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
				<p className="beans__text">Afraid at highly months do things on at. Situation recommend objection do intention
					so questions.
					As greatly removed calling pleased improve an. Last ask him cold feel
					met spot shy want. Children me laughing we prospect answered followed. At it went
					is song that held help face.</p>
			</div>
		</div>
	)
}

export default AboutOurBeans;