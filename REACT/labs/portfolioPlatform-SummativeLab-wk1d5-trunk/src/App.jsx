import { useEffect, useState } from 'react';

import Header from './components/Header';
import './App.css';
import ProductList from './components/ProjectList';
import Search from './components/Search';
import AddProjects from './components/AddProjects';

function App() {
  // PROJECT API
  const projApi = "http://localhost:5000/projects";

  //CREATE PROJECTS STATE
  const [projects, setProjects] = useState([]);
  //CREATE SEARCH TERM STATE
  const [searchTerm, setSearchTerm] = useState('');
  //CREATE ADD PROJECTS STATE
  const [addProject, setAddProject] = useState({
    projectName: '',
    description: '',
    startDate: '',
    completionDate: ''
  });

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch(projApi);
        if (!response.ok) {
          throw new Error('Error getting request!');
        }

        const projData = await response.json();
        setProjects(Array.isArray(projData) ? projData : []);
      } catch (err) {
        console.error('Ooops! looks like there is nothing here!', err);
      }
    }

    loadProjects();
  }, []);

  async function handleAddProject(newProject) {
    try {
      const response = await fetch(projApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProject)
      });

      if (!response.ok) {
        throw new Error('Error saving project');
      }

      const savedProject = await response.json();
      setProjects((prevProjects) => [...prevProjects, savedProject]);
    } catch (err) {
      console.error('Failed to add project', err);
    }
  }

  const visibleProjects = Array.isArray(projects)
    ? projects.filter((project) =>
        project.projectName?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <section className="form-section">
          <AddProjects
            addProject={addProject}
            setAddProject={setAddProject}
            onAddProject={handleAddProject}
          />
        </section>
        <section className="search-section">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </section>
        <section className="products-section">
          <ProductList visibleProjects={visibleProjects} />
        </section>
      </main>
    </div>
  );
}

export default App;
