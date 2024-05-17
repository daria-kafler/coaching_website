import '../styles/form.css';
import FormQuestion from './formquestion';
import useMultistepForm from './useMultistepForm';
import { questions } from '../assets/questions.js';

const formQuestions = [...questions];

export default function Form() {
  const { steps, currentStepIndex, currentStep, isFirstStep, isLastStep, back, next } = useMultistepForm(formQuestions);

  // add onsubmit function for the form
  // have the formdata object/array state here
  // do validation

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
          <form className="form-field">
            <FormQuestion currentStep={currentStep} />
            <div className="prev-next-buttons">
              {!isFirstStep && (
                <button className="secondary-button" type="button" onClick={back}>
                  Back
                </button>
              )}
              <button className="secondary-button" type="button" onClick={next}>
                {isLastStep ? 'Finish' : 'Next'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
