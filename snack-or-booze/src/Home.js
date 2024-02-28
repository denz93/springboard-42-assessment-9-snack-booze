import React from "react";
import { Card, CardBlock, CardBody, CardTitle, Col, Container, Row } from "reactstrap";
import Menu from "./Menu";

function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <CardBlock>

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
          </CardBlock>

        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
