import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.png";
import banner from "../assets/images/banner.jpg";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="contenedor">
			<Navbar expand="sm" className="bg-body-tertiary navContainer">
				<Container
					fluid
					className="navContainerSub"
					style={{ width: "100%" }}
				>
					<Navbar.Brand className="logoNav ">
						<img src={logo} alt="" />
					</Navbar.Brand>
					{/** Hamburguesa **/}
					<Navbar.Toggle aria-controls="navbarScroll" className="" />
					<Navbar.Collapse
						className="bg-ligth fondo"
						id="navbarScroll"
					>
						<Nav
							className="navBurger"
							style={{ maxHeight: "10em" }}
							navbarScroll
						>
							<Nav.Link>
								{" "}
								<Link to="/" className="AHref">
									Home
								</Link>
							</Nav.Link>
							<Nav.Link>
								{" "}
								<Link to="./About" className="AHref">
									About{" "}
								</Link>
							</Nav.Link>

							<Nav.Link>
								<Link to="/contact" className="AHref">
									contact
								</Link>
							</Nav.Link>
						</Nav>
						<Form className="d-flex ">
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2 buscar"
								aria-label="Search"
							/>
							<Button className=" buscarBtn ">Filtrar</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<header className="headerContenedor">
				<img src={banner} className="imgHeader " alt="" />
			</header>


		</div>
	);
}

export default Header;
