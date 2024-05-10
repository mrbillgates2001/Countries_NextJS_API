"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const CountryDetails = ({
	params,
}: {
	params: {
		id: string;
	};
}) => {
	const [countryData, setCountryData] = useState([]);
	const { id } = params;

	const countryDataFetcher = async () => {
		try {
			const res = await fetch(`http://localhost:3000/data/${id}`);
			const data = await res.json();
			setCountryData(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		countryDataFetcher();
	}, []);

	console.log(countryData);

	const flagUrl = countryData.flags.png;

	return (
		<div
			className="bg-white dark:bg-bodyBackground dark:text-white container mx-auto p-4 h-screen"
			style={{ paddingTop: "110px", height: "100vw" }}>
			<div>
				<Link
					className="dark:bg-slate-600"
					href="/countries"
					style={{
						borderColor: "#000000",
						border: "1px solid #000000",
						borderRadius: "12px",
						padding: "3px 20px",
					}}>
					⬅️ Back
				</Link>
			</div>

			<div className="flex gap-10 py-3 flex-wrap">
				<div>
					<img
						src={flagUrl}
						alt=""
						style={{
							width: "600px",
						}}
					/>
				</div>
				<div className="flex flex-col justify-center">
					<h1 className="text-lg font-extrabold text-24">
						{countryData.altSpellings}
					</h1>
					<p className="text-14">Native Name: {} </p>
					<div className="flex gap-10">
						<div>
							<p className="text-14">Population: 11,319,511</p>
							<p className="text-14">Region: Europe</p>
							<p className="text-14">Sub Region: Western Europe</p>
						</div>
						<div>
							<p className="text-14">Top Level Domain: .be</p>
							<p className="text-14">Currencies: Euro</p>
							<p className="text-14">Languages: Dutch, French, German</p>
						</div>
					</div>
					<p className="text-14">Capital: Brussels Belgium</p>
					<p className="text-14">
						Border Countries: France Germany Netherlands
					</p>
				</div>
			</div>
		</div>
	);
};

export default CountryDetails;
