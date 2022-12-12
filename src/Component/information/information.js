import emoji from "react-easy-emoji";
import logo from '../../Assets/Images/logo.png'
export const greetings = {
	name: "Mohsin Muhammad Ali",
	title: "Hi all, I'm Mohsin",
	description:
		"I'm passionate Full Stack web developer having an experience of web applications with HTML CSS Javascript along with React.js Material UI Antd Tailwind CSS NodeJS ExpressJS Mongodb and firebase",
	resumeLink:
		"https://docs.google.com/document/d/1BnObOa7JiXa9GSM_3yZSSlkE0GGiZL-9pbulb7xvhhw/edit?usp=sharing"
};

export const openSource = {
	githubUserName: "mohsinali0786",
};


export const socialLinks = {
	linkedin: "https://www.linkedin.com/in/mohsin-muhammad-ali-090349194/",
	github: "https://github.com/Mohsinali0786",
	instagram: "https://www.instagram.com/m_a_parekh/",
	facebook: "https://www.facebook.com/mohisnmuhammadali",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"PASSIONATE FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TIME NEW THINGS",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: 'Skills', // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps in React.js"
				),
				emoji("⚡ Building responsive static websites using HTML CSS JavaScript or ReactJS"),
				emoji(
					"⚡ Building RESTful APIs in NodeJS ExpressJS along with mongodb or firebase REST Framework"
				),
			],
			softwareSkills: [
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
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Basic Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
				
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "Cloud", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "50",
	},
	{
		Stack: "Programming",
		progressPercentage: "80",
	},
];

export const educationInfo = [
	{
		schoolName: "University Of Karachi",
		subHeader: "Bachelor of Science in Applied Physics Specialization in Electronics",
		duration: "January 2016 - December 2018",
		grade: "Grade A",
	},
	{
		schoolName: "Govt Islamia Science College",
		subHeader: "Higher Secondary School Certificate (HSC) in Computer Science",
		duration: "Sep 2013 - July 2015",
		grade: "Grade A",
	},
	{
		schoolName: "St.Lawrence's High School",
		subHeader: "Secondary School Certificate (SSC) in Computer Science",
		duration: "March 2003 - May 2013",
		grade: "Grade A",
	},


];
export const ShortCoursesData = [
	{
		schoolName: "Saylani Mass and IT Training",
		subHeader: "Web Mobile and Hybrid Application Development ",
		duration: "March 2020 - December 2020",
	},
	{
		schoolName: "Saylani Mass and IT Training",
		subHeader: "Short Course Python Programming",
		duration: "Nov 2019 - Dec 2019",
	},
];

export const experience = [
	{
		role: "Junior Developer",
		company: "NOCODEAI.Cloud",
		date: "Aug 2022 – Dec 2022",
		desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using HTML, CSS,Bootstrap,Javascript and ReactJS,Materialui,Antd,Tailwind-CSS and some other libraries. Besides frontend development I also do some backend work like database Integration using firebase or MongoDB and also perform API integration",
	},
];

export const projects = [
	{
		name: "developer-portfolio",
		desc: "Simple Portfolio Template built with react.js",
		github: "https://github.com/Mohsinali0786/Myportfolio.git",
	},
	{
		name: "Attendance System",
		desc: "User can add attendance on daily basis",
		github: "https://github.com/Mohsinali0786/fullattendancesys.git",
	},
	{
		name: "TeamApp",
		desc: "Show which team member are you How many teams added you",
		github: "https://github.com/Mohsinali0786/teamapp.git",
	},
	{
		name: "Ecommerce",
		desc: "Simple E-commerece website",
		github: "https://github.com/Mohsinali0786/E-Commerce-master.git",
	},
];

// export const feedbacks = [
// 	{
// 		name: "John Smith",
// 		feedback:
// 			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
// 	},
// 	{
// 		name: "John Smith",
// 		feedback:
// 			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
// 	},
// ];

// // option to hide or show the ContactUs component
// export const showContactUs = true;

// See object prototype on SEO.jsx page
// export const seoData = {
// 	title: "Hanzla Tauqeer",
// 	description:
// 		"A passionate Full Stack Web Developer and Blockchain Developer.",
// 	author: "Hanzla Tauqeer",
// 	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
// 	url: "https://developer-portfolio-1hanzla100.vercel.app",
// 	keywords: [
// 		"Hanzla",
// 		"Hanzla Tauqeer",
// 		"@1hanzla100",
// 		"1hanzla100",
// 		"Portfolio",
// 		"Hanzla Portfolio ",
// 		"Hanzla Tauqeer Portfolio",
// 	],
// }
