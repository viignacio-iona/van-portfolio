interface TechStackProps {
  technologies: string[];
}

export const TechStack = ({ technologies }: TechStackProps) => {
  return (
    <div className="mb-4">
      <h4 className="text-sm font-bold text-white mb-2">Tech Stack:</h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-accent text-white">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}; 