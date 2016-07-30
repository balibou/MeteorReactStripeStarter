import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

export const Plan = ({ plan }) => (
  <ListGroupItem key={ plan._id } href="#">{ plan.name }</ListGroupItem>
);

Plan.propTypes = {
  plan: React.PropTypes.object.isRequired,
};
