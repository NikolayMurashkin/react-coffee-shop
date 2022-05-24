import './our-best.scss';
import Card from '../card/card';
import nextId from "react-id-generator";
import solimo from './solimo.jpg';
import presto from './presto.jpg';
import aromistico from './aromisto.jpg';

const OurBest = (props) => {
	const cardsData = [
		{ src: solimo, subtitle: 'Solimo Coffee Beans 2 kg', price: '10.73', id: nextId() },
		{ src: presto, subtitle: 'Presto Coffee Beans 1 kg', price: '15.99', id: nextId() },
		{ src: aromistico, subtitle: 'AROMISTICO Coffee 1 kg', price: '6.99', id: nextId() },
	]
	const cards = cardsData.map(item => {
		return <Card src={item.src} subtitle={item.subtitle} price={item.price} key={item.id} />
	})
	return (
		<div className="our-best">
			<h2 className="our-best__title">Our best</h2>
			<div className="our-best__cards">
				{cards}
			</div>
		</div>
	)
}

export default OurBest;