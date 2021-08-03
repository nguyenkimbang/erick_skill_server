import React from 'react'

import { Button, Row, Col, Table, Form } from 'react-bootstrap';

const SearchAndOrderMoreProduct = ({ order_id, searchText, products, actions }) => {

  const renderSearch = () => (<Form>
    <Form.Group controlId="formBasicSearchValue">
      <Form.Label>Enter product name:</Form.Label>
      <Form.Control type="text" value={searchText} onChange={(x) => actions.updateValue({ keys: ['searchMoreProductViewModel', 'searchText'], value: x.target.value })} />
      <Form.Text className="text-muted">
        Limited by 5 items.
      </Form.Text>
    </Form.Group>

    <Button variant="primary" onClick={() => actions.searchMoreProduct({ product_name: searchText })}>
      Find More Products
    </Button>
  </Form>);

const renderTable = () =>
  <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Model Year</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((x, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{x.product_name}</td>
            <td>${x.list_price}</td>
            <td>{x.model_year}</td>
            <td><Button size="sm" onClick={() => actions.requestBuyMore({
              product_id: x.product_id,
              order_id
            })}>Buy 1 More</Button></td>
          </tr>))
        }
      </tbody>
    </Table>

  return (<div>
    <Row>
      <Col sm={12}>
        {renderSearch()}
      </Col>
    </Row>

    {products.length > 0 ? renderTable() : 'No item found'}
    
  </div>)
}

export default SearchAndOrderMoreProduct;
