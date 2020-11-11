import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import trece from '../../assets/img/m/trece.png'

class TemaTreceView extends Component {
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
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>
                  SEMÁFORO DE EMOCIONES

                </b>
              </h2>
            </Col>
            <Col xs="12">
              <p>
                Te presentamos el semáforo de emociones para que identifique a dónde podrían llevarte
                si no las manejas o controlas.
              </p>
            </Col>

            <Col xs="12" md="12" className="centrado-fila">
              <img
                src={trece}
                style={{ width: 650 }}
                alt="trece"
                className="img-fluid  animated  bounceInUp delay-1s"
              />
            </Col>

          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaTreceView
