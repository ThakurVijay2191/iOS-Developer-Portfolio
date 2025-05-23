import React from 'react';
import { Skill } from '../data/skills';
import * as LucideIcons from 'lucide-react';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  // Dynamic icon component based on the icon name
  const IconComponent = (LucideIcons as any)[skill.icon.charAt(0).toUpperCase() + skill.icon.slice(1)];
  
  return (
    <div 
      className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
        {IconComponent ? (
          <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        ) : (
          <LucideIcons.Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        )}
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {skill.name}
      </h3>
      
      <div className="flex space-x-1 mt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={i}
            className={`h-1.5 w-6 rounded-full ${
              i < skill.level 
                ? 'bg-blue-600 dark:bg-blue-500' 
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;