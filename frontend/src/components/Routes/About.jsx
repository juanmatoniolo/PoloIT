import React from "react";
import Footer from "../componentes/Footer";
import "../../index.css";
function About() {
	return (
		<>
			<div className="bodyPage">
				<div className="container">
					<h2 className="h2Contacts mt-4 ">
						Acerca de nuestro Sitio Web
					</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Veritatis blanditiis ex placeat, architecto
						praesentium vero iure beatae tempore dolorum veniam
						obcaecati accusantium iste, rerum alias perferendis ad,
						provident omnis labore! Iste atque, minus consequatur
						veniam provident cumque exercitationem temporibus earum
						harum. Nostrum mollitia iste quibusdam eligendi suscipit
						pariatur soluta, exercitationem, id libero aliquid autem
						eveniet! Fuga, eveniet obcaecati? Dicta, ipsum.{" "}
					</p>

					<h2> Nuestra Historia</h2>
					<p>
						Desde nuestros humildes comienzos, hemos estado a la
						vanguardia de la innovación tecnológica. Fundada en [año
						de fundación], nos hemos comprometido a impulsar la
						transformación digital y a proporcionar soluciones
						tecnológicas de vanguardia. A lo largo de los años,
						hemos crecido y evolucionado, pero nuestra pasión por la
						excelencia en tecnología sigue siendo la misma.
					</p>
					<h2>Nuestra Misión</h2>
					<p>
						En [nombre de la empresa], nuestra misión es trascender
						los límites de la tecnología para mejorar la vida de las
						personas y potenciar a las empresas. Nos esforzamos por
						ofrecer soluciones innovadoras y sostenibles que aborden
						los desafíos del mundo actual y del futuro. Creemos en
						el poder de la tecnología para transformar positivamente
						la sociedad.
					</p>

					<h2>Nuestro Compromiso con la Sostenibilidad</h2>
					<p>
						En [nombre de la empresa], reconocemos la importancia de
						la sostenibilidad en la era tecnológica. Nos
						comprometemos a desarrollar y ofrecer soluciones que no
						solo sean eficientes desde el punto de vista
						tecnológico, sino también respetuosas con el medio
						ambiente. Estamos dedicados a minimizar nuestro impacto
						y contribuir a un futuro más sostenible.
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default About;
