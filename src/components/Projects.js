import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Project = styled.div`
  margin-bottom: 40px;

  h3 {
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.primary};
    transition: background-color 0.3s ease, color 0.3s ease;
    margin-bottom: 5px;
  }

  p {
    color: ${({ theme }) => theme.colors.background};
    transition: background-color 0.3s ease, color 0.3s ease;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
  }

  ul li {
    margin-bottom: 10px;
    line-height: 1.6;
  }

  .project-links {
    margin-top: 10px;
  }

  .project-link {
    color: ${({ theme }) => theme.colors.background};
    transition: background-color 0.3s ease, color 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    margin-right: 15px;

    &:hover {
      text-decoration: underline;
    }

    svg {
       margin-right: 5px;
      color: ${({ theme }) => theme.colors.text}; /* or any other visible color */
      font-size: 1.5em; /* Adjust the size as needed */
    }
  }
`;

function Projects() {
  return (
    <ProjectsSection id="projects">
      <h2>Projects</h2>

      {/* Project 1 */}
      <Project>
        <h3>Parking Management System</h3>
        <ul>
          <li>Built a parking web app with React and Node.js for optimized performance and seamless functionality.
        </li>
          <li>
            <strong>Technologies:</strong> React HTML, CSS, JavaScript, Node.js, MongoDB.
          </li>
        </ul>
        <div className="project-links">
          <a
            href="https://github.com/ayham10/Bingo-Parking"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FaGithub /> View Repository
          </a>
        </div>
      </Project>

      {/* Project 2 */}
      <Project>
        <h3>Recycling Rewards App</h3>
        <p>
          <em>2022</em>
        </p>
        <ul>
          <li>Designed and developed a recycling app with a reward system using React, Node.js, and MongoDB.</li>
          <li>
            Integrated IoT-enabled recycling bins for real-time action verification, improving system reliability.
          </li>
        </ul>
        <div className="project-links">
            <FaGithub /> View Repository
          </a>
        </div>
      </Project>
      { /* project 3 */}
      <Project>
        <h3>Cost Manager Tool</h3>
        <ul>
          <li>Engineered a cost management system integrating Java with mySQL databases, ensuring effcient data handling.</li>
          
         
          <li>
            <strong>Technologies:</strong> 
          </li>
        </ul>
        <div className="project-links">
          <a
            href="https://github.com/amirkhalifa285/FlyEase-Backend"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FaGithub /> View Repository
          </a>
        </div>
      </Project>



              { /* project 4 */}
      <Project>
        <h3>Smart Recycling</h3>
        <ul>
          <li>enabling real-time recycling data processing.</li>
          <li>
            <strong>Technologies:</strong> Python (FastAPI), JavaScript (React, Fabric.js), SQLAlchemy, CSS, AsyncIO
          </li>
        </ul>
        <div className="project-links">
          <a
            href="https://github.com/amirkhalifa285/FlyEase-Backend"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FaGithub /> View Repository
          </a>
        </div>
      </Project>
              
    </ProjectsSection>
  );
}

export default Projects;
