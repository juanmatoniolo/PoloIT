import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../index.css"

const FormularioDatos = () => {
	const [formData, setFormData] = useState({
		nombre: "",
		logo: "",
		direccion: "",
		localidad: "",
		email: "",
		mp4: "",
		web: "",
		link_ig: "",
		link_tw: "",
		link_linke: "",
		link_whats: "",
		rubro: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Aquí puedes hacer lo que necesites con los datos (p.ej., enviarlos a la base de datos)
		console.log(formData);

		// Limpia el formulario después de enviar
		setFormData({
			nombre: "",
			logo: "",
			direccion: "",
			localidad: "",
			email: "",
			mp4: "",
			web: "",
			link_ig: "",
			link_tw: "",
			link_linke: "",
			link_whats: "",
			rubro: "",
		});
	};

	return (
		<div className="container contenedorForm ">
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="formNombre" className="col-4">
					<Form.Label>Nombre</Form.Label>
					<Form.Control
						type="text"
						name="nombre"
						value={formData.nombre}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group controlId="formLogo" className="col-6">
					<Form.Label>Logo URL</Form.Label>
					<Form.Control
						type="text"
						name="logo"
						value={formData.logo}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group controlId="formDireccion">
					<Form.Label>Dirección</Form.Label>
					<Form.Control
						type="text"
						name="direccion"
						value={formData.direccion}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group controlId="formLocalidad">
					<Form.Label>Localidad</Form.Label>
					<Form.Control
						type="text"
						name="localidad"
						value={formData.localidad}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group controlId="formEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group controlId="formWeb">
					<Form.Label>Página Web</Form.Label>
					<Form.Control
						type="text"
						name="web"
						value={formData.web}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group controlId="formLinkIg">
					<Form.Label>Instagram</Form.Label>
					<Form.Control
						type="text"
						name="link_ig"
						value={formData.link_ig}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group controlId="formLinkTw">
					<Form.Label>Twitter</Form.Label>
					<Form.Control
						type="text"
						name="link_tw"
						value={formData.link_tw}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group controlId="formLinkLinke">
					<Form.Label>LinkedIn</Form.Label>
					<Form.Control
						type="text"
						name="link_linke"
						value={formData.link_linke}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group controlId="formRubro">
					<Form.Label>Rubro</Form.Label>
					<Form.Control
						type="text"
						name="rubro"
						value={formData.rubro}
						onChange={handleChange}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Guardar Datos
				</Button>
			</Form>
		</div>
	);
};

export default FormularioDatos;
