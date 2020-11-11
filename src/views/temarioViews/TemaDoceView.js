import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import doce from '../../assets/img/m/doce.png'

class TemaDoceView extends Component {
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
                  INTERPRETACIÓN
                </b>
              </h2>
            </Col>
           
            <Col xs="12" md="12" className="centrado-fila">
              <img
                src={doce}
                style={{ width: 650 }}
                alt="doce"
                className="img-fluid  animated  bounceInRight delay-2s"
              />
            </Col> 

          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDoceView
