"use client";

import { Card, Select } from "flowbite-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Countries = () => {
	const [data, setData] = useState([]);
	const [search, setSearch] = useState("");

	const fetchData = async () => {
		try {
			const res = await fetch("http://localhost:3000/data");
			const data = await res.json();
			setData(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	console.log(search);

	return (
		<div
			className=" bg-white dark:bg-bodyBackground dark:text-white container mx-auto p-4"
			style={{ paddingTop: "100px", height: "100%" }}>
			<div className="flex items-center justify-between flex-wrap gap-3">
				<input
					className="bg-white dark:bg-navBackground dark:text-white rounded-lg"
					type="search"
					placeholder="🔍 Search..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<Select name="regions" id="regions" className="w-25 text-14">
					<option value="Filter by region" className="text-18">
						Filter by region
					</option>
					<option value="Africa" className="text-18">
						Africa
					</option>
					<option value="Europe" className="text-18">
						Europe
					</option>
					<option value="America" className="text-18">
						America
					</option>
					<option value="Asia" className="text-18">
						Asia
					</option>
					<option value="Oceania" className="text-18">
						Oceania
					</option>
				</Select>
			</div>

			<div className="items-center justify-between py-5 flex-wrap gap-5 flex">
				{data
					.filter(
						(country) =>
							country.altSpellings[2] ||
							country.altSpellings[1] ||
							country.altSpellings[0]
								.toLowerCase()
								.includes(search.toLowerCase())
					)
					.map((country, i) => (
						<Link href={`/countries/${country.id}`} key={i}>
							<Card
								key={i}
								className="w-cardWidth h-cardHeight bg-orange-100 dark:bg-navBackground dark:text-white hover:shadow-2xl hover:transition-shadow hover:shadow-gray-950 cursor-pointer ">
								<img
									src={country.flags.png}
									alt={country.flags.alt}
									style={{ width: "267px", height: "160px" }}
								/>
								<h5 className="text-18 font-bold tracking-tight text-gray-900 dark:text-white">
									{country.altSpellings[2] ||
										country.altSpellings[1] ||
										country.altSpellings[0]}
								</h5>
								<p className="text-gray-700 text-14 dark:text-gray-400">
									<strong>Population:</strong> {country.population} <br />
									<strong>Region:</strong> {country.region} <br />
									<strong>Capital:</strong> {country.capital}
								</p>
							</Card>
						</Link>
					))}
			</div>
		</div>
	);
};

export default Countries;
