import React from 'react';
import data from './data.json';
import logo from './logo.svg';
import ImgProfileVk1 from './ImgProfileVk1.jpg';
import { Link } from 'react-router-dom';
let Cards=()=>{
	let cardsData = data.details;
	console.log(cardsData);
	let images=[ImgProfileVk1,ImgProfileVk1];
	return(
			<div class="m-2 p-4">
			<h1 className="text-warning text-center">RESUME CARDS</h1>
			<div className="row text-center">
			{cardsData.map((values,index)=>(
				
				<div className="col" key={index}>
				<div className="card">
				<div class="text-center">
				<img src={images[index]} width="60%" alt="img"/>
				</div>
				<h1>{values.card.name}</h1>
				<p>{values.card.rollno}</p>
				<p>{values.card.mobile}</p>
				<a href={"mailto:"+values.card.email}>
				<p>{values.card.email}</p>
				</a>
				<Link to={{pathname:"/resume",personcard:{id:index}}} className="btn-success btn-large">{values.card.resume}</Link>
				
				</div>
				</div>
				
				))
			}
			</div>
			</div>
			
		);
}

export default Cards;