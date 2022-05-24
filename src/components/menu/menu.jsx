import './menu.scss';
import nextId from "react-id-generator";


const Menu = (props) => {
	const linksData = [
		{ liClass: 'menu__item', btnClass: 'menu__link', value: 'Coffee house', key: nextId() },
		{ liClass: 'menu__item', btnClass: 'menu__link', value: 'Our coffee', key: nextId() },
		{ liClass: 'menu__item', btnClass: 'menu__link', value: 'For your pleasure', key: nextId() },
	]

	const links = linksData.map(item => {
		if (item === linksData[0]) {
			return <li key={item.key} className={item.liClass}><span className='_icon-logo_1'></span><button onClick={() => props.onMenuClick(item)} className={item.btnClass}>{item.value}</button></li>
		}
		return (
			<li key={item.key} className={item.liClass}><button onClick={() => props.onMenuClick(item)} className={item.btnClass}>{item.value}</button></li>
		)
	})

	return (
		links
	)
}

export default Menu;