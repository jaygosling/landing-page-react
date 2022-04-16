import React from "react";

import Cards from "./cards.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="container-fluid row d-flex my-5 justify-content-between">
				<Cards
					img="https://dummyimage.com/400x325/a1a1a1/787878.png"
					title="Card Title"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					buttonText="Find Out More!"
				/>
				<Cards
					img="https://dummyimage.com/400x325/a1a1a1/787878.png"
					title="Card Title"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					buttonText="Find Out More!"
				/>
				<Cards
					img="https://dummyimage.com/400x325/a1a1a1/787878.png"
					title="Card Title"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					buttonText="Find Out More!"
				/>
				<Cards
					img="https://dummyimage.com/400x325/a1a1a1/787878.png"
					title="Card Title"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					buttonText="Find Out More!"
				/>
			</div>
			<Footer />
		</div>
	);
};

const Footer = () => {
	return (
		<footer class="py-3 mt-4 bg-secondary ">
			<p class="text-center copyright">&copy; 2021 Company, Inc</p>
		</footer>
	);
};

const Jumbotron = () => {
	return (
		<div class="container py-5 mt-5">
			<div class="p-5 mb-4 bg-light rounded-3">
				<div class="container-fluid py-5">
					<h1 class="display-5 fw-bold">Custom jumbotron</h1>
					<p class="col-md-8 fs-4">
						Using a series of utilities, you can create this
						jumbotron, just like the one in previous versions of
						Bootstrap. Check out the examples below for how you can
						remix and restyle it to your liking.
					</p>
					<button class="btn btn-primary btn-lg" type="button">
						Example button
					</button>
				</div>
			</div>
		</div>
	);
};

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-secondary">
			<div className="container-fluid d-flex justify-content-between">
				<div className="container">
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarCollapse"
						aria-controls="navbarCollapse"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<ul className="navbar-nav mx-auto mb-2 mb-md-0">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Home;
