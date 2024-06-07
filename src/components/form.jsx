import '../styles/form.css';
import FormQuestion from './formquestion';
import useMultistepForm from './useMultistepForm';
import { questions } from '../assets/questions.js';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { RoughNotation } from 'react-rough-notation';
import { underlineAnnotate, highlightAnnotate } from '../assets/annotationSettings.js';

// These are your crucial settings you need to update in order to be able to receive emails from the form
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const formQuestions = [...questions];

// Setting the initial form entry to be an empty object that's filled in as the questions are answered
const EMPTY_FORM = {};
questions.forEach((question) => {
  EMPTY_FORM[question.id] = '';
});

export default function Form() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  // If the form is complete we render the congrats I'll be in touch element instead of the form
  const [formComplete, setFormComplete] = useState(false);

  // I used a custom hook for the form here. This hook allows us to easily go back and forth in the form, render the correct question, check if we are on the first or last step to render the relevant buttons. All we do is pass an array of questions to the hook and it handles everything. Here we pass formQuestions which I imported from the Questions.js where we store all the questions.

  const { steps, currentStepIndex, currentStep, isFirstStep, isLastStep, back, next, goTo } =
    useMultistepForm(formQuestions);

  // ! This is for the email that we send at the end do not change this
  const templateParams = {
    ...formData,
  };

  // Function to update the answers as the user goes through the form
  function updateFields(fields) {
    setFormData(
      (prev) => {
        return { ...prev, ...fields };
      },
      [formComplete]
    );
  }

  // ! Function to send email at the end, I would avoid changing the inputs at least
  function sendEmail(e) {
    e.preventDefault();
    return emailjs.send(serviceId, templateId, templateParams, { publicKey: publicKey }).then(
      () => {
        console.log('SUCCESS!');
        setFormData(EMPTY_FORM);
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
  }

  // Function to handle form submit at the end to send email to Daria and set the form to complete so the congrats element is rendered instead of questions.
  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    sendEmail(e).then(() => setFormComplete(true));
  }

  return (
    <>
      <section id="form">
        <div className="content-wrapper">
          <h1 className="form-title">
            Ready to start or not quite sure? <br />{' '}
            <RoughNotation {...underlineAnnotate}>Book a free 30-minute consultation call.</RoughNotation>
          </h1>
          {formComplete ? (
            <div style={{ margin: 'auto 0' }}>
              <h2>🎉🎉🎉 Got your message, expect to receive an email from me shortly! 🎉🎉🎉</h2>
            </div>
          ) : (
            <div id="form-area">
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
                ></div>
                <div className="nominal-progress">
                  {currentStepIndex + 1} / {steps.length}
                </div>
              </div>
              <form onSubmit={onSubmit} className="form-field">
                {/* We render a single question at a time based on which questions we're currently at */}
                <FormQuestion
                  currentStep={currentStep}
                  formData={formData}
                  setFormData={setFormData}
                  updateFields={updateFields}
                />
                <div className="prev-next-buttons">
                  {!isFirstStep && (
                    <button className="secondary-button" type="button" onClick={back}>
                      Back
                    </button>
                  )}
                  <button className="secondary-button" type="submit">
                    {isLastStep ? 'Finish' : 'Next'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
