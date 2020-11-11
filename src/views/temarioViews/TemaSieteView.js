import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaSieteView extends Component {
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
                T<br/>
                <b>
                ENOJO
                </b><br />

                 
                  A
              </h2>
            </Col>
            <Col xs="8" md="10">
              <ul className="text-justify">
                <li>
                  El enojo es otro de los sentimientos básicos que nos permiten cuidarnos. Todos tenemos
                  derecho a enojarnos, y se vale enojarse. La pregunta es: ¿Cuánto tiempo te va a durar
                  el enojo? Este es un punto que tu eliges.
                </li>
                <li>
                  El enojo surge mayormente porque hay una falta de respeto con respecto a una situación
                  que nosotros creíamos que debía ser de otra manera. Acuérdate que la tristeza surge porque
                  hay una sensación de pérdida o de vacío. En cambio, el enojo surge porque hay una convicción
                  que hubo una falta de respeto. Una falta de respeto a tu tiempo, a tu espacio, a tus cosas,
                  a tu mundo.
                </li>
                <li>
                  ¿Qué hacer con tu enojo? Dos maneras de manejarlo. O aprendes y pones límites y le haces saber
                  al otro que eso no es lo que va contigo o bien revisa cuál es tu creencia de lo que significa
                  que el otro este sobrepasando tu mundo.
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSieteView
