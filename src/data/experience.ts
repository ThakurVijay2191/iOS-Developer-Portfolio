export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo: string;
}

export const experiences: Experience[] = [
  {
    id: 'apple',
    company: 'Apple',
    role: 'Senior iOS Developer',
    period: 'Jan 2023 - Present',
    description: 'Lead developer for multiple iOS applications, focusing on performance optimization and implementing new iOS features.',
    achievements: [
      'Reduced app launch time by 40% through code optimization',
      'Implemented SwiftUI migration strategy for legacy UIKit components',
      'Led team of 5 developers for feature development',
      'Contributed to open-source Swift packages'
    ],
    technologies: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'WidgetKit'],
    logo: 'https://images.pexels.com/photos/1482055/pexels-photo-1482055.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'uber',
    company: 'Uber',
    role: 'iOS Developer',
    period: 'Mar 2021 - Dec 2022',
    description: 'Worked on the Uber Eats iOS app, focusing on the order tracking and payment processing features.',
    achievements: [
      'Implemented real-time order tracking with MapKit',
      'Integrated Apple Pay for seamless checkout experience',
      'Improved app accessibility score to 98%',
      'Reduced crash rate by 35% through robust error handling'
    ],
    technologies: ['Swift', 'UIKit', 'MapKit', 'CoreLocation', 'PassKit'],
    logo: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'spotify',
    company: 'Spotify',
    role: 'iOS Developer',
    period: 'Jun 2019 - Feb 2021',
    description: 'Developed and maintained features for the Spotify iOS app, focusing on audio playback and user experience.',
    achievements: [
      'Improved audio streaming performance in low-network conditions',
      'Implemented offline playback optimization',
      'Redesigned playlist management UI, increasing user engagement by 25%',
      'Contributed to Swift style guide and best practices documentation'
    ],
    technologies: ['Swift', 'UIKit', 'AVFoundation', 'Core Animation', 'XCTest'],
    logo: 'https://images.pexels.com/photos/3104587/pexels-photo-3104587.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'startup',
    company: 'Tech Startup',
    role: 'Junior iOS Developer',
    period: 'Jan 2018 - May 2019',
    description: 'Developed iOS applications for clients across various industries, gaining experience in the full app development lifecycle.',
    achievements: [
      'Shipped 5 iOS apps to the App Store',
      'Implemented CI/CD pipeline with Fastlane',
      'Created reusable UI component library',
      'Reduced bug resolution time by 40% through improved testing'
    ],
    technologies: ['Swift', 'Objective-C', 'UIKit', 'Firebase', 'CoreData'],
    logo: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];