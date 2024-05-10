import React from "react";

const Contacts = () => {
	return (
		<div
			className="container mx-auto p-4  bg-white dark:bg-bodyBackground dark:text-white h-screen"
			style={{ paddingTop: "100px", height: "100vw" }}>
			<h1 className="font-extrabold">Contacts</h1>
			<p className="text-18">Email: name@gmail.com</p>
			<p className="text-18">Tel: +1 789 654 123</p>
			<p className="text-18">Address: 1st Avenue, Central Park, NY USA 18961</p>
		</div>
	);
};

export default Contacts;
