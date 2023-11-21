import React from "react";
import Listar from "../Listar";
import Footer from "../componentes/Footer";
import "../../index.css";

function Home() {
	return (
		<>
			<div className="bodyPage">
				<Listar />
			</div>
			<Footer />
		</>
	);
}

export default Home;
