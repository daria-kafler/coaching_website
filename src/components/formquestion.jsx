``` 
We have 4 types of questions and based on the type of current question we render the relevant question component below.
I reckon I could've handled this a bit better now in hindsight
Still the component is powerful and will render the correct type if you follow the format of questions in Question.js
```
export default function FormQuestion({ currentStep, formData, setFormData, updateFields }) {
  function updateFields(fields) {
    setFormData((prev) => {
      return { ...prev, ...fields };
    });
  }

  // Handling checkbox questions to add all the selected items in an array of answers to the relevant question
  const handleCheckboxChange = (option) => {
    const updatedValue = formData[currentStep.id] || []; // Get current array or initialize as empty array
    const updatedOptions = updatedValue.includes(option)
      ? updatedValue.filter((item) => item !== option) // Remove if already selected
      : [...updatedValue, option]; // Add if not already selected
    updateFields({ [currentStep.id]: updatedOptions }); // update fields
  };

  return (
    <>
      <div className="single-question">
        <h1>{currentStep.question}</h1>
        {currentStep.answerOptions !== null ? (
          currentStep.answerOptions.map((answer, index) => (
            <label className="non-text" key={index}>
              {currentStep.answerType === 'checkbox' ? (
                <>
                  <input
                    type="checkbox"
                    value={answer}
                    name={currentStep.name}
                    checked={(formData[currentStep.id] || []).includes(answer)}
                    onChange={() => handleCheckboxChange(answer)}
                  />
                  {answer}
                </>
              ) : (
                <>
                  <input
                    type="radio"
                    value={answer}
                    required
                    name={currentStep.name}
                    checked={formData[currentStep.id] === answer}
                    onChange={() => updateFields({ [currentStep.id]: answer })}
                  />
                  {answer}
                </>
              )}
            </label>
          ))
        ) : (
          <label className="text">
            {currentStep.componentType === 'input' ? (
              <input
                type={currentStep.answerType}
                required
                value={formData[currentStep.id]}
                name={currentStep.name}
                onChange={(e) => updateFields({ [currentStep.id]: e.target.value })}
              ></input>
            ) : (
              <textarea
                autoFocus
                required
                maxLength='500'
                value={formData[currentStep.id]}
                name={currentStep.name}
                onChange={(e) => updateFields({ [currentStep.id]: e.target.value })}
              ></textarea>
            )}
          </label>
        )}
      </div>
    </>
  );
}
