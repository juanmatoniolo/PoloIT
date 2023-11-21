import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ImagenesExport from "./assets/images/Imagenes";

const Tooltips = ({ title }) => {
	const popover = <Tooltip id="popover-basic">{title}</Tooltip>;

	return (
		<OverlayTrigger trigger="click" placement="right" overlay={popover}>
			<img
				src={ImagenesExport.email} // Ajusta la ruta según tu estructura de archivos
				className="IconosContactos"
				alt=""
			/>
		</OverlayTrigger>
	);
};

export default Tooltips;
