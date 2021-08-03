import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchProducts } from './products-action'
import ProductItem from './product-item-component'
import * as ActionCreators from './products-action'
class ProductsComponent extends Component {

  componentDidMount() {
    console.log('componentDidMount')
    const { isFetching } = this.props
    //will use: bind action to props
    console.log(isFetching)
    if (!isFetching) {
      dispatch(fetchProducts())
      // another way:
      //this.props.actions.fetchProducts();

    }

  }

  render() {
    console.log('hello diep')
    const { isFetching, products, actions } = this.props
    console.log(this.props)
    const totalProducts = products.length;
    return (
      <>
        {isFetching && totalProducts === 0 && <h2>Loading...</h2>}
        {!isFetching && totalProducts === 0 && <h2>Empty.sss</h2>}
        {products.map(x => (ProductItem(x, actions)))}
      </>
    );
  }
}


function mapStateToProps({ products }) {
  return {
    ...products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(ActionCreators, dispatch)
  }
}

// google: high order control
export default connect(mapStateToProps, mapDispatchToProps)(ProductsComponent)
