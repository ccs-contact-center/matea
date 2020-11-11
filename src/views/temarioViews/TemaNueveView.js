import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import nueve from '../../assets/img/m/nueve.png'
//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaNueveView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> MATEA</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
          <Col xs="12">
              <p>
                Te presentamos la siguiente tabla como guía para que identifiques la función de cada una
                de las emociones principales, así como el manejo virtuoso (lo que podemos disfrutar) y el
                majo patológico (lo que nos puede generar un mal) y logremos controlar nuestras emociones.
              </p>
            </Col>
            <Col xs="12" md="12" className="centrado-fila">
            <img
                src={nueve}
                 style={{ width: 600 }}
                alt="nueve"
                className="img-fluid  animated  bounceInRight delay-2s"
              />
            </Col>
           
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaNueveView
