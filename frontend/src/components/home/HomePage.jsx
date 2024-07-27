import Valley from "./Valley";
import "./HomePage.css";

const Home = () => {
	return (
		<div className="HomePageMain">
			<div className="welcome-text">
				<p className="text-component">Hello! My name is&nbsp;
				<a className="text-component" href="mailto: shivam2003.singh@gmail.com" title="Email Me!">Shivam</a>&nbsp;and this is my website.</p>
			</div>
			<Valley className="ValleySketch" />
		</div>
	)
}

export default Home;
