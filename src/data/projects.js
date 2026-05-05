import krav from "../assets/images/exjobb/examenskrav.png"
import ej1 from "../assets/images/exjobb/feedback-ej-uppfyllda1.png"
import ej2 from "../assets/images/exjobb/feedback-ej-uppfyllda2.png"
import uppfyllda1 from "../assets/images/exjobb/uppfyllda-krav.png"
import uppfyllda2 from "../assets/images/exjobb/feedback-uppfyllda2.png"
import uppfyllda3 from "../assets/images/exjobb/feedback-uppfyllda3.png"
import meny from "../assets/images/exjobb/meny.png"
import planering1 from "../assets/images/exjobb/planering1.png"
import System_Architecture from "../assets/images/exjobb/System-Architecture.png"
import System_Arkitektur from "../assets/images/exjobb/arkitektur.png"


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
    slug: "study-progression",
    title: "ProgressPath",
    type: "UX Engineering / System Design",
    year: "2026",
    summary:
      "An explainable decision-support system for academic planning that combines rule-based reasoning, structured data modeling, and user-centered interface design to make complex progression requirements understandable, trustworthy, and actionable.",
    role: "System Design · UX · Implementation",
    tags: ["System Design", "UX Engineering", "Rule-Based Logic", "Explainability", "Data Modeling", "Decision Support"],
    highlight: "Trustworthy decision-support interface",
	visualType: "system",
    heroImages: [System_Arkitektur],
	caseImages: {
		results: [
			meny,
			planering1,
			krav,
			ej1,
			ej2,
			uppfyllda1,
			uppfyllda2,
			uppfyllda3,
		],
		}, 
    caseStudy: {
      intro:
        "This project explored how formal academic regulations can be transformed into an explainable decision-support system that helps students understand study progression, degree requirements, and alternative academic trajectories.",
      challenge:
        "Academic progression is governed by complex, rule-based requirements, yet existing systems often present fragmented information without helping users interpret what their records actually mean. The challenge was to bridge formal correctness with human understanding.",
      goal:
        "The goal was to design a trustworthy system that separates formal reasoning from interface presentation, ensuring technically correct outcomes while making complex decisions transparent and understandable for users.",
      contribution:
        "I designed and implemented the system architecture, translated progression requirements into structured rule logic, developed explanation-focused interfaces, and conducted user evaluations focused on clarity, trust, and perceived control..",
      process: [
        "Mapped complex academic regulations into structured rule systems",
        "Designed modular architecture separating reasoning, explanations, and UI",
        "Developed progressive disclosure interfaces for explanation depth",
        "Evaluated user understanding, trust, and system clarity through pilot and user studies",
      ],
      outcome:
        "The result was a trustworthy planning system that demonstrates how rule-based reasoning and explanation-driven UX can support informed decision-making in complex domains without replacing human judgment.",
      reflection:
        "This project strongly reflects my profile as a hybrid UX engineer and systems thinker: combining backend logic, structured problem-solving, and human-centered design to make technically complex systems both rigorous and understandable.",
		},
		keyDesignPrinciples: [
  {
    title: "Formal Correctness",
    description:
      "Built on explicit rule-based logic to ensure that recommendations and progression outcomes align with formal academic requirements rather than assumptions or opaque automation.",
  },
  {
    title: "Explainability",
    description:
      "System conclusions are derived from transparent reasoning structures, allowing users to understand why requirements are fulfilled, unmet, or constrained.",
  },
  {
    title: "Trustworthy Interaction",
    description:
      "Designed to support user trust through traceable logic, clear feedback, and responsible communication of system limitations.",
  },
  {
    title: "Human-Centered Decision Support",
    description:
      "Supports informed decision-making without replacing user judgment, preserving autonomy while guiding users through complex planning scenarios.",
  },
  {
    title: "Progressive Disclosure",
    description:
      "Balances clarity and cognitive load by presenting high-level insights first, while allowing deeper explanatory detail through interaction when needed.",
  },
],
    
  },
  {
  slug: "elevate",
  title: "Elevate",
  type: "UX / Product Design",
  year: "2025",

  summary:
    "An inclusive employment platform designed to empower people with disabilities in Western Australia through flexible work opportunities, training, and community support.",

  role:
    "UX Research · Product Design · Accessibility · Product Strategy",

  tags: [
    "UX Research",
    "Accessibility",
    "Product Strategy",
    "Prototyping",
  ],

  highlight:
    "Inclusive employment platform",

  heroImages: [
    "/src/assets/images/Elevate/Onboarding3.png",
    "/src/assets/images/Elevate/Explore.png",
  ],

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
      "Elevate is an inclusive employment platform developed in collaboration with students from Edith Cowan University in Western Australia. The project explores how digital design can create more accessible pathways into employment for people with disabilities by combining flexible work opportunities, skill development, and community-based support.",

    challenge:
      "In Western Australia, only 48% of people with disabilities are employed, while unemployment rates remain more than twice as high as those of the general population. Traditional employment systems often feel inaccessible, overwhelming, or poorly aligned with diverse user needs, creating barriers to meaningful workforce participation.",

    goal:
      "The goal was to design a supportive and approachable digital platform that lowers barriers to employment by offering alternative pathways such as gig work, volunteer opportunities, training, and peer support — enabling users to gradually build confidence, experience, and independence.",

    contribution:
      "I contributed to concept development, user needs analysis, platform structure, feature refinement, and prototype design. My role focused on shaping the platform’s value proposition, ensuring accessibility and clarity, and helping define a product structure that directly addressed the practical and emotional barriers users face when entering the workforce.",

    process: [
      "Conducted collaborative research and ideation sessions with Edith Cowan University students to understand barriers within disability employment.",
      "Identified user pain points related to accessibility, confidence, opportunity discovery, and social isolation.",
      "Defined the platform’s strategic direction by expanding beyond traditional employment into gigs, volunteering, training, and community support.",
      "Developed user flows, structural concepts, and interface prototypes focused on accessibility, clarity, and gradual progression.",
      "Refined the concept iteratively through team collaboration, discussion, and design feedback.",
    ],

    outcome:
      "The final prototype presents a flexible employment ecosystem that supports users through multiple pathways — including jobs, gigs, volunteer work, training, and peer communities. By focusing on strengths beyond traditional CVs and creating a supportive environment, Elevate promotes confidence-building, social connection, and more inclusive workforce participation.",

    reflection:
      "This project strengthened my understanding of how UX and product design can address social inequity when accessibility, trust, and empowerment are treated as foundational product principles. It reinforced the importance of designing not only for usability, but for confidence, inclusion, and long-term opportunity creation.",
  },
},

  {
  slug: "communiquiz",

  title: "CommuniQuiz",

  type: "Mobile App Concept",

  year: "2024",

  summary:
    "A community-focused mobile application prototype that makes music quizzes easier to create, join, and enjoy through user-centered design, social interaction, and playful engagement.",

  role:
    "UX & Product Design · UX Research · Interaction Design · Usability Testing",

  tags: [
    "UX Research",
    "Interaction Design",
    "User Flows",
    "Figma",
    "Usability Testing",
  ],

  highlight:
    "Community-based music quiz experience",

  heroImages: [
    quizLoggaIn,
    quizhem,
  ],

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
      "CommuniQuiz is a mobile application prototype developed in collaboration with MusikApp to make music quizzes more accessible, engaging, and socially interactive. By combining user research, iterative design, and testing, the platform enables users to create custom quizzes, auto-generate themed experiences, and participate in public quizzes within a connected music-focused community.",

    challenge:
      "Music quizzes are widely enjoyed in social settings such as student events, pubs, and private gatherings, but organizing them often requires significant preparation, including creating questions, selecting songs, and managing participants. Existing experiences can be time-consuming and fragmented, highlighting the need for a more intuitive and engaging digital solution.",

    goal:
      "The goal was to design a mobile experience that simplifies both quiz creation and participation while maintaining creativity, social connection, and enjoyment. The product needed to reduce preparation barriers while supporting both casual users and more competitive quiz participants.",

    contribution:
      "I contributed across both research and design. My responsibilities included conducting surveys and analyzing participant data to identify user needs, contributing to ideation and product recommendations, participating in brainstorming and wireframe development, designing parts of the final prototype, creating the project logo, and serving as group secretary to document decisions and support collaborative communication.",

    process: [
      "Conducted surveys and interviews with quiz participants and organizers to identify user behaviors, needs, and pain points.",
      "Analyzed findings to define priorities around usability, creativity, accessibility, and time efficiency.",
      "Applied a Design-Build-Test approach to develop wireframes and prototype concepts in Figma.",
      "Iteratively tested each design stage with target users and refined navigation, features, and interface clarity based on feedback.",
      "Introduced features such as custom quiz creation, public quiz exploration, and random quiz generation to better align with user expectations.",
    ],

    outcome:
      "The final prototype became CommuniQuiz — a mobile application where users can create personalized music quizzes, auto-generate themed quizzes, join public community quizzes, and track their progress. Structured around Home, Explore, and Profile sections, the app provides an intuitive and playful experience that supports creativity, competition, and social interaction for music lovers aged 15–40.",

    reflection:
      "This project strengthened my understanding of how research-driven interaction design can transform familiar social activities into more accessible and engaging digital products. It reinforced the value of iterative testing, user feedback, and balancing functionality with enjoyment when designing community-centered experiences.",
  },
},

  
]