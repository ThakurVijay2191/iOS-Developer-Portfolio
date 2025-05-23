import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Experience } from '../data/experience';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col md:flex-row mb-12 md:mb-16 relative`}>
      {/* Timeline dot - Only visible on md and above */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500 z-10"></div>
      
      {/* Content alignment based on index */}
      <div className={`md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
        <div 
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          data-aos={isEven ? 'fade-right' : 'fade-left'}
          data-aos-duration="800"
        >
          <div className="flex items-center mb-4 justify-between">
            <div className={`flex items-center ${isEven ? 'md:flex-row-reverse' : 'flex-row'}`}>
              <div className="flex-shrink-0 h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-4">
                <div 
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${experience.logo})` }}
                ></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {experience.company}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {experience.role}
                </p>
              </div>
            </div>
            <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
              {experience.period}
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {experience.description}
          </p>
          
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement) => (
                <li key={achievement} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;