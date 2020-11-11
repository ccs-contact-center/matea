import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaSeisView extends Component {
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
                <b>
                  TRISTEZA
                </b><br />

                  E<br />
                  A
              </h2>
            </Col>
            <Col xs="8" md="10">
              <ul className="text-justify">
                <li>
                  La tristeza es otro de los sentimientos básicos para trabajar. La tristeza surge porque
                  hay una sensación de pérdida. Piénsalo… Cada vez que tu contactas con la tristeza es
                  porque conectas con una pérdida, con una falta de algo. Y la tristeza tiene una función
                  muy importante: sirve para retraernos y reconsiderar las cosas, soltar y dejar ir.

                </li>
                <li>
                  Pero casi siempre lo que deseamos es que la tristeza se vaya y yo te digo que también
                  cumple su función para sanarnos.

                </li>
                <li>
                  Para que pase la tristeza hay que tocarla, sentirla y llorar todo lo necesario. Si evitamos
                  sentirnos tristes por hacernos “los fuertes” quizás esa tristeza salga con mas fuerza después.
                  Así que también, toca llorar de vez en cuando y hasta gozar de la tristeza. Solo así
                  reconoceremos de verdad la alegría.

                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSeisView
