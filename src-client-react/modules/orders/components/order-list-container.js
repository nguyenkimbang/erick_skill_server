import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Link
} from "react-router-dom";
import { Button, Container, Row, Col, Table } from 'react-bootstrap';

import { createWrapActions } from '../actions'

class OrderListComponent extends Component {

  componentDidMount() {
    console.log('componentDidMount')
    const { isUserOrderListFetched, actions } = this.props
    //will use: bind action to props
    console.log(isUserOrderListFetched)
    if (!isUserOrderListFetched) {
      // use client param here to load
      actions.fetchMyOrderList();
    }
  }

  render() {
    const { orderDetail, showLoadingIndicator, userOrders, searchMoreProductViewModel } = this.props

    return <Container>

      <Row><Col sm={12}>Hello</Col></Row>

      <Row><Col sm={12}>You have {userOrders.length} order(s)</Col></Row>

      {userOrders.map((x, index) => (<Row key={index}><Col>

        <Link
          to={{
            pathname: "/orders/" + x.order_id,
            search: "?sort=name",
            hash: "#the-hash"
          }}>
          OrderId: {x.order_id}
        </Link>
      </Col></Row>))}
    </Container>
  }
}

function mapStateToProps({ orders }) {
  return orders
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(createWrapActions(), dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderListComponent)
