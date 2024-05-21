import '../styles/form.css';
import FormQuestion from './formquestion';
import useMultistepForm from './useMultistepForm';
import { questions } from '../assets/questions.js';
import { useEffect } from 'react';
import { useState } from 'react';

const formQuestions = [...questions];

const EMPTY_FORM = {};
questions.forEach((question) => {
  EMPTY_FORM[question.id] = '';
});

export default function Form() {
  const [formData, setFormData] = useState(EMPTY_FORM);

  const { steps, currentStepIndex, currentStep, isFirstStep, isLastStep, back, next } = useMultistepForm(formQuestions);

  // !!!!!! DELETE THIS WHEN DONE
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  function onSubmit(e) {
    e.preventDefault();
    // ! below is a simple alert mechanism to make people check at least one answer when they're going through a question with multiple answers but it's a window alert so I'm not using it 
    // if (currentStep.answerType === 'checkbox' && (!formData[currentStep.id] || formData[currentStep.id].length === 0)) {
    //   alert('Please select at least one option.');
    //   return;
    // }
    if (!isLastStep) return next()
    alert('successful account creation')
  }

  function updateFields(fields) {
    setFormData((prev) => {
      return { ...prev, ...fields };
    });
  }

  return (
    <>
      <section id="form">
        <div className="content-wrapper">
          <h1 className="form-title">
            Ready to take the next step? <br /> Book your first chat for free.
          </h1>
          <div className="progress">
            <div className="progress-bar" style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}></div>
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
      </section>
    </>
  );
}
