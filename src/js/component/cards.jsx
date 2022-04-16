import React from "react";

const Cards = ({ img, title, text, buttonLink, buttonText }) => {
	return (
		<div className="col d-flex justify-content-center">
			<div className="card" style={{ width: "18rem" }}>
				<img src={img} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{text}</p>
					<a href={buttonLink} className="btn btn-primary">
						{buttonText}
					</a>
				</div>
			</div>
		</div>
	);
};
export default Cards;
