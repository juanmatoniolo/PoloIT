import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import imgVideo from "./assets/images/imgVideo.jpg";
import ImagenesExport from "./assets/images/Imagenes";
import CardTitle from "react-bootstrap/esm/CardTitle";
import CardBody from "react-bootstrap/esm/CardBody";
import CardText from "react-bootstrap/esm/CardText";
import "../index.css";
import Tooltips from "./Tooltip";
export default class Listar extends Component {
	state = {
		users: [],
	};

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
				<div
					className="container contenedorCards"
					style={{ marginTop: "2em", marginBottom: "2em" }}
				>
					{this.state.users.map((user) => (
						<Card
							key={user.id}
							id={user._id}
							className="col-11 col-sm-10 col-md-5 contenedorCard"
						>
							<CardTitle className="contenedorImagen">
								<img
									src={ImagenesExport[user.nombre]}
									alt=""
									style={{
										width: "8em",
										display: "block",
										marginLeft: "auto",
										marginRight: "auto",
									}}
								/>
							</CardTitle>
							<CardTitle>
								<img
									src={imgVideo}
									style={{
										display: "block",
										marginLeft: "auto",
										marginRight: "auto",
									}}
									alt=""
								/>
							</CardTitle>
							<CardBody>
								<CardText>
									Lorem ipsum dolor sit, amet consectetur
									adipisicing elit. Suscipit nam reprehenderit
									eum harum necessitatibus voluptatum nesciunt
									corporis modi officia doloribus facilis
									libero amet non veritatis blanditiis
									voluptate voluptas, deleniti placeat.
								</CardText>
								<div className="contenedorRedes">
									<div className="redesSociaes">
										{user.link_ig && (
											<a
												href={user.link_ig}
												rel="noreferrer"
												target="_blank"
												className="IconosContactos"
											>
												<img
													src={ImagenesExport.ig}
													className="IconosContactos"
													alt=""
												/>
											</a>
										)}

										{user.link_tw && (
											<a
												href={user.link_tw}
												rel="noreferrer"
												target="_blank"
												className="IconosContactos"
											>
												<img
													src={ImagenesExport.tw}
													className="IconosContactos"
													alt=""
												/>
											</a>
										)}

										{user.email && (
											<Tooltips
												title={user.email}
											></Tooltips>
										)}

										{user.link_linkedin && (
											<a
												href={user.link_linkedin}
												rel="noreferrer"
												target="_blank"
												className="IconosContactos"
											>
												<img
													src={ImagenesExport.link}
													className="IconosContactos"
													alt=""
												/>
											</a>
										)}
									</div>
									<a
										className="botonContactar"
										href={user.web}
										rel="noreferrer"
										target="_blank"
									>
										<button className="btn btn-primary botonContactar">
											Visitar web
										</button>
									</a>
								</div>
							</CardBody>
						</Card>
					))}
				</div>
			</>
		);
	}
}
