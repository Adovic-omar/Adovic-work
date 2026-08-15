export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
          
        <div className="project-content">  
            <h2 className="project-title">{project.projectName}</h2>
            <p className="project-description">{project.description}</p>    
            <div className="project-dates">
                <div className="date-item">
                    <span className="date-label">Started:</span>
                    <span className="date-value">{project.startDate}</span>
                </div>
                  
                <div className="date-item">
                    <span   span className="date-label">Completed:</span>
                    <span className="date-value">{project.completionDate}</span>
                </div>
            </div>
        </div>
    </article>
  );
}