import '../styles/form.css';
import FormQuestion from './formquestion';
import useMultistepForm from './useMultistepForm';
import { questions } from '../assets/questions.js';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { RoughNotation } from 'react-rough-notation';
import { underlineAnnotate, highlightAnnotate } from '../assets/annotationSettings.js';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const formQuestions = [...questions];
const EMPTY_FORM = {};
questions.forEach((question) => {
  EMPTY_FORM[question.id] = '';
});


export default function Form() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [formComplete, setFormComplete] = useState(false);

  const { steps, currentStepIndex, currentStep, isFirstStep, isLastStep, back, next, goTo } =
    useMultistepForm(formQuestions);

  const templateParams = {
    ...formData,
  };

  function updateFields(fields) {
    setFormData(
      (prev) => {
        return { ...prev, ...fields };
      },
      [formComplete]
    );
  }

  function sendEmail(e) {
    e.preventDefault();
    return emailjs.send(serviceId, templateId, templateParams, { publicKey: publicKey }).then(
      () => {
        console.log('SUCCESS!');
        setFormData(EMPTY_FORM);
        goTo(0);
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
  }

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
            Ready to start or not quite sure? <br /> <RoughNotation {...underlineAnnotate} >Book a free 30-minute consultation call.</RoughNotation>
          </h1>
          {formComplete ? (
            <div style={{margin: 'auto 0'}}>
              <h2>🎉🎉🎉 Got your message, expect to receive an email from me shortly! 🎉🎉🎉</h2>
            </div>
          ) : (
            <div>
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
