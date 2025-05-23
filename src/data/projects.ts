import { StaticImageData } from 'next/image';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  appStoreLink?: string;
  caseStudyLink?: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: 'fitness-tracker',
    title: 'FitTrack Pro',
    description: 'A comprehensive fitness tracking app with Apple Health integration, custom workout plans, and progress analytics.',
    imageUrl: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Swift', 'SwiftUI', 'HealthKit', 'Core Data', 'CloudKit'],
    appStoreLink: 'https://apps.apple.com/example',
    caseStudyLink: '/case-studies/fittrack',
    features: [
      'Apple Health integration',
      'Custom workout planning',
      'Progress analytics',
      'Social sharing',
      'Achievements system'
    ]
  },
  {
    id: 'finance-app',
    title: 'MoneyMinder',
    description: 'Personal finance management app with budget tracking, expense categorization, and financial insights.',
    imageUrl: 'https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Swift', 'UIKit', 'Core Data', 'Charts', 'WidgetKit'],
    appStoreLink: 'https://apps.apple.com/example',
    features: [
      'Budget tracking',
      'Expense categorization',
      'Financial insights',
      'Widget support',
      'Secure authentication'
    ]
  },
  {
    id: 'task-manager',
    title: 'TaskFlow',
    description: 'Productivity app with task management, reminders, and focus mode to help users stay organized.',
    imageUrl: 'https://images.pexels.com/photos/5083219/pexels-photo-5083219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Swift', 'SwiftUI', 'Core Data', 'Push Notifications', 'CloudKit'],
    appStoreLink: 'https://apps.apple.com/example',
    caseStudyLink: '/case-studies/taskflow',
    features: [
      'Task management',
      'Reminders with notifications',
      'Focus mode',
      'Cloud sync',
      'Siri integration'
    ]
  },
  {
    id: 'recipe-app',
    title: 'CookBook+',
    description: 'Recipe discovery and cooking assistant with step-by-step instructions, shopping lists, and meal planning.',
    imageUrl: 'https://images.pexels.com/photos/3669638/pexels-photo-3669638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Swift', 'UIKit', 'Firebase', 'ARKit', 'Core ML'],
    appStoreLink: 'https://apps.apple.com/example',
    features: [
      'Recipe discovery',
      'Shopping lists',
      'Meal planning',
      'Nutritional information',
      'Voice-guided cooking'
    ]
  }
];