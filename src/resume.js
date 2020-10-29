import React from 'react';
import data from './data.json';
import ImgProfileVk1 from './ImgProfileVk1.jpg';

function Resume(props){

	let profile=data.details[props.location.personcard.id];
	console.log(profile);
	let images=[ImgProfileVk1];
	return(


		<div class="bg-secondary" color="red">
		<div class="text-center text-primary" id="heading"><h1>{profile.card.resume}</h1></div>
		<div class="card-deck border-primary">
			<div class="card border-danger p-5 m-0 col-md-4">
			<div class="text-center">
			<img src={images} width="60%"alt="image"/>
			<p>Profile</p>
			</div>
			<hr/>
			<h5>Name:-{profile.card.name}</h5>
			<hr/>
			<h5>RollNo:-{profile.card.rollno}</h5>
			<hr/>
			<h5>Email:-{profile.card.email}</h5>
			<hr/>
			<h5>Mobile:-{profile.card.mobile}</h5>
			<hr/>
			<h5>Address:-{profile.card.address}</h5>
			<hr/>
			</div>
			<div class="card border-danger p-5 m-0 col-md-8">
			<h4>Objective</h4>
			<p>{profile.card.careerobjective}</p>
			<hr/>
			<h4>Educational Qualification</h4>
			<table border="1">
			<tr>
			<td>{profile.card.institute1}</td>
			<td>{profile.card.degree1}</td>
			<td>{profile.card.passoutyear1}</td>
			<td>{profile.card.percentage1}</td>
			</tr>
			<tr>
			<td>{profile.card.institute2}</td>
			<td>{profile.card.degree2}</td>
			<td>{profile.card.passoutyear2}</td>
			<td>{profile.card.percentage2}</td>
			</tr>
			<tr>
			<td>{profile.card.institute3}</td>
			<td>{profile.card.degree3}</td>
			<td>{profile.card.passoutyear3}</td>
			<td>{profile.card.percentage3}</td>
			</tr>
			</table>
			<hr/>
			<h4>Technical Skills</h4>
			<h6>Programming Languages</h6>
			<ol>
			<li>{profile.card.Programminglanguages[0]}</li>
			<li>{profile.card.Programminglanguages[1]}</li>
			<li>{profile.card.Programminglanguages[2]}</li>
			<li>{profile.card.Programminglanguages[3]}</li>
			</ol>
			<h6>Technologies</h6>
			<ol>
			<li>{profile.card.Technologies[0]}</li>
			<li>{profile.card.Technologies[1]}</li>
			<li>{profile.card.Technologies[2]}</li>
			<li>{profile.card.Technologies[3]}</li>
			</ol>
			<hr/>
			<h4>Declaration</h4>
			<p>{profile.card.declaration}</p>
			</div>
			</div>
		</div>
	)


}

export default Resume;