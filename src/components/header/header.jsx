import './header.scss';
import Menu from '../menu/menu';


const Header = (props) => {
	return (
		<div className="header">
			<div className='container'>
				<div className="menu">
					<nav className="menu__body">
						<ul className="menu__list">
							<Menu onMenuClick={props.onMenuClick}/>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Header;