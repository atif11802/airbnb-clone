import "./App.css";
import Home from "./Home"
import Header from "./Header"
import Footer from "./Footer"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from "./SearchPage.js"


function App() {
	return (
		<div className="app">
			<Router>

			<Header />
			<Switch>
				<Route exact path="/">
				<Home />
				</Route>

				<Route path="/search">
				<SearchPage />	
				</Route>
			
			
			</Switch>
			
			<Footer />
			</Router>
		</div>
	);
}

export default App;
