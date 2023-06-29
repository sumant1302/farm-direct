import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, HashRouter, BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Home from "./components/Home";
import Form from "./components/Form";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";

function App() {
	const [products, setProducts] = useState([]);
	const [cartProducts, setCartProducts] = useState([]);
	useEffect(() => {
		getProducts();
	}, []);
	const getProducts = async () => {
		let result = await fetch("https://fakestoreapi.com/products");
		result = await result.json();
		setProducts(result);
	};

	const onAdd = (product) => {
		const exist = cartProducts.find((x) => x.id === product.id);
		if (exist) {
			const newCartProducts = cartProducts.map((x) =>
				x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x);
			setCartProducts(newCartProducts);
		} else {
			const newCartProducts = [...cartProducts, { ...product, qty: 1 }];
			setCartProducts(newCartProducts);
		}
		console.log(cartProducts);
	};

	const onRemove = (product) => {
		const exist = cartProducts.find((x) => x.id === product.id);
		if (exist.qty === 1) {
			const newCartProducts = cartProducts.filter((x) => x.id !== product.id);
			setCartProducts(newCartProducts);
		} else {
			const newCartProducts = cartProducts.map((x) =>
				x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x);
			setCartProducts(newCartProducts);
		}
	};

	return (
		<div className="App">
			<BrowserRouter>
				<Nav countCartProducts={cartProducts.length} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route
						path="/products"
						element={<FeaturedProducts cartProducts={cartProducts} onAdd={onAdd} onRemove={onRemove} products={products} />}
					/>
					<Route path="/productPage" element={<ProductPage onAdd={onAdd} />} />
					<Route path="/viewProduct/:id" element={<ProductPage onAdd={onAdd} />}></Route>
					<Route path="/cart" element={<Cart onAdd={onAdd} onRemove={onRemove} cartProducts={cartProducts} />} />
					<Route path="/form" element={<Form />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
