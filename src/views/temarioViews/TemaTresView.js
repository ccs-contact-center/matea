import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

class TemaTresView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>MATEA</h3>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>
                  ACCIONA
                </b>
              </h2>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="12">
              <p>
                Friedrich Nietzche decía que “<i>los pensamientos vienen cuando ellos quieren y no cuando
                nosotros desearíamos</i>”. Del mismo modo, las emociones no aparecen y desaparecen cuando lo
                decides, sin embargo, puedes decidir cómo te afectan y qué es lo que harás al respecto.<br />
                Una vez que te haces consciente de la emoción, puedes decidir cuánto te dura, si te afecta
                y qué es lo que harás después. Es decir, si te clavan una flecha en el pecho y te haces
                consciente del dolor, tú decides si te sacas la flecha y dejas de sufrir o si la dejas ahí.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaTresView
