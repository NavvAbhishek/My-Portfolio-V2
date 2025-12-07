/**
 * Technology icon mappings for the Skills Section
 * Maps technology names to their icon paths in /public/tech-icons
 */

export interface TechIcon {
  name: string
  icon: string
  alt: string
}

export const techIconMap: Record<string, string> = {
  // Frontend
  'React': '/tech-icons/reactlogo.png',
  'Next.js': '/tech-icons/nextlogo.png',
  "JavaScript": "/tech-icons/jslogo.png",
  'TypeScript': '/tech-icons/tslogo.png',
  'Redux': '/tech-icons/redux.png',
  'Tailwind CSS': '/tech-icons/tailwind.png',
  'HTML': '/tech-icons/htmllogo.png',
  'CSS': '/tech-icons/csslogo.png',
  "Figma": "/tech-icons/figmalogo.png",

  // Backend
  'Node.js': '/tech-icons/node.png',
  "Java": "/tech-icons/java.png",
  'Spring Boot': '/tech-icons/spring-boot-logo.png',
  'Python': '/tech-icons/pylogo.png',
  'Express': '/tech-icons/express-js-white.png',

  // Database
  'PostgreSQL': '/tech-icons/postgresql.png',
  'MongoDB': '/tech-icons/mongodb_logo.png',
  'My SQL': '/tech-icons/mysql.png',
  'Prisma': '/tech-icons/prisma-orm.png',
  "Firestore": "/tech-icons/firestorelogo.png",

  // DevOps & Cloud
  'Docker': '/tech-icons/docker.png',
  'Git': '/tech-icons/gitlogo.png',
  'Github': '/tech-icons/githublogo.png',
  'Firebase': '/tech-icons/firebase.png',
  "Photoshop": "/tech-icons/pslogo.png",
  "Illustrator": "/tech-icons/ailogo.png"
  // Placeholder - using GitHub logo
}

export const getTechIcon = (techName: string): string => {
  return techIconMap[techName] || '/tech-icons/reactlogo.png'
}
