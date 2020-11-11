import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import swal from "sweetalert"
import AuthService from '../../services/AuthService'
import API_CCS from '../../services/API_CCS'
const API = new API_CCS()

class Actividad1View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(props) {
    super(props)
    this.Auth = new AuthService()
    this.state = {
      palabra: '',
      palabra2: '',
      palabra3: '',
      palabra4: '',
      palabra5: '',
      id_ccs: this.Auth.getProfile().id_ccs,
      form: 'matea-1',
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  async onSave(e) {
    try {
      var respuesta = await API.guardaActividad(this.state);

      swal({
        title: "Status Actividad",
        text: "Se guardo la actividad: 1, con id: " + respuesta[0].id,
        icon: "success",
        dangerMode: true,
        button: {
          text: "Aceptar",
          value: true,
          visible: true,
          className: "btn btn-primary",
          reset: true,
        },
      });

      // alert("Se guardo la actividad: 1, con id: " + respuesta[0].id);
    } catch (err) {
      swal({
        title: "Status Actividad",
        text: "No se guardo la actividad: 1, Intenta de nuevo. ",
        icon: "error",
        dangerMode: true,
        button: {
          text: "Cerrar",
          value: true,
          visible: true,
          className: "btn btn-primary ",
        },
      });
      console.log("loggea si hay un error");
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <CardHeader className="">
              <h2> Actividad </h2>
            </CardHeader>
            <CardBody className="">
              <Row className="centrado-fila">
                <Col xs="12">
                  <p>
                    Te invito a que escribas en una columna la palabra <b>MATEA</b> y que enumeres de la siguiente forma:
                  </p>
                  <ul>
                    <li>Con un <b>1</b> la emoción que sientes con más facilidad.</li>
                    <li>Con <b>5</b> aquella emoción que sientes con menos facilidad.</li>
                    <li>Con un <b>2</b> en aquella emoción que le sigue a la que sientes con mayor facilidad.</li>
                    <li>Con un <b>4</b> la emoción que sientes con menor facilidad.</li>
                    <li>El <b>3</b> ubícalo en la emoción que sobra.</li>
                  </ul>
                </Col>
               
              </Row>

              <Form>
                <div className="cajaA2" style={{ backgroundColor: '#d5d4d8' }}>
                  <FormGroup>
                    <Row>
                    <Col xs="4">
                      </Col>
                      <Col xs="4">
                        <Row>
                          <Col xs="12">
                            <Label for="palabra1">
                              <b>M </b> 
                        </Label>
                            <Input
                              type="text"
                              name="palabra1"
                              id="palabra1"
                              value={this.state.palabra1}
                              onChange={this.onChange.bind(this)}
                              placeholder="Ejemplo: 5."
                            />
                          </Col>
                          <Col xs="12">
                            <Label for="palabra2">
                              <b>A </b> 
                        </Label>
                            <Input
                              type="text"
                              name="palabra2"
                              id="palabra2"
                              value={this.state.palabra2}
                              onChange={this.onChange.bind(this)}
                              placeholder="Ejemplo: 1."
                            />
                          </Col>
                          <Col xs="12">
                            <Label for="palabra3">
                              <b>T </b> 
                        </Label>
                            <Input
                              type="text"
                              name="palabra3"
                              id="palabra3"
                              value={this.state.palabra3}
                              onChange={this.onChange.bind(this)}
                              placeholder="Ejemplo: 3."
                            />
                          </Col>
                          <Col xs="12">
                            <Label for="palabra4">
                              <b>E</b> 
                        </Label>
                            <Input
                              type="text"
                              name="palabra4"
                              id="palabra4"
                              value={this.state.palabra4}
                              onChange={this.onChange.bind(this)}
                              placeholder="Ejemplo: 2."
                            />
                          </Col>
                          <Col xs="12">
                            <Label for="palabra5">
                              <b>A</b> 
                        </Label>
                            <Input
                              type="text"
                              name="palabra5"
                              id="palabra5"
                              value={this.state.palabra5}
                              onChange={this.onChange.bind(this)}
                              placeholder="Ejemplo: 4."
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="4">
                      </Col>
                    </Row>

                  </FormGroup>
                </div>
                <div className="centrado-fila mt-3">
                  <Button color="primary" onClick={this.onSave.bind(this)}>
                    Enviar
                  </Button>
                </div>
              </Form>

              <div>{/* <p>{JSON.stringify(this.state)}</p> */}</div>
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Actividad1View
