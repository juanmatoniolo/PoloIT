// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/componentes/Header";
import About from "./components/Routes/About";
import Home from "./components/Routes/Home";
import Contact from "./components/Routes/Contact";
/********************   COMPONNETES     ********************* */

import CreateCard from "./components/CreateCard";
import Listar from "./components/Listar";

/**************************************************************/
const App = () => {
	return (
		<Router>
			<Header />
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/create" element={<CreateCard />} />
					<Route path="/listar" element={<Listar />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
