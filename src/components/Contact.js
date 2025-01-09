import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

const ContactSection = styled.section`
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;
  text-align: center;
`;

const ContactInfo = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;

  a {
    color: ${({ theme }) => theme.colors.primary};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

function Contact() {
    return (
        <ContactSection id="contact">
            <h2>Contact Me</h2>
            <ContactInfo>
                <FontAwesomeIcon icon={faEnvelope} /> Email:{' '}
                <a href="mailto:ayham.huss@gmail.com">ayham.huss@gmail.com</a>
            </ContactInfo>
            <ContactInfo>
                <FontAwesomeIcon icon={faPhone} /> Phone: <a href="tel:+9720547997273">0547997273</a>
            </ContactInfo>
            <ContactInfo>
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn:{' '}
                <a href="https://www.linkedin.com/in/ayham-hussien-190470229/" target="_blank" rel="noopener noreferrer">
                    ayham-hussien-190470229
                </a>
            </ContactInfo>
            <ContactInfo>
                <FontAwesomeIcon icon={faGithub} /> GitHub:{' '}
                <a href="https://github.com/ayham10" target="_blank" rel="noopener noreferrer">
                    ayham10
                </a>
            </ContactInfo>
        </ContactSection>
    );
}

export default Contact;
