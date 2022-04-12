import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import styles from "../styles/Home.module.css";

const getAge = () => {
	const now = new Date();
	let years = now.getFullYear() - 2018 - 1; //Subtract an extra one so it does not add a year before my birthday
	let currentMonth = now.getMonth();
	if (currentMonth >= 11) {
		years++;
	}
	return years;
};

export default function Home() {
	let age = getAge();
	return (
		<main id="welcome-section" className={styles.container}>
			<h1>
				Hi! I'm Patrick Keating
			</h1>
			<h2>I'm a Web Developer</h2>
			<br />
			<p>
				I have been studying programming for {age} years, since December 2018, and I have
				been devouring material as fast as humanly possible. I started
				out with the basics of Python, as everything I read said that
				was the easiest to get started with. Then a former employer
				needed help with his website, so I dove into HTML/CSS/JS, and I
				haven't come back up for air! I have completed over 600 hours of
				curriculum from <a href="https://www.freecodecamp.org">FreeCodeCamp</a> and have
				loved every minute of it. I received the <a href="https://www.freecodecamp.org/certification/keating916/responsive-web-design" rel="nofollow">Responsive Web Design</a> and <a href="https://www.freecodecamp.org/certification/keating916/javascript-algorithms-and-data-structures"rel="nofollow">Javascript Algorithms and Data Structures</a> certifications from them as well
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
			<p>The technologies I regularly work with are: </p>
			<div className={styles.inlineList}>
				<ul>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>PHP</li>
					<li>GraphQL</li>
					<li>Git/Github</li>
				</ul>
			</div>
			<div className={styles.inlineList}>
				<ul>
					<li>Javascript(ES6)</li>
					<li>React.js</li>
					<li>Node/Express.js</li>
					<li>Next.js</li>
					<li>SQL</li>
				</ul>
			</div>
			<p>
				If you would like to learn more, please feel free to use the form below to contact me, and be sure to check out some of the <Link href='/projects'><a>Projects</a></Link> and completed websites!
			</p>
		</main>
	);
}
