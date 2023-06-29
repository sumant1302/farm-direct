import React, { useEffect, useState } from "react";
import ImageSlider from "react-simple-image-slider";
import SimpleImageSlider from "react-simple-image-slider";
import { Link } from "react-router-dom";
import Product from "./Product";
import ProductsFilters from "./ProductsFilters";

const FeaturedProducts = (props) => {
	const { products, onAdd, onRemove, cartProducts } = props;
	const [addToCart, setAddToCart] = useState(false);
	const [productQuantity, setProductQuantity] = useState(0);
	// fetch('https://fakestoreapi.com/products')
	//     .then(res => res.json())
	//     .then(json => console.log(json));
	// const getProducts = async () => {
	// 	let result = await fetch("https://fakestoreapi.com/products");
	// 	result = await result.json();
	// 	setProducts(result);
	// };
	const getCartProducts = async () => {
		let result = await fetch("https://fakestoreapi.com/carts/5");
		result = await result.json();
	};
	const addProductsToCart = async () => {
		let result = await fetch("https://fakestoreapi.com/carts/5", {
			method: "POST",
			body: JSON.stringify({
				userId: 5,
				date: new Date(),
				products: [{ productId: 1 }],
			}),
		});
	};
	const handleAddToCart = () => {
        setAddToCart(true);
        setProductQuantity(1);
	};

	return (
		<div className="div-products">
			<div className="products-container">

			<div className="products-filters">
					<ProductsFilters />
				</div>
				<div className="products-view">
            {
                products.length > 0
					&& products.map((product) => (
						<Product
							item={cartProducts.find((x)=> x.id === product.id)}
							product={product} onAdd={onAdd} onRemove={onRemove} /> 
				  ))
					}
					</div>
				</div>
		</div>
	);
};

export default FeaturedProducts;
