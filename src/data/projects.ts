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
    slug: "lingolens",
    title: "Language Learning App - LingoLens",
    shortDescription: "Camera-first language learning with on-device intelligence.",
    description:
      "Built a context-aware language learning game where users scan real-world objects via live camera. Vision framework classifies them, and on-device AI translates and quizzes the user in their target language. Integrated Apple Foundation Models (iOS 26) for object filtering, concurrent translation via Swift task groups, and bilingual sentence generation with zero data leaving the device.",
    impact:
      "Engineered a full AVCaptureSession pipeline with throttled Vision classification (150 ms), orientation-aware EXIF mapping, and AVSpeechSynthesizer playback with premium voice selection.",
    techStack: ["Swift", "SwiftUI", "Vision", "Apple Foundation Models", "AVFoundation"],
    githubUrl: "https://github.com/yajan08",
    imageUrl: "/logos/lingolens.svg",
    videoUrl: "https://ik.imagekit.io/x0rci4g0k/lingoLensAppDemo.mp4",
    videoOrientation: "portrait"
  },
  {
    slug: "stringsensei",
    title: "Accessible Guitar Learning App - StringSensei",
    shortDescription: "VoiceOver-first guitar practice with real-time pitch feedback.",
    description:
      "Built a VoiceOver-first guitar learning app for visually impaired users. All pitch feedback, lesson progression, and chord prompts are delivered via UIAccessibility announcements with zero reliance on visuals. Engineered a real-time pitch detection pipeline using AVAudioEngine, vDSP autocorrelation, and parabolic interpolation for sub-Hz accuracy across all six strings.",
    impact:
      "Built a GuitarSynthesizer with AVAudioUnitSampler and SF2 SoundFonts for realistic strum timing, plus dual persistence (local JSON and UserDefaults) and a Singleton DataStore for progress tracking.",
    techStack: ["Swift", "UIKit", "AVFoundation", "AudioKit", "Tonic", "Storyboard"],
    githubUrl: "https://github.com/yajan08",
    imageUrl: "/logos/stringsensei.svg",
    videoUrl: "https://ik.imagekit.io/x0rci4g0k/stringSenseiDemo.mp4",
    videoOrientation: "portrait"
  },
  {
    slug: "custom-ticketing-system",
    title: "Custom Business Ticketing System - Param Sales",
    shortDescription: "Field-service workflow with real-time visibility and branded reports.",
    description:
      "Built a full-stack field-service management app with real-time ticket tracking via PocketBase WebSocket subscriptions, role-based auth, and a ban-management system. Designed a multi-role workflow for open, in-progress, and closed jobs with staff attribution, cost tracking, warranty flags, and on-site or off-site tagging.",
    impact:
      "Engineered dynamic PDF service reports with checklists, photo attachments, watermarks, and signatures, shared directly from the app.",
    techStack: ["Flutter", "PocketBase", "Dart", "WebSockets", "PDF"],
    githubUrl: "https://github.com/yajan08",
    imageUrl: "/logos/ticketing.svg",
    videoUrl: "https://ik.imagekit.io/x0rci4g0k/ticketingToolDemo.mp4",
    videoOrientation: "portrait"
  },
  {
    slug: "flag-inventory-management",
    title: "Flag Inventory Management System",
    shortDescription: "Lifecycle tracking across multiple sites with zero drift.",
    description:
      "Architected a multi-site inventory lifecycle system tracking flags through active, washing, stitching, and disposed states with full inter-site transfer logic. All stock movements use Firestore atomic transactions to prevent race conditions and data inconsistency across concurrent users.",
    impact:
      "Built a complete audit trail for every transfer, wash, stitch, dispose, and receive event with user, timestamp, and quantity delta. Implemented RBAC with admin-only role assignment and real-time auth state management.",
    techStack: ["Flutter", "Firebase Firestore", "Firebase Auth", "RBAC", "State Machine"],
    githubUrl: "https://github.com/yajan08",
    imageUrl: "/logos/inventory.svg"
  },
  {
    slug: "smart-highway",
    title: "Research Paper - Smart Highway Street Light Management System",
    shortDescription: "8051 microcontroller research for adaptive street lighting.",
    description:
      "Co-authored and published in IJNIET (Vol. 25, Nov 2024). Designed an embedded system using the 8051 microcontroller with LDR-based ambient sensing and time-driven conditional logic for automatic streetlight control.",
    impact:
      "Implemented in 8051 Assembly with Timer 0 for time simulation and three-state brightness control (full, dim, off), demonstrating measurable energy savings over fixed schedules.",
    techStack: ["8051 Microcontroller", "Assembly", "EdSim51", "LDR Sensor"],
    githubUrl: "https://www.ijniet.org/wp-content/uploads/2024/11/3.pdf",
    imageUrl: "/logos/smart-highway.svg"
  },
  {
    slug: "inventory-management",
    title: "Inventory Management App",
    shortDescription: "Real-time inventory tracking with audit-ready accuracy.",
    description:
      "Built a real-time multi-user inventory tracker using Firestore streams, with low-stock alerts, location tagging, and searchable item listings. Designed for teams updating stock in parallel without losing precision.",
    impact:
      "Implemented transactional quantity updates with an audit log and cascading batch delete for log cleanup. Added a dual-layer auth system with Firebase Auth login plus real-time Firestore ban checks for instant access revocation.",
    techStack: ["Flutter", "Firebase Firestore", "Firebase Auth", "Transactions"],
    githubUrl: "https://github.com/yajan08",
    imageUrl: "/logos/inventory.svg"
  }
];
