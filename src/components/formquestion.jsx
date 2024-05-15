export default function FormQuestion({ currentStep }) {
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
              <input type={currentStep.answerType}></input>
            ) : (
              <textarea></textarea>
            )}
          </label>
        )}
      </div>
    </>
  );
}
