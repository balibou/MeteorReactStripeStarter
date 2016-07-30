import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Plan } from './plan.js';

export const PlansList = ({ plans }) => (
  plans.length > 0 ? <ListGroup className="plans-list">
    {plans.map((plan) => (
      <Plan key={ plan._id } plan={ plan } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No plans yet.</Alert>
);

PlansList.propTypes = {
  plans: React.PropTypes.array,
};
