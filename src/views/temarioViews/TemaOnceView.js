import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
// import nueve from '../../assets/img/m/nueve.png'
//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaOnceView extends Component {
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
            <Col xs="12">
              <div className="cajaRoja text-justify">
                <p>
                  La idea es que haciendo la MATEA te podrás hacer consciente de las emociones y temas a trabajar.
                  Dado que son las emociones que con mas dificultad contactamos, es importante revisar los
                  temas para poder acercarse a esas emociones. Haz el ejercicio y te va a servir la tabla de
                 los temas para resolver algunas cosas mas en tu vida.<br />
                Generalmente las emociones 1 y 2 son tan fuertes que logran tapar las emociones 4 y 5. Y así, si
                los números son 4 y 5 se puede interpretar de la siguiente manera:

              </p>
              </div>
            </Col>
            {/* <Col xs="12" md="12" className="centrado-fila">
              <img
                src={nueve}
                style={{ width: 600 }}
                alt="nueve"
                className="img-fluid  animated  bounceInRight delay-2s"
              />
            </Col> */}

          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaOnceView
