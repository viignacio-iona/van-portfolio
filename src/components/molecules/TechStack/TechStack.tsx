interface TechStackProps {
  technologies: string[];
}

export const TechStack = ({ technologies }: TechStackProps) => (
  <>
    {technologies.map((tech) => (
      <span key={tech} className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-accent text-white">
        {tech}
      </span>
    ))}
  </>
); 