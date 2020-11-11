import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaCuatroView extends Component {
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
                <b>
                  MIEDO
                </b><br />
                  A<br />
                  T<br />
                  E<br />
                  A
              </h2>
            </Col>
            <Col xs="8" md="10">
              <ul className="text-justify">
                <li>
                  El miedo es una de las grandes fuerzas que mueven al mundo. De hecho, parece que solo hay dos,
                  desde el punto de vista emocional: el amor y el miedo. El miedo es la base de aquellas creencias
                  que nos llevan a “perder” en la vida.

                </li>
                <li>
                  El miedo es una emoción que nunca se va. Así es. Lo siento si no lo sabías, pero tu miedo nunca se
                  va a ir. Es un mecanismo de defensa: qué bueno que a veces sentimos miedo, esto es para protegernos
                  y reaccionar a tiempo. El tema es cuando como seres humanos sentimos miedo y nos provoca no avanzar.

                </li>
                <li>
                  Para trabajar el miedo es estar consciente de que, al final, como es un mecanismo de defensa, el
                  miedo nunca se va a ir. Y entonces ¿qué hacer con el miedo si nunca se va a ir? Pues la idea es
                  atreverse a pesar del miedo. Es decir, no poner mayor atención al miedo, y en realidad enfocarse
                  en el sueño, en la meta, y no en el obstáculo o la complicación.

                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCuatroView
