import Carousel from "react-bootstrap/Carousel";
import banner from "../assets/images/banner.jpg";
import "./Carusel.css"


function Carousell() {
	return (

        <div className="CaruselContenedor" 
      >
		<Carousel data-bs-theme=" caruselContainer">
			<Carousel.Item>
				<img className="d-block w-100" src={banner} alt="First slide" />
				<Carousel.Caption>
					<h2>Sumando servicios a tu vida</h2>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img
					className="d-block w-100"
					src={banner}
					alt="Second slide"
				/>
				<Carousel.Caption>
					<h2>Siempre del lado de la innovacion</h2>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img className="d-block w-100" src={banner} alt="Third slide" />
				<Carousel.Caption>
					<h2>Pensando en tus negocios</h2>
				</Carousel.Caption>
                
			</Carousel.Item>
		</Carousel>
        </div>
	);
}

export default Carousell;
