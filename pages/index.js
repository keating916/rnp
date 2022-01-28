import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import styles from "../styles/Home.module.css";

const getAge = () => {
	const now = new Date();
	let years = now.getFullYear() - 1991 - 1; //Subtract an extra one so it does not add a year before my birthday
	let currentMonth = now.getMonth();
	let currentDay = now.getDay();
	if ((currentMonth === 4 && currentDay > 17) || currentMonth > 5) {
		years++;
	}
	return years;
};

export default function Home() {
	let age = getAge();
	return (
		<main id="welcome-section">
			<h1>
				Hi! I'm <givenName>Patrick</givenName>{" "}
				<familyName>Keating</familyName>
			</h1>
			<h2>I'm a Web Developer</h2>
			<br />
			<p>
				I have been studying programming since December 2018, and I have
				been devouring material as fast as humanly possible. I started
				out with the basics of Python, as everything I read said that
				was the easiest to get started with. Then a former employer
				needed help with his website, so I dove into HTML/CSS/JS, and I
				haven't come back up for air! I have completed over 600 hours of
				curriculum from <a href="https://www.freecodecamp.org">FreeCodeCamp</a> and have
				loved every minute of it.
			</p>
			<p>
				I am currently working for a great company, and wearing many hats including:
			</p>
			<ul>
				<li>Web Developer</li>
				<li>Marketing Specialist</li>
				<li>IT Technician</li>
				<li>On-Call Technical Support</li>
			</ul>
			<p>
				I really like my current employer, and it would take a lot for me to change, but I am looking for part-time or contract work on the side.
			</p>
			<p>
				If you would like to learn more, please feel free to use the form below to contact me, and be sure to check out some of the <Link href='/projects'><a>Projects</a></Link> and completed websites!
			</p>
		</main>
	);
}
