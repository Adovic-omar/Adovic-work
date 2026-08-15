import ProjectCard from './ProjectCard';

export default function ProjectList({ visibleProjects }) {
  return (
    <div className="projects-container">
      {visibleProjects.map((project) => (
        <ProjectCard key={project.id ?? project.projectName} project={project} />
      ))}
    </div>
  );
}