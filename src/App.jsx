import './App.scss';
import './fonts.scss'
import Header from './components/header/header';
import MainBanner from './components/main-banner/main-banner';
import AboutUs from './components/about-us/about-us';
import OurBest from './components/our-best/our-best';
import Footer from './components/footer/footer';

function App() {
	return (
		<div className="App">
			<Header />
			<MainBanner />
			<AboutUs />
			<OurBest />
			<Footer />
		</div>
	);
}

export default App;
