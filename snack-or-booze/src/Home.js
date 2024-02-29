import React from "react";
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap";
import Menu from "./Menu";

function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle tag={"h3"} className={"font-weight-bold"}>
              Welcome to Silicon Valley's premier dive cafe!
            
          </CardTitle>
          <CardBody>

            <Container>
              <Row>
                <Col>
            <Menu items={snacks} prefix={'snacks'} title={'Snacks'}/>
                </Col>
                <Col>
            <Menu items={drinks} prefix={'drinks'} title={'Drinks'}/>
                </Col>
              </Row>
            </Container>
          </CardBody>

        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
