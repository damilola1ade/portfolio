import emoji from "react-easy-emoji";

export const greetings = {
	name: "Damilola Adegbemile",
	title: "Hi, I'm Dami",
	description:
		"I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.",
	resumeLink:
		"https://drive.google.com/file/d/1Cc_2p_-8QnQVqJGkWujlLgW04dlaQOKT/view?usp=share_link",
};

export const openSource = {
	githubUserName: "damilola1ade",
};

export const contact = {};

export const socialLinks = {
	url: "https://damilola1ade.github.io/",
	linkedin: "https://www.linkedin.com/in/damilola-adegbemile-a768b6b8/",
	github: "https://github.com/damilola1ade",
	twitter: "https://twitter.com/7amilola",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.",
	data: [
		{
			title: "Front End Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & Progressive-Web-Apps (PWA) in React.js, Next.js and Vite"
				),
				emoji("⚡ RESTful API integration"),
			
			],
			softwareSkills: [
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "TailwindCSS",
					fontAwesomeClassname: "logos:tailwindcss-icon",
				},
				{
					skillName: "Vite",
					fontAwesomeClassname: "vscode-icons:file-type-vite",
				},
				{
					skillName: "NodeJS",
					fontAwesomeClassname: "logos:nodejs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
								
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "Figma",
					fontAwesomeClassname: "logos:figma",
				},
				{
					skillName: "Photoshop",
					fontAwesomeClassname: "vscode-icons:file-type-photoshop",
				},
				{
					skillName: "Git",
					fontAwesomeClassname: "fa:git",
				},
			],
		},
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in developing Smart Contracts using Solidity & Ethereum."
				),
				emoji(
					"⚡ Building scripts for automated testing & deployment of Smart Contracts using Brownie & Infura."
				),
				emoji(
					"⚡ Experience in using Openzeppelin Smart Contract Standards & Chainlink Oracles."
				),
				emoji(
					"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard."
				),
				emoji(
					"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS."
				),
			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
				{
					skillName: "Web3js",
					fontAwesomeClassname: "logos:web3js",
				},
				{
					skillName: "Metamask",
					fontAwesomeClassname: "logos:metamask-icon",
				},
				{
					skillName: "Ganache",
					fontAwesomeClassname: "logos:ganache-icon",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Front end/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
	{
		Stack: "Backend",
		progressPercentage: "Work-in-progress",
	},
	
];

export const experience = [
	{
		role: "Frontend Developer",
		company: "Duseca Software",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Apr 2022 – Jun 2022",
		desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.",
	},
	{
		role: "API Engineer",
		company: "Duseca Software",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Jan 2022 – Mar 2022",
		desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Full Stack Developer",
		company: "Bleed-AI",
		companylogo: "/img/icons/common/bleedAI.jpg",
		date: "Sept 2021 - Oct 2021",
		desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
	},
	{
		role: "Backend Developer",
		company: "Wapidu",
		companylogo: "/img/icons/common/wapidu.jpg",
		date: "Sept 2021",
		desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
	},
];

export const projects = [
	{
		name: "CryptoWorld",
		desc: "Cryptoverse is a ReactJS app that provides detailed information about the various cryptocurrencies and latest crypto news using Rapid API.",
		github: "https://github.com/damilola1ade/cryptoworld",
		link: "https://cryptoworld2022.netlify.app/",
	},
	{
		name: "Mykrypt",
		desc: "A web3.0 web app that sends ethereum via metamask through the Goerli test network. After sending ethereum, a GIF is attached to every transaction.",
		github: "https://github.com/damilola1ade/mykrypt",
		link: "https://mykryptlive.netlify.app/",
	},
	{
		name: "Realtor",
		desc: "A real-estate website with realtime data and information on houses for rent and for sale using Bayut from RapidAPI.",
		github: "https://github.com/damilola1ade/realtor",
		link: "https://realtor2022.vercel.app/"
	},
	{
		name: "OurBank",
		desc: "A responsive website created with ReactJS and TailwindCSS. The best modern business landing page out there.",
		github: "https://github.com/damilola1ade/ourbank",
		link: "https://ourbank.netlify.app/"
	},
	{
		name: "Payday",
		desc: "a replica website of Payday created with ReactJS and TailwindCSS.",
		github: "https://github.com/damilola1ade/paydayy",
		link: "https://paydayy.netlify.app/"
	},
	{
		name: "AdmiralX",
		desc: "A responsive admin dashboard application built with ReactJS and TailwindCSS. You can choose between 6 beautiful theme colors as well as toggle between light and dark mode. The Admin panel has 3 pages, 3 apps and 5 functional charts.",
		github: "https://github.com/damilola1ade/AdmiralX",
		link: "https://admiralx.netlify.app/"
	},
];


// See object prototype on SEO.jsx page
export const seoData = {
	title: "Damilola Adegbemile",
	author: "Damilola",
	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
	keywords: [
		"Damilola",
		"Dami",
		"@damilola1ade",
		"7amilola",
		"Portfolio",
		"Damilola Portfolio ",
		"Damilola Adegbemile Portfolio",
	],
}
