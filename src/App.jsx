import './App.scss';
import './fonts.scss'
import Header from './components/header/header';
import MainBanner from './components/main-banner/main-banner';
import AboutUs from './components/about-us/about-us';
import OurBest from './components/our-best/our-best';
import Footer from './components/footer/footer';
import mainBg from './components/main-banner/main-bg.jpg';
import ourCoffeeBg from './components/main-banner/our-coffee-bg.jpg';
import pleasureBg from './components/main-banner/for-your-pleasure-bg.jpg';
import AboutOurBeans from './components/about-our-beans/about-our-beans';
import AboutOurGoods from './components/about-our-goods/about-our-goods';
import { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Everything You Love About Coffee',
			imageSrc: mainBg,
			info: true,
			about: <AboutUs />
		}
	}

	onMenuClick = (obj) => {
		switch (obj.value) {
			case 'Coffee house':
				this.setState(({ title, imageSrc, info, about }) => {
					return {
						title: 'Everything You Love About Coffee',
						imageSrc: mainBg,
						info: true,
						about: <AboutUs />
					}
				})
				console.log(this.state.title)
				break;
			case 'Our coffee':
				this.setState(({ title, imageSrc, info, about }) => {
					return {
						title: 'Our coffee',
						imageSrc: ourCoffeeBg,
						info: false,
						about: <AboutOurBeans />
					}
				})
				console.log(this.state.title)
				break;
			case 'For your pleasure':
				this.setState(({ title, imageSrc, info, about }) => {
					return {
						title: 'For your pleasure',
						imageSrc: pleasureBg,
						info: false,
						about: <AboutOurGoods />
					}
				})
				console.log(this.state.title)
				break;
			default:
				break;
		}
	}

	render() {
		const { title, imageSrc, info, about } = this.state;
		return (
			<div className="App" >
				<Header onMenuClick={this.onMenuClick} />
				<MainBanner title={title} imageSrc={imageSrc} info={info} />
				{about}
				<OurBest />
				<Footer />
			</div>
		);
	}
}

export default App;
