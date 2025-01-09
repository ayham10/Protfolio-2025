import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Job = styled.div`
  margin-bottom: 40px;

  h3 {
    color: ${({ theme }) => theme.colors.primary}; /* Dynamic primary color */
    margin-bottom: 5px;
    transition: color 0.3s ease; /* Smooth transition for color changes */
  }

  p {
    color: ${({ theme }) => theme.colors.accent}; /* Dynamic accent color */
    margin-bottom: 10px;
    transition: color 0.3s ease; /* Smooth transition for color changes */
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
  }

  ul li {
    margin-bottom: 10px;
    line-height: 1.6;
  }
`;

function Experience() {
  return (
    <ExperienceSection id="experience">
      <h2>Work Experience</h2>

      {/* New Job */}
      <Job>
        <h3>Poriya Hospital</h3>
        <p>
          <strong>Software Developer</strong> | <em>Jan 2024 - Present</em>
        </p>
        <ul>
          <li>
            Developed robust software solutions using Angular, C#, and SQL databases, increasing operational efciency by 30%.
          </li>
          <li>
            Conducted 50+ QA tests, reducing post-deployment errors by 25%
          </li>
          <li>
            Delivered scalable applications supporting 100+ hospital staff in daily workflows.
          </li>
        </ul>
      </Job>

      

      {/* Existing Job 2 */}
      <Job>
        <h3>Femi Premium</h3>
        <p>
          <strong>SQL-Technician, Ben-Gurion Airport</strong> | <em>May 2021 - Jun 2022</em>
        </p>
        <ul>
          <li>
            Provided technical support to the COVID-19 testing project at Ben-Gurion airport, efficiently managing over 1,000 tests daily using SQL for data management.
          </li>
          <li>
            Supplied data to customers and other departments, ensuring 99% accuracy through rigorous validation.
          </li>
          <li>
            Troubleshot and resolved SQL-based problems, reducing system downtime by 20%.
          </li>
          <li>
            Collaborated with the Ministry of Health and five major laboratories, improving collaboration efficiency by 25%.
          </li>
        </ul>
      </Job>
    </ExperienceSection>
  );
}

export default Experience;
