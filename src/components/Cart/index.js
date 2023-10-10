import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      const onClickRemoveAll = () => {
        removeAllCartItems()
      }
      let totalPrice = 0
      cartList.forEach(eachCart => {
        totalPrice += eachCart.price * eachCart.quantity
      })

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  className="remove-all-btn"
                  type="button"
                  onClick={onClickRemoveAll}
                >
                  Remove All
                </button>
                <CartListView />
                <div className="total-price-display-container">
                  <div className="total-container">
                    <h1 className="order-head">Order Total: </h1>
                    <h1 className="price-head">{`Rs ${totalPrice}/-`}</h1>
                  </div>
                  <p className="para-items">{cartList.length} items in cart</p>
                  <button className="check-out-btn" type="button">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
