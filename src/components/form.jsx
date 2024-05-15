import '../styles/form.css';
import FormQuestion from './formquestion';
import useMultistepForm from './useMultistepForm';
import { questions } from '../assets/questions.js';

const formQuestions = [...questions];

export default function Form() {
  const { steps, currentStepIndex, currentStep, isFirstStep, isLastStep, back, next } = useMultistepForm(formQuestions);

  return (
    <>
      <section id="form">
        <div className="content-wrapper">
          <h1 className="form-title">
            Ready to take the next step? <br /> Book your first chat for free.
          </h1>
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
            <div className="progress" style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}></div>
          </form>
        </div>
      </section>
    </>
  );
}
