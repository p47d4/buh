import React from "react";

import Staff from "./staff";
import Header from "../components/header";
import Footer from "../components/footer";

const staffList = () => {
const staffListItems = [
	{
	name: "Dr. Dogo Muhammed",
	position: "Chief Medical Officer",
	imgUrl:
		"assets/img/team/buhCMD.jpg",
	},
	{
	name: "Dr. Usman Gwaram",
	position: "Director of Clinical Services",
	imgUrl:
		"assets/img/team/buhCMAC.jpg",
	},
	{
	name: "Dr. Taofeek Uthman",
	position: "Director of Administration",
	imgUrl:
		"assets/img/team/buhDA.jpg",
	},
	{
	name: "Dr. Godae Donbaridam",
	position: "Gynecology and Obstetrics",
	imgUrl:
		"assets/img/team/buhGyn.jpg",
	},
	{
	name: "Dr. Zainab Mustapha Abubakar",
	position: "Chemical Pathologist",
	imgUrl:
		"assets/img/team/buhdrZainab.jpg",
	}
];

return (
	<>
		<Header />
		
		<section id="doctors" className="doctors">
			<div className="container">
				<div className="section-title">
					<h2>Doctors</h2>
				</div>
				<div className="row">

					{staffListItems.map((post, index) => (
						<Staff key={index} index={index} post={post} />
					))}
				</div>
            </div>
        </section>

		<Footer />
	</>
);
};

export default staffList;
