import { useState } from 'react';

export default function FormQuestion({ currentStep }) {

  const [formData, setFormData] = useState([])

  function change(e) {
    setFormData(e.value)
  }

  // give each question unique id so you can add them to the state object/array 
  // check sendgrid to see what type of data they expect to initiate the email

  return (
    <>
      <div className="single-question">
        <h1>{currentStep.question}</h1>
        {currentStep.answerOptions !== null ? (
          currentStep.answerOptions.map((answer, index) => (
            <label className='non-text' key={index}>
              <input required type={currentStep.answerType} name='radio-group'/>
              {answer}
            </label>
          ))
        ) : (
          <label>
            {currentStep.componentType === 'input' ? (
              <input autoFocus type={currentStep.answerType}></input>
            ) : (
              <textarea autoFocus></textarea>
            )}
          </label>
        )}
      </div>
    </>
  );
}
