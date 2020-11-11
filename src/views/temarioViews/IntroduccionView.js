import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";



class IntroduccionView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Objetivo</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12" sm="8" md="9" lg="9">
              <div className="cajaRoja">
                <p className=" text-justify">
                  Las emociones influyen en tu estado de ánimo, en la motivación e incluso tu
                  carácter y conducta, además provocan reacciones fisiológicas por estar relacionadas
                  con hormonas como el cortisol, la noradrenalina y con neurotransmisores como la dopamina
                  y la serotonina, que alteran el apetito, el sueño y la capacidad de concentración.
               </p>
                <p className="text-justify">
                  Pero, ¿cómo lograr un mejor manejo de tus emociones? Saskia de Winter Training te recomienda:
               </p>
                <h3>
                  Identifica tus emociones<br />
                  ¡Comenzamos!
               </h3>
              </div>

            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default IntroduccionView;
