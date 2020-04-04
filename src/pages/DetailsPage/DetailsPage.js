import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

export class DetailsPage extends Component {

  render() {
    const { user } = this.props.location.state;

    return (
      <Container fluid className="d-flex align-items-center justify-content-center" >
          <div className="col-lg-4 col-md-6 mb-4 align-center mt-5">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">
                  {user.name}
                </h4>
                <h5>Salary: {user.salary}</h5>
                <h5>Email: {user.email}</h5>
              </div>
            </div>
          </div>
      </Container>
    )
  }
}
