export interface Skill {
  id: string;
  name: string;
  icon: string;
  level: number; // 1-5
  category: 'language' | 'framework' | 'tool' | 'design' | 'other';
}

export const skills: Skill[] = [
  {
    id: 'swift',
    name: 'Swift',
    icon: 'code',
    level: 5,
    category: 'language'
  },
  {
    id: 'swiftui',
    name: 'SwiftUI',
    icon: 'layout',
    level: 5,
    category: 'framework'
  },
  {
    id: 'uikit',
    name: 'UIKit',
    icon: 'layers',
    level: 5,
    category: 'framework'
  },
  {
    id: 'coredata',
    name: 'Core Data',
    icon: 'database',
    level: 4,
    category: 'framework'
  },
  {
    id: 'combine',
    name: 'Combine',
    icon: 'git-merge',
    level: 4,
    category: 'framework'
  },
  {
    id: 'arkit',
    name: 'ARKit',
    icon: 'eye',
    level: 3,
    category: 'framework'
  },
  {
    id: 'cloudkit',
    name: 'CloudKit',
    icon: 'cloud',
    level: 4,
    category: 'framework'
  },
  {
    id: 'mapkit',
    name: 'MapKit',
    icon: 'map',
    level: 4,
    category: 'framework'
  },
  {
    id: 'xcode',
    name: 'Xcode',
    icon: 'tool',
    level: 5,
    category: 'tool'
  },
  {
    id: 'git',
    name: 'Git',
    icon: 'git-branch',
    level: 5,
    category: 'tool'
  },
  {
    id: 'cicd',
    name: 'CI/CD',
    icon: 'repeat',
    level: 4,
    category: 'tool'
  },
  {
    id: 'figma',
    name: 'Figma',
    icon: 'figma',
    level: 3,
    category: 'design'
  },
  {
    id: 'sketch',
    name: 'Sketch',
    icon: 'pen-tool',
    level: 4,
    category: 'design'
  },
  {
    id: 'test',
    name: 'Unit Testing',
    icon: 'check-square',
    level: 4,
    category: 'other'
  },
  {
    id: 'agile',
    name: 'Agile',
    icon: 'trello',
    level: 4,
    category: 'other'
  }
];

export const skillCategories = [
  { id: 'language', name: 'Languages' },
  { id: 'framework', name: 'Frameworks & Libraries' },
  { id: 'tool', name: 'Tools' },
  { id: 'design', name: 'Design' },
  { id: 'other', name: 'Other' }
];