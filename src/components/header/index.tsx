"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "flowbite-react";
import Link from "next/link";

const Header = () => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		if (theme === "light") {
			document.body.classList.remove("dark");
		} else {
			document.body.classList.add("dark");
		}
	}, [theme]);

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};
	return (
		<header className="bg-white dark:bg-bodyBackground dark:text-white fixed top-0 left-0 w-full z-50  ">
			<Navbar
				fluid
				rounded
				className="bg-orange-100 dark:bg-navBackground container mx-auto p-4">
				<Navbar.Brand href="/">
					<span className="self-center whitespace-nowrap text-24 font-semibold dark:text-white">
						Where in the world?
					</span>
				</Navbar.Brand>
				<div className="flex md:order-2">
					<button className="bg-none border-none" onClick={toggleTheme}>
						{theme !== "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
					</button>
					<Navbar.Toggle />
				</div>
				<Navbar.Collapse>
					<Link href="/" className="active:text-activeColor">
						<Navbar.Link className="active:text-activeColor" as="span">
							Home
						</Navbar.Link>
					</Link>
					<Link href="/countries">
						<Navbar.Link className="active:text-activeColor" as="span">
							Countries
						</Navbar.Link>
					</Link>
					<Link href="/contacts">
						<Navbar.Link className="active:text-activeColor" as="span">
							Contact
						</Navbar.Link>
					</Link>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default Header;
