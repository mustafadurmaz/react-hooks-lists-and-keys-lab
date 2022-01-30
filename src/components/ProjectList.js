import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  console.log(projects[0].technologies);
  

  
  const projectName = projects.map((project) => {
    return <p key={project.id}>{project.name}</p>;
  });

  const projectAbout = projects.map((project) => {
    return <a key={project.id}>{project.about}</a>;
  });



  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
      
      <ProjectItem name={projectName[0]}  about={projectAbout[0]} technologies={projects[0].technologies}  />
      <ProjectItem name={projectName[1]}  about={projectAbout[1]} technologies={projects[1].technologies}   />
      <ProjectItem name={projectName[2]}  about={projectAbout[2]} technologies={projects[2].technologies}   />
  
      
      </div>
    </div>
  );
}

export default ProjectList;

