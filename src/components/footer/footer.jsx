import './footer.scss';
import Menu from '../menu/menu';
import Decor from '../decor/decor';

const Footer = () => {
	return (
		<div className="footer">
			<div className="menu">
				<nav className="menu__body">
					<ul className="menu__list">
						<Menu />
					</ul>
				</nav>
				<Decor />
			</div>
		</div>
	)
}

export default Footer;