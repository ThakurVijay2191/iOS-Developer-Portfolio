import React from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div 
      className={`flex flex-col lg:flex-row ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 mb-24 rounded-2xl overflow-hidden`}
      data-aos={isEven ? 'fade-right' : 'fade-left'}
      data-aos-duration="800"
      data-aos-delay={`${index * 100}`}
    >
      {/* Project Image */}
      <div className="lg:w-1/2 overflow-hidden rounded-2xl">
        <div 
          className="h-64 md:h-96 bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${project.imageUrl})` }}
        ></div>
      </div>
      
      {/* Project Info */}
      <div className="lg:w-1/2 flex flex-col justify-center p-4 md:p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {project.title}
        </h3>
        
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Key Features
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start">
                <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {project.appStoreLink && (
            <a 
              href={project.appStoreLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200 transform hover:scale-105"
            >
              App Store
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          )}
          
          {project.caseStudyLink && (
            <a 
              href={project.caseStudyLink}
              className="inline-flex items-center px-5 py-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium transition-all duration-200"
            >
              Case Study
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;