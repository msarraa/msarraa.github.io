import process1 from "../assets/images/Elevate/process1.png"
import process2 from "../assets/images/Elevate/process2.png"
import Event from "../assets/images/Elevate/Event.png"
import Explore from "../assets/images/Elevate/Explore.png"
import Gig_page from "../assets/images/Elevate/Gig page 1.png"
import Job_Board2 from "../assets/images/Elevate/Job Board2.png"
import Job_Board3 from "../assets/images/Elevate/Job Board3.png"
import Messages from "../assets/images/Elevate/Messages.png"
import Onboarding1 from "../assets/images/Elevate/Onboarding1.png"
import Onboarding3 from "../assets/images/Elevate/Onboarding1.png"

import quizhem from "../assets/images/communiQuiz/Hem.png"
import quizLoggaIn from "../assets/images/communiQuiz/Logga in.png"
import quiz1 from "../assets/images/communiQuiz/quiz1.png"
import quiz2 from "../assets/images/communiQuiz/quiz2.png"
import quiz3 from "../assets/images/communiQuiz/quiz3.png"
import quiz4 from "../assets/images/communiQuiz/quiz4.png"
import quiz5 from "../assets/images/communiQuiz/quiz5.png"
import quiz6 from "../assets/images/communiQuiz/quiz6.png"
import quiz7 from "../assets/images/communiQuiz/quiz7.png"


export const projects = [
  {
    slug: "elevate",
    title: "Elevate",
    type: "UX / Product Design",
    year: "2025",
    summary:
      "A digital platform designed to make work opportunities more accessible for people with disabilities.",
    role: "UX Research · Product Design · Accessibility",
    tags: ["UX Research", "Accessibility", "Product Strategy", "Prototyping"],
    highlight: "Inclusive employment platform",
    heroImages: ["/src/assets/images/Elevate/Onboarding3.png", "/src/assets/images/Elevate/Explore.png"],
    
	caseImages: {
		process1: process1,
		process2: process2,
		results: [
		Onboarding1,
		Onboarding3,
		Explore,
		Messages,
		Job_Board2,
		Job_Board3,
		Gig_page,
		Event,
		],
	},
    caseStudy: {
      intro:
        "Elevate explores how digital platforms can support more inclusive access to flexible work, training, and peer support.",
      challenge:
        "People with disabilities often face barriers when looking for work, including inaccessible processes, lack of confidence, and limited flexible opportunities.",
      goal:
        "The goal was to design a platform that feels approachable, supportive, and practical — helping users discover opportunities while building confidence over time.",
      contribution:
        "I contributed to user needs analysis, product structure, user flows, prototype design, and concept development in an international team.",
      process: [
        "Explored the problem space and identified user needs.",
        "Mapped core flows for finding opportunities, training, and support.",
        "Designed prototype screens focused on clarity and accessibility.",
        "Iterated the concept based on feedback and team discussions.",
      ],
      outcome:
        "The final concept presents a more inclusive pathway into work through flexible opportunities, learning resources, and community support.",
      reflection:
        "This project strengthened my understanding of how UX can support social impact when accessibility, trust, and user confidence are treated as core product requirements.",
    },
  },


  {
  slug: "communiquiz",
  title: "CommuniQuiz",
  type: "Mobile App Concept",
  year: "2024",
  summary:
    "A mobile application prototype designed to make music quizzes simple, fun, and engaging.",
  role: "UX Research · Interaction Design · Usability Testing",
  tags: ["UX Research", "User Flows", "Figma", "Testing", "Interaction Design"],
  highlight: "Community-based music quiz experience",

  heroImages: [quizLoggaIn, quizhem],
    caseImages: {
    results: [
      quizhem,
      quiz1,
      quiz2,
      quiz3,
      quiz4,
      quiz5,
      quiz6,
      quiz7,
    ],
  },

  caseStudy: {
    intro:
      "CommuniQuiz is a mobile application prototype created to simplify how people create, join, and participate in music quizzes within a community.",
    challenge:
      "Music quizzes are popular and engaging, but they can be time-consuming to prepare and difficult to organize in a smooth digital experience.",
    goal:
      "The goal was to design a mobile experience that makes quiz creation and participation simple, social, and easy to understand.",
    contribution:
      "I worked with user research, ideation, user flows, prototyping, usability testing, and iterative design improvements.",
    process: [
      "Explored how people currently create and participate in music quizzes.",
      "Mapped key user flows for joining quizzes, creating quizzes, and navigating the app.",
      "Designed prototype screens in Figma with focus on clarity and engagement.",
      "Iterated the concept based on feedback to improve navigation and core interactions.",
    ],
    outcome:
      "The final prototype supports users in logging in, exploring quiz options, creating quizzes, and participating in a clearer and more engaging mobile experience.",
    reflection:
      "This project strengthened my understanding of how interaction design, information structure, and small usability decisions can make a social app feel more intuitive and engaging.",
  },

},

  {
    slug: "study-progression",
    title: "Rule-based Study Progression",
    type: "UX Engineering / System Design",
    year: "2025",
    summary:
      "A rule-based planning system combining structured logic, backend reasoning, and understandable user interfaces.",
    role: "System Design · UX · Implementation",
    tags: ["Systems Thinking", "Java", "UX", "Data Modeling"],
    highlight: "Trustworthy decision-support interface",
    heroImages: ["/src/assets/images/study-progression-1.png"],

    caseStudy: {
      intro:
        "This project focused on a rule-based decision-support system for study progression, combining structured logic with a user-facing planning interface.",
      challenge:
        "Study progression rules can be complex, and users need support that is both technically correct and understandable.",
      goal:
        "The goal was to create a system that separates business logic from presentation while helping users understand recommendations and outcomes.",
      contribution:
        "I worked on rule-based reasoning, data modeling, interface design, and user studies to evaluate clarity and trust.",
      process: [
        "Analyzed progression rules and translated them into structured logic.",
        "Designed a separation between reasoning logic and presentation.",
        "Created interface concepts to explain decisions clearly.",
        "Tested understandability and iterated the system experience.",
      ],
      outcome:
        "The result was a structured planning system that supports clearer decision-making and communicates complex rules in a more understandable way.",
      reflection:
        "This project represents my hybrid profile strongly: technical reasoning, structured systems thinking, and UX focused on trust and clarity.",
    },
  },
]