export type ProjectTag =
  | "Full Stack"
  | "Frontend"
  | "Backend"
  | "API"
  | "Next.js"
  | "React"
  | "Node"
  | "MongoDB"
  | "PostgreSQL"
  | "TypeScript"
  | "Testing";

export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  role: string;
  techStack: string[];
  tags: ProjectTag[];
  githubUrl?: string;
  liveUrl?: string;
  images?: string[];
  highlights: string[];
  challenges: string[];
  futureImprovements: string[];
}

export const projects: Project[] = [
  {
    slug: "boulder-game-hub",
    name: "Boulder Game Hub",
    shortDescription:
      "Full-stack Next.js app to track game collections, wishlists, statuses, and reviews with external API integration.",
    longDescription:
      "Boulder is a full-stack Next.js app that lets users make and track their video game collections, manage wishlists, and write reviews. It integrates with the IGDB external API and uses a custom game status system for users.",
    role: "Solo Developer",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose",
      "JWT Auth",
      "Vercel"
    ],
    tags: ["Full Stack", "Next.js", "React", "MongoDB", "TypeScript"],
    githubUrl: "https://github.com/shane-m-king/Boulder",
    liveUrl: "https://www.boulder.games",
    images: ["/images/BoulderImage1v2.png", "/images/BoulderImage2v1.png", "/images/BoulderImage3v2.png", "/images/BoulderImage4v2.png", "/images/BoulderImage5v1.png"],
    highlights: [
      "Full authentication with protected routes and JWT cookies.",
      "Advanced game search, filtering, and pagination.",
      "Review system with user-game relationships and populated references.",
      "Deployed with a custom domain and DNS configuration via Vercel + Porkbun."
    ],
    challenges: [
      "Debugging deployment issues around Mongoose models and Vercel's serverless functions.",
      "Optimizing searches and paginiation for logical game search results."
    ],
    futureImprovements: [
      "Integrate price comparison APIs.",
      "Add social features like friends and activity feeds.",
      "Improve filter logic using data from IGDB."
    ]
  },
  {
    slug: "dog-adoption-api",
    name: "Dog Adoption Platform API",
    shortDescription:
      "RESTful Node/Express API for managing dogs, users, and adoptions with JWT-based authentication.",
    longDescription:
      "The Dog Adoption API is a backend-focused project that exposes a secure REST API for a dog adoption platform. It manages dogs, users, and adoption requests with robust validation, authentication, and automated tests.",
    role: "Solo Developer",
    techStack: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT Auth", "Mocha", "Chai"],
    tags: ["Backend", "API", "Node", "MongoDB", "Testing"],
    githubUrl: "https://github.com/shane-m-king/Dog-Adoption-API",
    images: ["/images/DogImage1v2.png", "/images/DogImage2v1.png", "/images/DogImage3v1.png"],
    highlights: [
      "Full CRUD routes for dogs, users, and adoption requests.",
      "JWT authentication with protected routes for sensitive operations.",
      "Comprehensive test suite using Mocha and Chai."
    ],
    challenges: [
      "Designing interactive schema relationships between users and dogs.",
      "Ensuring test isolation with setup/teardown strategies for the database."
    ],
    futureImprovements: [
      "Create a public frontend to browse and apply for adoptions.",
      "Add rate limiting and request logging middleware."
    ]
  },
  {
    slug: "space-travel",
    name: "Space Travel",
    shortDescription:
      "React-based dashboard for managing personalized spacecraft with mission details and responsive UI.",
    longDescription:
      "Space Travel is a frontend-focused React application that displays lists of personalized spacecraft, planets, and key details. Users can create custom spacecraft and navigate planets through a clean, responsive UI.",
    role: "Solo Developer",
    techStack: ["React", "Vite"],
    tags: ["Frontend", "React"],
    githubUrl: "https://github.com/shane-m-king/Space-Travel",
    images: ["/images/SpaceImage1v2.png", "/images/SpaceImage2v2.png", "/images/SpaceImage3v2.png", "/images/SpaceImage4v2.png"],
    highlights: [
      "Create and delete customizable spacecraft",
      "Responsive layout designed with a space-themed aesthetic.",
      "Reusable components for spacecraft cards, planet cards, and layout."
    ],
    challenges: [
      "Keeping the UI consistent and readable with many spacecraft",
      "Handling mock loading as if using a real API"
    ],
    futureImprovements: [
      "Hook the frontend up to an actual backend API.",
      "Add animations and transitions to enhance user experience."
    ]
  }
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
