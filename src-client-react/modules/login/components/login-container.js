import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Container, Row, Col, Form } from 'react-bootstrap';

import { createWrapActions } from '../actions'

class LoginComponent extends Component {

  render() {
    const { loginForm: { email, loginType }, isRequesting, actions, userIdentity } = this.props

    const user = userIdentity.staffInfo || userIdentity.customerInfo;

    const renderAuthenticatedView = () => <div>
      <Row>
        <Col sm={12}>
          Welcome {user.first_name},
      </Col>
      </Row>
      <Row>
        <Col sm={12}>
          Now, you able to use the web resource with your identity
      </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Button onClick={() => actions.doLogout()}>Logout</Button>
      </Col>
      </Row>
    </div>

    const renderLoginForm = () => <Row>
      <Col sm={6}>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com"
              value={email} onChange={(x) => actions.updateValue({ keys: ['loginForm', 'email'], value: x.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Login As</Form.Label>
            <Form.Control as="select">
              <option>Customer</option>
              <option>Staff</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Button onClick={() => actions.doLogin()}>Login Now</Button>
      </Col>
    </Row>

    return (
      <Container>
        {userIdentity.authenticated ? renderAuthenticatedView() : renderLoginForm()}
      </Container>
    );
  }
}

function mapStateToProps({ loginInfo }) {
  return loginInfo
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(createWrapActions(), dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
