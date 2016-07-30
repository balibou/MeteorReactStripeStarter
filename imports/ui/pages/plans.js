import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PlansList from '../containers/plans-list.js';

export const Plans = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Plans</h4>
      <PlansList />
    </Col>
  </Row>
);
