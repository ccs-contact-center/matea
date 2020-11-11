import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaOchoView extends Component {
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
            <Col xs="4" md="2">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                M <br />
                A<br />
                T<br />
                E<br />
                <b>
                  ALEGRÍA
                </b>
              </h2>
            </Col>
            <Col xs="8" md="10">
              <ul className="text-justify">
                <li>
                  La alegría es algo que puedes construir y provocar, la puedes generar con tu conducta.
                  La felicidad, en cambio, es una consecuencia de tus actos, es decir, que cuando cumples
                  con tus promesas y tus sueños, la sensación es de felicidad.
                </li>
                <li>
                  Gozar del gozo de alguien mas es una fuente enorme de alegría. Estadísticamente, la gente que
                  está en grupos, en asociaciones o que simplemente comparte con alguien vive más años.
                </li>
                <li>
                  Por último: ríe. Y vuelve a reír. La risa es contagiosa, y en los grupos de risoterapia
                  (terapia de la risa) en un principio la gente se ríe de modo forzado para provocar la risa,
                  pero llega un momento que nuestro cerebro que no distingue si es falso o no y de pronto la
                  persona se arranca a reír de verdad.
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaOchoView
