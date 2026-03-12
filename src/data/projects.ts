export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  impact: string;
  techStack: string[];
  githubUrl: string;
  imageUrl: string;
  videoUrl?: string;
  videoOrientation?: "portrait" | "landscape";
}

export const projects: Project[] = [
  {
    slug: "stringsensei",
    title: "StringSensei — Audio-First Guitar Coach",
    shortDescription: "Tactile, audio-led practice for visually impaired players.",
    description:
      "StringSensei turns practice into an audio-first, step-by-step journey that builds confidence and independence.",
    impact: "Inclusive guitar coaching that prioritizes accessibility and steady progress.",
    techStack: ["Swift", "SwiftUI", "UIKit"],
    githubUrl: "https://github.com/yajanmehta",
    imageUrl: "/logos/stringsensei.svg",
    videoUrl: "https://ik.imagekit.io/x0rci4g0k/stringSenseiDemo.mp4",
    videoOrientation: "portrait"
  },
  {
    slug: "lingolens",
    title: "LingoLens — Camera Vocabulary Game",
    shortDescription: "Context-first vocabulary from real-world scenes.",
    description:
      "LingoLens anchors words in everyday scenes so learners speak with context, not memorized lists.",
    impact: "Helps students and travelers build confidence with contextual vocabulary.",
    techStack: ["Swift", "SwiftUI", "Apple Foundation Models", "Vision framework"],
    githubUrl: "https://github.com/yajanmehta",
    imageUrl: "/logos/lingolens.svg",
    videoUrl: "https://ik.imagekit.io/x0rci4g0k/lingoLensAppDemo.mp4",
    videoOrientation: "portrait"
  },
  {
    slug: "custom-ticketing-system",
    title: "Custom Business Ticketing System",
    shortDescription: "Repair jobs tracked end-to-end in real time.",
    description:
      "A tailored workflow for repair teams to log jobs, update status, and generate reports without spreadsheet chaos.",
    impact: "Reduced manual coordination with live tracking and admin visibility.",
    techStack: ["Flutter", "PocketBase"],
    githubUrl: "https://github.com/yajanmehta",
    imageUrl: "/logos/ticketing.svg",
    videoUrl: "https://ik.imagekit.io/x0rci4g0k/ticketingToolDemo.mp4",
    videoOrientation: "portrait"
  },
  {
    slug: "inventory-management",
    title: "Inventory Management App",
    shortDescription: "Shared stock control with live accuracy.",
    description:
      "Designed to keep inventory precise across teams with real-time sync and clean, audit-ready records.",
    impact: "Boosted inventory accuracy and day-to-day operational speed.",
    techStack: ["Flutter", "Firebase"],
    githubUrl: "https://github.com/yajanmehta",
    imageUrl: "/logos/inventory.svg",
    videoUrl: "https://ik.imagekit.io/x0rci4g0k/inventoryManagementDemo.mp4",
    videoOrientation: "portrait"
  },
  {
    slug: "smart-highway",
    title: "Smart Highway Lighting Control System",
    shortDescription: "Adaptive street lighting via microcontroller research.",
    description:
      "A research prototype exploring sensor-driven street light control to reduce wasted energy.",
    impact: "Proved adaptive lighting logic on an 8051 microcontroller.",
    techStack: ["8051 Microcontroller"],
    githubUrl: "https://github.com/yajanmehta",
    imageUrl: "/logos/smart-highway.svg"
  },
  {
    slug: "realtime-chat",
    title: "Real-time Chat App",
    shortDescription: "Responsive messaging with clean state updates.",
    description:
      "A real-time chat build that stress-tested sockets and smooth state handling.",
    impact: "Confirmed low-latency data flow and responsive UI behavior.",
    techStack: ["Flutter"],
    githubUrl: "https://github.com/yajanmehta",
    imageUrl: "/logos/realtime-chat.svg"
  },
  {
    slug: "student-club",
    title: "Student Club Management System",
    shortDescription: "C++ desktop tool for memberships and events.",
    description:
      "A desktop app to manage members, events, and participation history.",
    impact: "Streamlined student organization tracking and reporting.",
    techStack: ["C++"],
    githubUrl: "https://github.com/yajanmehta",
    imageUrl: "/logos/student-club.svg"
  }
];
