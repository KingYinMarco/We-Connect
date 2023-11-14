import React, { useState } from 'react';
import styled from 'styled-components';
import ParagraphText from '../paragraphTexts/ParagraphText';
import SectionTitle from '../titles/SectionTitle';
import FormField from './FormField';
import PrimaryButton from '../buttons/PrimaryButton';

const NetworkAIStyles = styled.div`
  padding: 10rem 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
  .form__wrapper,
  .output__wrapper {
    flex: 1;
    padding: 2rem;
    border: 1px solid #ccc;
  }
  .form__wrapper {
    max-width: 500px;
    .contact__form {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 2rem; /* Increased space between form fields */
      .contact__field--fullWidth {
        input,
        label {
          display: block;
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 0.5rem;
        }
        input {
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      }
    }
  }
  .output__wrapper {
    background-color: #f7f7f7;
    max-width: 500px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    .form__wrapper,
    .output__wrapper {
      max-width: 100%;
    }
  }
`;


function NetworkAISection() {
  const [formData, setFormData] = useState({
    jobFunction: '',
    company: '',
    school: '',
    major: '',
  });

  // New state to control the display of the formData
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submit action
    setSubmittedData(formData); // Set the submittedData to the current formData
    console.log('Form data submitted:', formData); // Log the formData to the console
    // Additional actions after form submit can be added here
  };

  return (
    <NetworkAIStyles>
      <div className="form__wrapper">
        <SectionTitle>Fill in your information</SectionTitle>
        <ParagraphText>
          Connect with hiring managers and recruiters at your dream company to
          increase your chances of landing an interview!
        </ParagraphText>
        <form className="contact__form" onSubmit={handleSubmit}>
          <FormField
            className="contact__field--fullWidth"
            type="text"
            label="Target Job Function"
            name="jobFunction"
            id="jobFunction"
            required
            onChange={handleChange}
          />
          <FormField
            className="contact__field--fullWidth"
            type="text"
            label="Target Company"
            name="company"
            id="company"
            required
            onChange={handleChange}
          />
          <FormField
            className="contact__field--fullWidth"
            type="text"
            label="School"
            name="school"
            id="school"
            required
            onChange={handleChange}
          />
          <FormField
            className="contact__field--fullWidth"
            type="text"
            label="Major"
            name="major"
            id="major"
            required
            onChange={handleChange}
          />
          <PrimaryButton type="submit" buttonType="button" className="contact__submit">
            Generate
          </PrimaryButton>
        </form>
      </div>
      <div className="output__wrapper">
        {/* Conditionally display the submittedData */}
        {submittedData && (
          <>
            <div>{submittedData.jobFunction}</div>
            <div>{submittedData.company}</div>
            <div>{submittedData.school}</div>
            <div>{submittedData.major}</div>
          </>
        )}
      </div>
    </NetworkAIStyles>
  );
}

export default NetworkAISection;
