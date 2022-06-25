import React from "react";
import * as S from "./Projects.styles";
import { projectsPortfolio } from "./ProjectsData";
import logoBehance from "../../svg/behance.svg";
import logoWebsite from "../../svg/website.svg";

const Projects = () => {
  return (
    <S.ContainerProjects id="projects">
      <S.Title>
        <span className="bodyfont">
          Proyectos
        </span>
      </S.Title>
      <S.ContentProject>
        {projectsPortfolio.map((project, index) => (
          <S.ProjectContent key={index}>
            <S.TitleProject className="bodyfont">{project.title}</S.TitleProject>
            <S.ContainerImage>
              <img src={project.image} alt={project.title} loazy="true" />
            </S.ContainerImage>
            <S.ContainerTechs>
              {project.techs.map((tech, index) => (
                <div key={index}>
                  <img src={tech.src} alt={tech.name} />
                  <p>{tech.name}</p>
                </div>
              ))}
            </S.ContainerTechs>
            <S.Description className="bodyfont">{project.description}</S.Description>
            <hr color="#AEB6BF"/>
            <S.ContainerFooter>
              {project.repository && (
                <a href={project.repository} target="_blank" rel="noreferrer">
                  <img src={logoBehance} alt={project.description} />
                </a>
              )}
              {project.website && (
                <a href={project.website} target="_blank" rel="noreferrer">
                  <img src={logoWebsite} alt={project.description} />
                </a>
              )}
            </S.ContainerFooter>
          </S.ProjectContent>
        ))}
      </S.ContentProject>
    </S.ContainerProjects>
  );
};

export default Projects;

