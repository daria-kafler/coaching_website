export default function FormQuestion({ currentStep, formData, setFormData, updateFields }) {

  function updateFields(fields) {
    setFormData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const handleCheckboxChange = (option) => {
    const updatedValue = formData[currentStep.id] || []; // Get current array or initialize as empty array
    const updatedOptions = updatedValue.includes(option)
      ? updatedValue.filter((item) => item !== option) // Remove if already selected
      : [...updatedValue, option]; // Add if not already selected
    updateFields({ [currentStep.id]: updatedOptions });
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
