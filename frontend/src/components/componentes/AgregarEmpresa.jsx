
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";


function AgregarEmpresa () {
    return(
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
                <Form.Control
                    placeholder="example@email.com"
                    id="formEmail"
                />
            </Form.Group>

            <Form.Group
                className="mb-3"
                controlId="formGridAddress2"
            >
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                    placeholder="Breve descripcion"
                    id="formDescripcion"
                />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group
                    className="d-grid  "
                    as={Col}
                    controlId="formGridCity"
                >
                    <Form.Label>Redes sociales</Form.Label>
                    <Form.Control
                        placeholder="Pag. Web Oficail"
                        className="m-1 col-sm-8 col-4"
                        id="formPag"
                    />
                    <Form.Control
                        placeholder="Instagram"
                        className="m-1 col-sm-8 col-4"
                        id="formIg"
                    />
                    <Form.Control
                        placeholder="Linkeding"
                        className="m-1 col-sm-8 col-4"
                        id="formLinkeding"
                    />
                    <Form.Control
                        placeholder="Twitter"
                        className="m-1 col-sm-8 col-4"
                        id="formTwitter"
                    />
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
    )
}



export default AgregarEmpresa