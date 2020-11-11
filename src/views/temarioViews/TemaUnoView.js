import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import ReactPlayer from 'react-player'
import video1 from '../../assets/img/m/video1.mp4'

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
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
                   Antes miremos un video…
                </b>
              </h2>
            </Col>
            <Col xs="12" className="centrado-fila">
              <div className="cajaRoja">
              <ReactPlayer url={video1} controls={true} playing  style={{marginBottom:"10px"}} />
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
