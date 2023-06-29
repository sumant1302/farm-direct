import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
	const { countCartProducts } = props;
	const [searchValue, setSearchValue] = useState("");
	return (
		<div className="div-navbar">
			<Link to="/">
				<img className="nav-logo" src={process.env.PUBLIC_URL + '/images/farmdirect-logo.png'} alt="logo" />
				</Link>
			<ul className="navbar-ul">
				<li>
					<div className="delivery-address-home">
						<div style={{textAlign: "center",color:"black",fontSize:"0.8rem", alignItems: "center" }}>
							Deliver to <span class="material-symbols-outlined" style={{ fontSize:"inherit" }}>arrow_drop_down</span>
						</div>
						<p style={{ fontSize:"0.9rem" }}>Sumant Kumar, C714...</p>
					</div>
				</li>
				{/* Search Bar */}
				<li>
					<input
						className="search-input"
						type="text"
						value={searchValue}
						placeholder="Search for products, brands & more"
						// onChange={handleSearch}
					/>
				</li>
				<li>
				<Link to='/'>
					Home
					</Link>
				</li>
				<li>
				<Link to='/about'>
					About
					</Link>
				</li>
				<li><Link to='/products'>
					Products
					</Link>
				</li>
				<li><Link to='/login'>
					Login
					</Link>
				</li>
				<li><Link className="nav-cart" to='/cart'>
					<span class="material-symbols-outlined">shopping_cart</span>
					{countCartProducts ?
						<h6 className="badge">{countCartProducts}</h6>
						: ''
					}
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
