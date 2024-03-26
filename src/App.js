import './App.css';
import Generate from './Components/Generate';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Solve from './Components/Solve';
import Home from './Components/Home';

function App() {
  return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/generate" element={<Generate />} />
				<Route path="/solve" element={<Solve />} />
			</Routes>
		</Router>
	);
}

export default App;
