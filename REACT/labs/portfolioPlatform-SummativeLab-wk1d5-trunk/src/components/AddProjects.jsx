import InputField from './reusableComponents/InputField';
import ReusableButton from './reusableComponents/ReusableButton';

export default function AddProjects({ addProject, setAddProject, onAddProject }) {
    function handleChange(e) {
        if (!addProject) return;
        
    const { name, value } = e.target;
    setAddProject((prev) => ({
      ...prev,[name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!onAddProject) return;

    await onAddProject(addProject);
    setAddProject({
      projectName: '',
      description: '',
      startDate: '',
      completionDate: ''
    });
  }

  return (
    <div className="add-project-card">
      <h3 className="section-title">Add New Project</h3>
      <form onSubmit={handleSubmit} className="project-form">
        <InputField
          label="Project Name"
          type="text"
          name="projectName"
          placeholder="Enter project name"
          value={addProject.projectName}
          onChange={handleChange}
          required
        />

        <InputField
          label="Description"
          type="textarea"
          name="description"
          placeholder="Enter project description"
          value={addProject.description}
          onChange={handleChange}
        />

        <div className="date-row">
          <InputField
            label="Start Date"
            type="date"
            name="startDate"
            value={addProject.startDate}
            onChange={handleChange}
          />

          <InputField
            label="Completion Date"
            type="date"
            name="completionDate"
            value={addProject.completionDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <ReusableButton type="submit" buttonName="Add Project" />
          <ReusableButton
            type="button"
            onClick={() =>
              setAddProject({
                projectName: '',
                description: '',
                startDate: '',
                completionDate: ''
              })
            }
            buttonName="Clear"
          />
        </div>
      </form>
    </div>
  );
}