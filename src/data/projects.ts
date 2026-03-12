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
    title: "StringSensei — Accessible Guitar Learning App",
    shortDescription: "Inclusive guitar learning for visually impaired musicians.",
    description:
      "StringSensei turns music practice into an accessible, audio-first learning journey, using cues and structure to build confidence and independence.",
    impact: "Inclusive guitar learning experience designed for visually impaired musicians.",
    techStack: ["Swift", "SwiftUI", "UIKit"],
    githubUrl: "https://github.com/yajanmehta",
    imageUrl: "/logos/stringsensei.svg",
    videoUrl: "/videos/stringSenseiDemo.mp4",
    videoOrientation: "landscape"
  },
  {
    slug: "lingolens",
    title: "LingoLens — Language Learning Game",
    shortDescription: "Context-first vocabulary built from the real world.",
    description:
      "LingoLens uses the camera to anchor vocabulary in everyday life, helping learners speak with confidence and context instead of memorized phrases.",
    impact: "Context-based language learning for students, self-learners, and travelers.",
    techStack: ["Swift", "SwiftUI", "Apple Foundation Models", "Vision framework"],
    githubUrl: "https://github.com/yajanmehta",
    imageUrl: "/logos/lingolens.svg",
    videoUrl: "/videos/lingoLensApp.mp4",
    videoOrientation: "portrait"
  },
  {
    slug: "custom-ticketing-system",
    title: "Custom Business Ticketing System",
    shortDescription: "Real-time repair workflow tracking and control.",
    description:
      "A tailored system for repair teams to track jobs, update status, and generate reports without spreadsheet chaos.",
    impact: "Automated manual workflows with real-time tracking and admin control.",
    techStack: ["Flutter", "PocketBase"],
    githubUrl: "https://github.com/yajanmehta",
    imageUrl: "/logos/ticketing.svg",
    videoUrl: "/videos/ticketingToolDemo.mp4",
    videoOrientation: "landscape"
  },
  {
    slug: "inventory-management",
    title: "Inventory Management App",
    shortDescription: "Multi-user stock tracking with live updates.",
    description:
      "Built to keep inventory accurate and shared across teams with real-time updates and clean records.",
    impact: "Improved inventory accuracy and operational speed for a small business.",
    techStack: ["Flutter", "Firebase"],
    githubUrl: "https://github.com/yajanmehta",
    imageUrl: "/logos/inventory.svg",
    videoUrl: "/videos/inventoryManagementDemo.mp4",
    videoOrientation: "landscape"
  },
  {
    slug: "smart-highway",
    title: "Smart Highway Street Light Management System",
    shortDescription: "Microcontroller-based adaptive lighting research.",
    description:
      "A research build exploring sensor-led street light control to reduce energy waste.",
    impact: "Demonstrated adaptive lighting logic using an 8051 microcontroller.",
    techStack: ["8051 Microcontroller"],
    githubUrl: "https://github.com/yajanmehta",
    imageUrl: "/logos/smart-highway.svg"
  },
  {
    slug: "realtime-chat",
    title: "Real-time Chat App",
    shortDescription: "Low-latency messaging with state discipline.",
    description:
      "A real-time chat experience built to test socket handling and smooth state updates.",
    impact: "Validated real-time data flow and responsive UI updates.",
    techStack: ["Flutter"],
    githubUrl: "https://github.com/yajanmehta",
    imageUrl: "/logos/realtime-chat.svg"
  },
  {
    slug: "student-club",
    title: "Student Club Management System",
    shortDescription: "Membership and event tracking in C++.",
    description:
      "A desktop tool for organizing student club members, events, and participation history.",
    impact: "Simplified student organization management and event tracking.",
    techStack: ["C++"],
    githubUrl: "https://github.com/yajanmehta",
    imageUrl: "/logos/student-club.svg"
  }
];
