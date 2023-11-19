import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
/***************************************************************************/
export default class Listar extends Component {
	state = {
		users: [],
	};

	//Creamos un metodo para capturar

	async componentDidMount() {
		try {
			const response = await axios.get("http://localhost:4000/api/notes");
			this.setState({ users: response.data });
			console.log(response.data);
		} catch (error) {
			console.error("Error al obtener datos:", error);
		}
	}

	render() {
		return (
			<>
				<div className="Container-fluid d-flex gap-3 justify-content-around" style={{'margin-top':"2em", 'margin-bottom':'2em'}}>
					{this.state.users.map((user) => (
						<Card
							key={user.id}
							style={{ width: "18rem" }}
							className={user._id}
							id={user._id}
						>
							<Card.Img
								variant="top"
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodownload.org%2Fwp-content%2Fuploads%2F2013%2F12%2Fapple-logo-1-1.png&f=1&nofb=1&ipt=77699186de5a99d4672e949504310dc5d5e6c013dd3ed01a5cef9d23d0d1302d&ipo=images"
								className="imgCards"
								style={{
									width: "4em",
									display:"block",
									marginLeft:"auto",
									marginRight:"auto"
									
								}}
							/>
							<Card.Body>
								<Card.Title>{user.nombre}</Card.Title>
								<Card.Text>{user.direccion}</Card.Text>
								<Button variant="primary">{user.email}</Button>
							</Card.Body>
						</Card>
					))}
				</div>
				{/** ---------------------------------------------------------------- **/}
				<div className="formularioEmpresas">
					<h3>Cargar nueva empresa: </h3>
					<Form className="col-sm-11 col-md-10 col-10 container-fluid">
						<Row className="mb-3">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Nombre</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter email"
									id="formNombre"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Localidad</Form.Label>
								<Form.Control
									type="text"
									placeholder="ej.: Rosario, Santa Fe"
									id="formLocalidad"
								/>
							</Form.Group>
						</Row>

						<Form.Group
							className="mb-3"
							controlId="formGridAddress1"
						>
							<Form.Label>Email</Form.Label>
							<Form.Control placeholder="example@email.com"id="formEmail" />
						</Form.Group>

						<Form.Group
							className="mb-3"
							controlId="formGridAddress2"
						>
							<Form.Label>Descripcion</Form.Label>
							<Form.Control placeholder="Breve descripcion" id="formDescripcion" />
						</Form.Group>

						<Row className="mb-3">
							<Form.Group className="d-grid  " as={Col} controlId="formGridCity">
								<Form.Label>Redes sociales</Form.Label>
								<Form.Control placeholder="Pag. Web Oficail" className="m-1 col-sm-8 col-4" id="formPag" />
								<Form.Control placeholder="Instagram"  className="m-1 col-sm-8 col-4" id="formIg"/>
								<Form.Control placeholder="Linkeding" className="m-1 col-sm-8 col-4" id="formLinkeding" />
								<Form.Control placeholder="Twitter" className="m-1 col-sm-8 col-4" id="formTwitter"/>

							</Form.Group>

							<Form.Group as={Col} controlId="formGridState">
								<Form.Label>State</Form.Label>
								<Form.Select defaultValue="Choose...">
									<option>Choose...</option>
									<option>...</option>
								</Form.Select>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridZip">
								<Form.Label>Zip</Form.Label>
								<Form.Control />
							</Form.Group>
						</Row>

						<Form.Group className="mb-3" id="formGridCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</div>
			</>
		);
	}
}
