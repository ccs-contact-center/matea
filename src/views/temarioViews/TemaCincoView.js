import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaCincoView extends Component {
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
                <b>
                  AMOR
                </b><br />
                  T<br />
                  E<br />
                  A
              </h2>
            </Col>
            <Col xs="8" md="10">
              <ul className="text-justify">
                <li>
                  Se dice que la etapa de enamoramiento dura típicamente entre 4 a 6 meses y tiene cierta
                  generación de químicos. Después viene la etapa en donde lo novedoso deja de sorprender
                  tanto y en el amor hay una evaluación mas detallada de la funcionalidad de la relación.
                </li>
                <li>
                  El aumento de nivel cardiaco, y manos sudorosas se deben a la generación de dopamina que
                  se le conoce como la hormona del gozo o del placer.
                </li>
                <li>
                  También, cuando estamos enamorados disminuyen los niveles de serotonina, lo que disminuye
                  nuestra capacidad de realmente evaluar a otras personas y es el mismo fenómeno que se
                  encuentra en personas con desórdenes obsesivo compulsivo: esto quizás explica la frase
                  de “el amor es ciego” y nuestra tendencia a obsesionarnos. Así pues, ahí esta un poco de
                  la explicación química.
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCincoView
