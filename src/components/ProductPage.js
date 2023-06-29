import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const ProductPage = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({});
    const [rate, setRate] = useState(0);
    const [rateCount, setRateCount] = useState(0);

	useEffect(() => {
		getProductDetails();
	}, []);

	const getProductDetails = async () => {
		let result = await fetch(`https://fakestoreapi.com/products/${params.id}`);
		result = await result.json();
        console.log(result);
        console.log(result.rating.rate);
        setProduct(result);
        setRate(result.rating.rate);
        setRateCount(result.rating.count);
	};
	return (
        <div className="div-view-product">
            <div className="go-back" style={{ height:'fit-content', margin:'5px', fontSize: '2rem', cursor:'pointer' }} onClick={()=>navigate(-1)} >
                🔙
            </div>
            <div className="product-image-view">
				<img className="productImage" src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
                <div className="prod-top">
				<h2>{product.title}</h2>
                <div>
					<p>
						<span className="product-rating">
							<span
								style={{
									background: rate > 3 ? "green" : "yellow",
									color: "white",
                                    padding: "2px 8px",
                                    margin: '2px',
									borderRadius: "4px",
								}}>
								🌟<b>{rate}</b>
                            </span>
                            <span>
							{"("+rateCount+")"}
                            </span>
						</span>
                    </p> 
				</div>
                </div>
				<div>
                    <p>{product.price}</p>
                    <p><b>Category</b>: {product.category}</p>
                    <p>{product.description}</p>
                </div>
                <div className="buttons-add-and-buy">
                    <button className="buy-now">Buy Now</button>
                    <button className="add-cart-product">Add To Cart</button>
                </div>
			</div>
		</div>
	);
};

export default ProductPage;
