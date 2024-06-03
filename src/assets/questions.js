// This is where you store the questions of the custom form, here you can add/remove/edit question. Make sure to follow the format of the questions I have here, if you need help with adding a different kind of question reach out to me as we might need to think about that in the context of the functional question component.

export const questions = [
  {
    question: 'First name',
    componentType: 'input',
    answerType: 'text-area',
    name: 'first-name',
    answerOptions: null,
  },
  {
    question: 'Which programs are you interested in?',
    componentType: 'input',
    answerType: 'checkbox',
    name: 'program-choice',
    answerOptions: ['Ad Hoc Chat', 'Short-term Booster', 'Medium-term Coaching', 'Not sure'],
  },
  {
    question: 'How would you like to have sessions?',
    componentType: 'input',
    answerType: 'checkbox',
    name: 'session-choice',
    answerOptions: ['On the phone', 'Video online', 'Walk & talk in London', 'Combination'],
  },
  {
    question: 'How frequently are you looking to have sessions?',
    componentType: 'input',
    answerType: 'radio',
    name: 'frequency-choice',
    answerOptions: ['+2 session per week', 'Weekly', 'Fortnightly', 'Monthly', 'Ad hoc', 'Not sure'],
  },
  {
    question: 'What regular session start times work for you?',
    componentType: 'input',
    answerType: 'checkbox',
    name: 'start-time-choice',
    answerOptions: ['Mornings', 'Afternoons', 'Evenings', "I'm flexible"],
  },
  {
    question: 'What do you want to work towards? (max 500 characters)',
    componentType: 'textarea',
    answerType: '',
    name: 'work-focus',
    answerOptions: null,
  },
  // {
  //   question: 'Would you like to join my waitlist?',
  //   componentType: 'input',
  //   answerType: 'radio',
  //   name: 'waitlist',
  //   answerOptions: ['yes', 'no'],
  // },
  {
    question: 'Email address',
    componentType: 'input',
    answerType: 'email',
    name: 'email-address',
    answerOptions: null,
  },
  {
    question: 'Phone number',
    componentType: 'input',
    answerType: 'text-area',
    name: 'phone-number',
    answerOptions: null,
  },
]

// no need to tweak this is just adding 'id' property to each question automatically to dynamically create and update the form answers
questions.forEach((question, index) => {
  question.id = index + 1
})
