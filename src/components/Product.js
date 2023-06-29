import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(props) {
    const { product, onAdd, onRemove, item } = props;
  return (
    <div key={product.id} className="product-card">
    <div className="p-image">
        <img src={product.image} alt="product" />
    </div>
    <div className="p-card-info">
    <Link to = {`/viewProduct/${product.id}`}>
        <h3>{product.title}</h3>
            </Link>
        <span className="product-rating">
        <span style={{
            background: product.rating.rate > 3 ? 'green' : 'yellow',
            color: 'white',
        padding:'2px 8px', borderRadius: '4px'}}>🌟<b>{product.rating.rate}</b></span>({product.rating.count})
        </span>
        <p>{product.description}</p>
        <p className="prod-price">
            <b>&#x20B9;</b> {product.price}
        </p>
        {/* {addToCart && productQuantity > 0 ? (
            <div className="quantityButton">
                <button
                    onClick={() =>
                        productQuantity > 0 ? setProductQuantity(productQuantity - 1) : ""
                    }>
                    -
                </button>
                <input type="number" value={productQuantity} min={0} disabled />
                <button onClick={() => setProductQuantity(productQuantity + 1)}>+</button>
            </div>
        ) : ( */}
              {item ?
                  <div className="quantityButton">
                <button onClick={() =>onRemove(item)}>
                    -
                </button>
                  {/* <input type="number" value={productQuantity} min={0} disabled /> */}
                  <span className='p-1'>{ item.qty }</span>
                  <button onClick={() => onAdd(item)}>+</button>
                  </div>
                  :
                <button className="add-to-cart" onClick={()=>onAdd(product)}>
                Add to Cart
                </button>
            }
        {/* )} */}
    </div>
    </div>
  )
}
