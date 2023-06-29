import React from 'react'

export default function Cart(props) {
    const { cartProducts, onAdd, onRemove } = props;
    const itemsPrice = cartProducts.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
      <div className='cart-container'>
          <h1>Cart</h1>
          <div>
              {cartProducts.length === 0 && 
                  <div>
                      <p style={{ fontSize: '10rem'}}>😒</p>
                    <h3>Cart is Empty</h3>   
                  </div>
              }
              {cartProducts.length !== 0 &&
                  <div className='cart-items-header cart-product-row'>
                  <div style={{ width: '60%' }}>Product</div>
                  <div style={{ width: '20%' }}>Price</div>
                  <div>Quantity</div>
              </div> &&
                  cartProducts.map((item) => (
                      <div key={item.id} className='cart-product-row'>
                          <div style={{ width: '60%' }}>{item.title}</div>
                          <div style={{ width: '20%' }}> ${item.price.toFixed(2)}</div>
                          <div style={{ width: '20%' }}>
                              <button onClick={() => onRemove(item)} className='add'>-</button>
                              <input style={{ width: '40px', textAlign: 'center' }}value = {item.qty} />
                              <button style={{ background: '#14ea14' }} onClick={()=>onAdd(item)} className='add'>+</button>
                          </div>
                      </div>
                  ))
              }
              {cartProducts.length !== 0 && (
                  <>
                      <hr />
                      <div style={{ fontWeight: 'bold' }}>Price Breakup</div>
                      <div className='calculated-row'>
                          <div>Items Price </div>
                          <div>${itemsPrice.toFixed(2)}</div>
                      </div>
                      <div className='calculated-row'>
                          <div >Tax Price </div>
                          <div>${taxPrice.toFixed(2)}</div>
                      </div>
                      <div className='calculated-row'>
                          <div>Shipping Price </div>
                          <div>${shippingPrice.toFixed(2)}</div>
                      </div>
                      <hr />
                      <div className='calculated-row'>
                          <div>Total Price </div>
                          <div style={{ fontWeight: 'bold' }}>${totalPrice.toFixed(2)}</div>
                      </div>
                      <hr />
                      <div>
                          <button onClick={()=>alert('inplement checkout')}>Checkout</button>
                      </div>
                  </>
              )}
          </div>
    </div>
  )
}
