import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>MATEA</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>
                  IDENTIFICACIÓN
                </b>
              </h2>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="12">
              <p>
                El primer paso es identificar tus emociones básicas o primarias: miedo, afecto,
                tristeza, enojo y alegría, también conocidas como <b>MATEA</b>. Éstas se encuentran en
                nosotros para satisfacer las necesidades fundamentales de supervivencia, esto quiere
                decir que responden a estímulos de manera automática, actuando como un sistema de defensa.
              </p>
              <p>
                <b>
                  Estas emociones pueden ocasionar un desgaste físico y mental, e incluso pueden perjudicar
                  tu desarrollo profesional y sobre todo tu salud.
                </b>
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
