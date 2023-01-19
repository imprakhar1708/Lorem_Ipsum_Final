import React from "react";
import "./Footer.css";
import logo from "./FARM TO TABLE.png";

const Footer = () => {
	return (
		<footer>
			<div class='container-footer'>
				<div className='logo-container'>
					<img class='img-footer' src={logo} alt='logo' />
				</div>
				<div className='column-container'>
					<div class='column Company'>
						<h3>Company</h3>
						<ul>
							<li>
								<a href=''>Home</a>
							</li>
							<li>
								<a href=''>About</a>
							</li>
							<li>
								<a href=''>FAQs</a>
							</li>
							<li>
								<a href=''>Services</a>
							</li>
							<li>
								<a href=''>Stories</a>
							</li>
						</ul>
					</div>
					<div class='column Company'>
						<h3>Explore</h3>
						<ul>
							<li>
								<a href=''>Food</a>
							</li>
							<li>
								<a href=''>Drinks</a>
							</li>
							<li>
								<a href=''>Pizza</a>
							</li>
							<li>
								<a href=''>Dessert</a>
							</li>
						</ul>
					</div>
					<div class='column Company'>
						<h3>Links</h3>
						<ul>
							<li>
								<a href=''>Best Foods</a>
							</li>
							<li>
								<a href=''>Best Drinks</a>
							</li>
							<li>
								<a href=''>Features</a>
							</li>
						</ul>
					</div>
					<div class='column Company'>
						<h3>Terms</h3>
						<ul>
							<li>
								<a href=''>Privacy Policy</a>
							</li>
							<li>
								<a href=''>Terms</a>
							</li>
							<li>
								<a href=''>Payments</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class='icons'>
				<div class='para1'>
					<p>©Copyright 2023 Farm to Table</p>
				</div>
				<div class='social'>
					<i class='fa-brands icon fa-twitter footer-icons'></i>
					<i class='fa-brands icon fa-facebook footer-icons'></i>
					<i class='fa-brands icon fa-instagram footer-icons'></i>
					<i class='fa-solid icon fa-envelope footer-icons'></i>
				</div>
				<div class='address'>
					<p>VR Mall, Surat</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
